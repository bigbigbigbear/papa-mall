// pages/sourceList.js
//获取应用实例
const app = getApp()
let utils = require("../../utils/util.js")
let api = require("../../utils/api.js")
//在使用的View中引入WxParse模块
let WxParse = require('../../wxParse/wxParse.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		cId: '',
		cooperateInfo: {},
		tags: [],
		items: [],
		areaInfo: {}
	},
	//获取合作详情
	getCooperateDetail: function (id) {
		let that = this
		let params = {
			id: id
		}
		utils.request({ url: api.cooperateInfo, data: params }, function (res) {
			let tags = res.cooperate_tag
			if(tags == ''){
				tags = []
			}else{
				tags = tags.replace('，', ',').split(',')
			}
			that.setData({
				cooperateInfo: res,
				tags: tags
			})
			//使用插件wxParse转化富文本,https://github.com/icindy/wxParse
			/**
			* WxParse.wxParse(bindName , type, data, target,imagePadding)
			* 1.bindName绑定的数据名(必填)
			* 2.type可以为html或者md(必填)
			* 3.data为传入的具体数据(必填)
			* 4.target为Page对象,一般为this(必填)
			* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
			*/
			WxParse.wxParse('article1', 'html', res.cooperate_instance, that, 0)
			WxParse.wxParse('article2', 'html', res.cooperate_policy, that, 0)
		})
	},
	//获取合作项目
	getCooperateItems: function (id) {
		let that = this
		let params = {
			cooperate_id: id,
			area_id: app.globalData.aid,
			supply_status: 1,
			page: 1,
			size: 10
		}
		utils.request({ url: api.supplyList, data: params }, function (res) {
			if (res.total > 0) {
				that.setData({
					items: res.list
				})
			}
		})
	},
	//去资源详情页
	goSourceDetail: function (e) {
		let sid = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceDetail/sourceDetail?id=' + sid
		})
	},
	//去注册
	goSignup: function () {
		wx.navigateTo({
			url: '/pages/signup/signup?cid=' + this.data.cId
		})
	},
	//拨打电话
	makePhoneCall: function (e) {
		let phone = e.currentTarget.dataset.phone
		if (phone.length > 0) {
			wx.makePhoneCall({
				phoneNumber: phone
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			cId: options.id,
			areaInfo: app.globalData.areaInfo
		})
		this.getCooperateDetail(options.id)
		this.getCooperateItems(options.id)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},
	onShareAppMessage: function (res) {
		let that = this
		let aid = app.globalData.aid
		// 当用户将小程序转发到任一群聊之后，可以获取到此次转发的 shareTicket，此转发卡片在群聊中被其他用户打开时，可以在 App.onLaunch() 或 App.onShow 获取到另一个 shareTicket
		wx.showShareMenu({
			withShareTicket: true
		})
		//右上角转发from:'menu'
		if (res.from === 'button') {
			// 来自页面内转发按钮
			//console.log(res.target)
		}
		return {
			title: that.data.supplyInfo.supply_name,
			path: '/pages/sourceDetail/sourceDetail?id=' + that.data.sourceId + '&aid=' + aid,
			success: function (res) {
				// 转发成功
				//console.log(res)
				//获取转发信息
				wx.getShareInfo({
					shareTicket: res.shareTickets[0],
					success: function (_res) {
						// encryptedData: ""      包括敏感数据在内的完整转发信息的加密数据
						// errMsg: "getShareInfo:ok"        信息
						// iv: ""          加密算法的初始向量
						console.log(_res)
					},
					fail: function (_res) {
						console.log(_res)
					}
				})
			},
			fail: function (res) {
				// 转发失败
				console.log(res)
			}
		}
	}
})