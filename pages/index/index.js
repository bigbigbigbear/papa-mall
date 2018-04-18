//index.js
//获取应用实例
const app = getApp()
let utils = require("../../utils/util.js")
let api = require("../../utils/api.js")
Page({
	//页面的初始数据
	data: {
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
		duration: 1000,
		imgUrls: [
			'../../assets/images/slider-1.jpg',
			'../../assets/images/slider-2.jpg'
		],
		cateList: [],
		supplyList: [],
		reachBottomText: '上拉加载更多...',
		supplyPage: 1,
		supplySize: 6,
		supplyTotal: 6
	},
	//跳往分类列表
	goCateList: function(e){
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceList/sourceList?id=' + id
		})
	},
	goSourceDetail: function(e){
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceDetail/sourceDetail?id=' + id
		})
	},
	//获取分类
	getCateList: function(){
		let that = this
		let params = {
			type_status: 1, 
			page: 1, 
			size: 200
		}
		utils.request({url: api.typeList, data: params}, function (res) {
			that.setData({
				cateList: res.list
			})
		})
	},
	//获取资源推荐
	getSupplyList: function () {
		let that = this
		if (that.data.supplyTotal / that.data.supplySize < that.data.supplyPage - 1) {
			that.setData({
				reachBottomText: '- 讨厌，到底啦 -'
			})
			return false
		}
		let params = {
			area_id: app.globalData.aid, 
			page: that.data.supplyPage,
			size: that.data.supplySize
		}
		utils.request({url: api.supplyList, data: params}, function (res) {
			that.setData({
				supplyList: that.data.supplyList.concat(res.list),
				supplyPage: that.data.supplyPage + 1,
				supplyTotal: res.total
			})
		})
	},
	//监听页面加载
	onLoad: function () {
		let that = this
		app.getAuthKey(function(){
			that.getCateList()
			that.getSupplyList()
		})
	},
	//监听页面初次渲染完成
	onReady: function () {

	},
	//监听页面显示
	onShow: function () {

	},
	//监听页面隐藏
	onHide: function () {

	},
	//监听页面卸载
	onUnload: function () {

	},
	//监听用户下拉
	onPullDownRefresh: function () {

	},
	//页面上拉触底事件的处理函数
	onReachBottom: function () {
		this.getSupplyList()
	},
	//用户点击右上角转发
	onShareAppMessage: function () {

	},
	//页面滚动触发事件的处理函数
	onPageScroll: function () {

	},
	//当前是 tab 页时，点击 tab 时触发
	onTabItemTap: function (item) {
		console.log(item.index)
		console.log(item.pagePath)
		console.log(item.text)
	}
})
