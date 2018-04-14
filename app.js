//app.js
App({
	//监听小程序初始化
	onLaunch: function (options) {
		// 展示本地存储能力
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			}
		})
		// 获取用户信息
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
					wx.getUserInfo({
						success: res => {
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo

							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		})
	},
	//监听小程序显示
	onShow: function(options){

	},
	//监听小程序隐藏
	onHide: function () {

	},
	//当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
	onHide: function (msg) {
		console.log(msg)
	},
	//当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数
	onPageNotFound: function (res) {
		wx.redirectTo({
			url: 'pages/index/index'
		})
	},
	globalData: {
		userInfo: null
	}
})