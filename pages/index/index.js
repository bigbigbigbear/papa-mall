//index.js
//获取应用实例
const app = getApp()

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
		cateList: [
			{
				type_id: 1,
				type_name: '饮料',
				type_icon: '../../assets/images/icon-cate-1.png'
			},
			{
				type_id: 2,
				type_name: '硬件',
				type_icon: '../../assets/images/icon-cate-2.png'
			},
			{
				type_id: 3,
				type_name: '系统',
				type_icon: '../../assets/images/icon-cate-3.png'
			},
			{
				type_id: 4,
				type_name: '会员营销',
				type_icon: '../../assets/images/icon-cate-4.png'
			}
		],
		supplyList: [
			{
				supply_id: 1,
				supply_name: '脉动橘子味550ml',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			},
			{
				supply_id: 2,
				supply_name: 'Apple手表',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			},
			{
				supply_id: 3,
				supply_name: '橙汁贩卖机',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			},
			{
				supply_id: 4,
				supply_name: '场馆管理系统',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			},
			{
				supply_id: 5,
				supply_name: '场馆小助手',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			},
			{
				supply_id: 6,
				supply_name: '会员二次开发',
				supply_price: '9.90',
				supply_banner: '买三送一',
				supply_img_url: '../../assets/images/maidong.png'
			}
		]
	},
	//跳往分类列表
	goCateList: function(e){
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceList/sourceList?id=' + id
		})
	},
	goCateDetail: function(e){
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceDetail/sourceDetail?id=' + id
		})
	},
	//监听页面加载
	onLoad: function () {
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
