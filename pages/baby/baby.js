// pages/baby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:true,//为真是已发货。假为待发货
    list_a:[
      {
        id: 1,
        src: "img/1.png",
        pro_name: "全网通10元话费",
        price: 100
      },
      {
        id: 2,
        src: "img/2.png",
        pro_name: "全网通30元话费",
        price: 100
      },
      {
        id: 3,
        src: "img/3.png",
        pro_name: "爱奇艺包月会员",
        price: 100,
        code: "EBQQZAPHMFUEnpfA"
      },
      {
        id: 4,
        src: "img/4.png",
        pro_name: "爱奇艺包月会员",
        price: 100,
        code: "EBQQZAPHMFUEnpfA"
      }
    ],
    list_b:[
      {
        id: 1,
        src: "img/1.png",
        pro_name: "全网通10元话费",
        price: 100
      },
      {
        id: 2,
        src: "img/2.png",
        pro_name: "全网通30元话费",
        price: 100
      },
      {
        id: 3,
        src: "img/3.png",
        pro_name: "爱奇艺包月会员",
        price: 100,
        code:"EBQQZAPHMFUEnpfA"       
      },
      {
        id: 4,
        src: "img/4.png",
        pro_name: "爱奇艺包月会员",
        price: 100,
        code: "EBQQZAPHMFUEnpfA"  
      }
    ]
  },
  exit:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  chageState:function(){
    this.setData({
      state: !this.data.state
    })
  },
  copyBtn: function (e) {
    console.log(e)
    wx.setClipboardData({
      //准备复制的数据
      data: e.currentTarget.dataset.code,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      this.setData({
        state: !this.data.state
      })
    }
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