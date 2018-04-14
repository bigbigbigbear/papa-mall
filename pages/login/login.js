//index.js
//获取应用实例
const app = getApp()
let getCode = false         //防止重复点击获取验证码
Page({
	data: {
		mode: 'aspectFit',
		src: '../../assets/images/icon-logo.png',
		userPhone: '',
		userPassword: ''
	},
	inputPhone: function(e){
		this.setData({
			userPhone: e.detail.value
		})
	},
	inputPassword: function (e) {
		this.setData({
			userPassword: e.detail.value
		})
	},
	//登录
	userLogin: function (event){
		//导航
		wx.switchTab({
			url: "/pages/index/index",
			success: function (res) {
				//接口调用成功
				//console.log(res)
			},
			fail: function (res) {
				//接口调用失败
				//console.log(res)
			},
			complete: function (res) {
				//接口调用完成
				//console.log(res)
			}
		})
		// let params = {
		// 	user_phone: this.userPhone,
		// 	user_password: this.userPassword
		// }
		// wx.request({
		// 	url: '', //接口地址
		// 	data: params,
		// 	success: function (res) {
		// 		console.log(res)
		// 	}
		// })
	},
	//去注册页面
	goSignup: function(){
		//导航
		wx.navigateTo({
			url: "/pages/signup/signup",
			success: function(){
				//接口调用成功
			},
			fail: function(){
				//接口调用失败
			},
			complete: function(){
				//接口调用完成
			}
		})
	},
	onLoad: function (options) {
		// 1.页面初始化 options为页面跳转所带来的参数
	},
	onReady: function () {
		// 页面渲染完成
	},
	onShow: function () {
		// 页面显示
	},
	onHide: function () {
		// 页面隐藏
	},
	onUnload: function () {
    	// 页面关闭
	}	
})
