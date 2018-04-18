//index.js
//获取应用实例
const app = getApp()
let utils = require("../../utils/util.js")
let api = require("../../utils/api.js")
Page({
	data: {
		areaInfo: {}
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
	onLoad: function () {
		//从全局获取区域信息
		this.setData({
			areaInfo: app.globalData.areaInfo
		})
	}
})
