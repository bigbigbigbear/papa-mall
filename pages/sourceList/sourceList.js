// pages/sourceList.js

//获取应用实例
const app = getApp()

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		showtab: 0,  //顶部选项卡索引  
		tabnav: {
			tabnum: 4,
			tabitem: [
				{
					"type_id": 1,
					"type_name": "饮料"
				},
				{
					"type_id": 2,
					"type_name": "硬件"
				},
				{
					"type_id": 3,
					"type_name": "系统"
				},
				{
					"type_id": 4,
					"type_name": "会员营销"
				},
				{
					"type_id": 5,
					"type_name": "其他"
				},
				{
					"type_id": 6,
					"type_name": "其他"
				}
			]
		},
		brandsList: [
			{
				"brands_id": 1,
				"brands_name": "脉动"
			},
			{
				"brands_id": 2,
				"brands_name": "魔力"
			},
			{
				"brands_id": 3,
				"brands_name": "佳得乐"
			},
			{
				"brands_id": 4,
				"brands_name": "宝矿力"
			},
			{
				"brands_id": 5,
				"brands_name": "怡宝"
			},
			{
				"brands_id": 6,
				"brands_name": "健力宝"
			},
			{
				"brands_id": 7,
				"brands_name": "娃哈哈"
			},
			{
				"brands_id": 8,
				"brands_name": "尖叫"
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
	// 分类选择
	typeSeclect: function (e) {
		let eData = e.currentTarget.dataset;
		this.setData({
			showtab: eData.index
		})
	},
	// 品牌选择
	brandsSelect: function (e) {
		let eData = e.currentTarget.dataset;
		
	},
	goCateDetail: function (e) {
		let id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/sourceDetail/sourceDetail?id=' + id
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})