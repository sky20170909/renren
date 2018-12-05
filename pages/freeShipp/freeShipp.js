// pages/freeShipp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:[
      {
        id:1,
        src:"img/1.png",
        icon:"img/icon2.png",
        count:10000,
        price:9.9
      },
      {
        id: 2,
        src: "img/1.png",
        icon: "img/icon2.png",
        count: 9000,
        price: 9.9
      },
      {
        id: 4,
        src: "img/1.png",
        icon: "img/icon2.png",
        count: 8000,
        price: 9.9
      }
    ],
    pro_list:[
      {
        src:"img/1.png",
        id:1,
        pro_name:"椰子原味鸡爪",
        price:9.9,
        primeCost:20.0,
        num:999
      },
      {
        src: "img/1.png",
        id: 2,
        pro_name: "椰子原味鸡爪",
        price: 9.9,
        primeCost: 20.0,
        num: 999
      },
      {
        src: "img/1.png",
        id: 3,
        pro_name: "椰子原味鸡爪",
        price: 9.9,
        primeCost: 20.0,
        num: 999
      },
      {
        src: "img/1.png",
        id:4,
        pro_name: "椰子原味鸡爪",
        price: 9.9,
        primeCost: 20.0,
        num: 999
      }
    ]
  },
  navTo:function(e){
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id + "&index=" + e.currentTarget.dataset.index
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
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   wx.showLoading({
     title: '加载中',
   });
    var arr =this.data.pro_list;
    for(var i=0,len=4;i<len;i++){
      arr.push(arr[i])
    }
    var that=this;
    setTimeout(function(){
      that.setData({
        pro_list: arr
      })
      wx.hideLoading();
    },1000)
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})