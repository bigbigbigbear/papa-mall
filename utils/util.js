// 引入相关的文件
const config = require('./config')
const DEFAULT_REQUEST_OPTIONS = {
	host: config.server.host,
	url: '',
	data: {},
	header: {
		"Content-Type": "application/json"
	},
	method: 'POST'
}

/**
 * @function 微信请求方法封装，并发请求
 * @param {*} method 请求类型
 * @param {*} host 域名地址
 * @param {*} url 接口地址
 * @param {*} data 参数数据
 */
function wxRequest(opt) {
	let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt)
	let { host, url, data, header, method } = options

	if (typeof url === 'string' && url) {
		// 单接口请求，返回一个数据
		return new Promise((resolve, reject) => {
			let requestTask = wx.request({
				method: method,
				url: host + url,
				data: data,
				header: header,
				success: function (res) {
					resolve(res.data)
				},
				fail: function (err) {
					reject(err)
				},
				complete: function () {
					//console.log('请求完毕');
				}
			})
		});
	} else if (url instanceof Array) {
		// 如果url为数组，则属于多接口请求
		return Promise.all(
			url.map((val, index, arr) => {
				return requestFn({
					method,
					host,
					url: val,
					data: data[index]
				})
			}));
	} else {
		throw new Error('url不能为空');
	}
}
// 使用方法
// utils.wxRequest({
// 	url: ['/users/list', '/users/list']
// })
// 	.then((res) => {
// 		console.log(res);
// 	}).catch(err => {
// 		console.log(err);
// 	});
/**
 * 不带loading的请求
 */
function request(url, params, success) {
	this.requestLoad(url, params, "", success)
}

/**
 * 带loading的请求
 * @params url:网络请求的url
 * @params params:请求参数
 * @params message:进度条的提示信息
 * @params success:成功的回调函数
 * @params fail：失败的回调
 */
function requestLoad(url, params, message, success) {
	if (message != "") {
		wx.showLoading({
			title: message
		})
	}
	wx.request({
		url: config.server.host + url,
		data: params,
		header: {
			//'content-type': 'application/json',
			'content-type': 'application/x-www-form-urlencoded',
			'token': 'daxiong'
		},
		method: 'POST',
		success: function (res) {
			if (message != "") {
				wx.hideLoading()
			}
			if (res.statusCode == 200) {
				success(res.data)
			} else if (res.statusCode == 500) {
				wx.showToast({
					title: '服务器异常，请重试！',
					duration: 2000
				})
			} else {
				wx.showToast({
					title: res,
					duration: 2000
				})
			}
		},
		fail: function (res) {
			if (message != "") {
				wx.hideLoading()
			}
			wx.showToast({
				title: '请求失败，请重试！',
				duration: 2000
			})
		},
		complete: function (res) {
			//请求完成
		}
	})
}
//使用
// utils.requestLoad('users/list', data, '正在加载...', function (res) {
// 	//res就是我们请求接口返回的数据
// 	//console.log(res)
// })
/**
 * 格式化时间，参数date
 */
const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 格式化数字
 */
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

module.exports = {
	wxRequest: wxRequest,
	request: request,
	requestLoad: requestLoad,
	formatTime: formatTime
}
