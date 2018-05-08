//index.js
//获取应用实例
const app = getApp()
let utils = require("../../utils/util.js")
let api = require("../../utils/api.js")
let getCode = false         //防止重复点击获取验证码
Page({
	data: {
		mode: 'aspectFit',
		src: '../../assets/images/logo-3.png',
		codeInfo: '获取验证码',
		userPhone: '',
		smsCode: '',
		userName: '',
		stadiaName: '',
		stadiaArea: '',
		cid: '',
		sid: ''
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
	inputStadiaName: function (e) {
		this.setData({
			stadiaName: e.detail.value
		})
	},
	inputStadiaArea: function (e) {
		this.setData({
			stadiaArea: e.detail.value
		})
	},
	//立即注册
	userSignup: function (event){
		let phone = this.data.userPhone,
			code = this.data.smsCode,
			name = this.data.userName,
			stadiaName = this.data.stadiaName,
			stadiaArea = this.data.stadiaArea,
			aid = app.globalData.aid,
			that = this
		if(phone == ''){
			wx.showToast({
				title: '手机号不能为空',
				icon: 'none'
			})
			return false
		}
		if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone))) {
			wx.showToast({
				title: '手机号错误！',
				icon: 'none'
			})
			return false
		}
		if (code == '') {
			wx.showToast({
				title: '验证码不能为空',
				icon: 'none'
			})
			return false
		}
		if (name == '') {
			wx.showToast({
				title: '姓名不能为空',
				icon: 'none'
			})
			return false
		}
		if (stadiaName == '') {
			wx.showToast({
				title: '场馆名不能为空',
				icon: 'none'
			})
			return false
		}
		let params = {
			user_phone: phone,
			msm_core: code,
			user_name: name,
			user_info: stadiaName + '，' + stadiaArea,
			supply_area: aid
		}
		//请求验证码
		utils.request({
			url: api.signup,
			data: params
		}, function (res) {
			wx.showToast({
				title: '注册成功',
				duration: 2000,
				success: function(res){
					//导航
					if (that.data.cid != '' && that.data.cid != null){
						wx.navigateTo({
							url: "/pages/cooperateDetail/cooperateDetail?id=" + that.data.cid
						})
						return false
					}
					if (that.data.sid != '' && that.data.sid != null) {
						wx.navigateTo({
							url: '/pages/sourceDetail/sourceDetail?id=' + that.data.sid
						})
						return false
					}
					wx.switchTab({
						url: "/pages/index/index"
					})
				}
			})
		})
	},
	//获取验证码
	getSmsCode: function(){
		let that = this
		if (!getCode){
			getCode = true

			let phone = this.data.userPhone
			if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone))){
				wx.showToast({
					title: '手机号错误！',
					icon: 'none'
				})
				getCode = false
				return false
			}
			//请求验证码
			utils.request({
				url: api.getSmsCode,
				data: {
					user_phone: phone
				}
			}, function (res) {
				
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
		// console.log(options)
		if(options.cid){
			this.setData({
				cid: options.cid
			})
		}
		if (options.sid) {
			this.setData({
				cid: options.sid
			})
		}
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
