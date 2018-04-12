//index.js
//获取应用实例
const app = getApp()

Page({
	//页面的初始数据
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	//事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	//监听页面加载
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	//监听页面初次渲染完成
	onReady: function(){

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
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
