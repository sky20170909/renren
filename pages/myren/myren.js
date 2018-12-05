// pages/myren.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:168,//可用人人币
    list:[
      {
        id:1,
        src:"img/1.png",
        info:"步数兑换",
        time:"2018-09-30 22:45:45",
        price:10
      },
      {
        id: 2,
        src: "img/2.png",
        info: "兑换商品",
        time: "2018-09-30 22:45:45",
        price: -10
      },
      {
        id: 3,
        src: "img/3.png",
        info: "签到奖励",
        time: "2018-09-30 22:45:45",
        price: 10
      },
      {
        id: 4,
        src: "img/4.png",
        info: "邀请奖励",
        time: "2018-09-30 22:45:45",
        price: 10
      }
    ]
  },
  exit:function(){
    wx.navigateBack({
      delta: 1
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