//index.js
//获取应用实例
const app = getApp()
let getCode = false         //防止重复点击获取验证码
Page({
	data: {
		mode: 'aspectFit',
		src: '../../assets/images/icon-logo.png',
		codeInfo: '获取验证码',
		userPhone: '',
		smsCode: '',
		userName: '',
		userPassword: ''
	},
	inputPhone: function(e){
		this.setData({
			userPhone: e.detail.value
		})
	},
	inputCode: function (e) {
		this.setData({
			smsCode: e.detail.value
		})
	},
	inputName: function (e) {
		this.setData({
			userName: e.detail.value
		})
	},
	inputPassword: function (e) {
		this.setData({
			userPassword: e.detail.value
		})
	},
	//立即注册
	userSignup: function (event){
		//导航
		wx.redirectTo({
			url: "/pages/index/index",
			success: function () {
				//接口调用成功
			},
			fail: function () {
				//接口调用失败
			},
			complete: function () {
				//接口调用完成
			}
		})
		// let params = {
		// 	user_phone: this.userPhone,
		// 	sms_code: this.smsCode,
		// 	user_name: this.userName,
		// 	user_password: this.userPassword
		// }
		// wx.request({
		// 	url: '', //接口地址
		// 	data: params,
		// 	header: {
		// 		'content-type': 'application/json' // 默认值
		// 	},
		// 	success: function (res) {
		// 		console.log(res)
		// 	}
		// })
	},
	//获取验证码
	getSmsCode: function(){
		if (!getCode){
			getCode = true

			//请求验证码
			wx.request({
				url: '', //接口地址
				data: {},
				success: function (res) {
					console.log(res)
				}
			})

			//倒计时实现
			let time = 60
			this.setData({
				codeInfo: time + 'S'
			})
			let timer = setInterval(() => {
				time--
				this.setData({
					codeInfo: time + 'S'
				})
				if (time == 0) {
					this.setData({
						codeInfo: '重新发送'
					})
					getCode = false
					clearInterval(timer)
				}
			}, 1000)
		}
	},
	//去登录页面
	goLogin: function(){
		//导航
		wx.navigateTo({
			url: "/pages/login/login",
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
