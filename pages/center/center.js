// pages/center.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    obj:{
      SignIn:7,
      renren:180,
      InviteNum:87
    },
    list:[
      {
        id:1,
        src:"img/info.png",
        name:"人人币明细"
      },
      {
        id:2,
        src: "img/explain.png",
        name: "规则说明"
      },
      {
        id:3,
        src: "img/q.png",
        name: "常见问题"
      },
      {
        id: 4,
        src: "img/q.png",
        name: "邀请列表"
      }
    ]
  },
  /**
   * 跳转到我的宝贝
   */
  navigateTo:function(e){
    wx.navigateTo({
      url: '../baby/baby?id=' + e.currentTarget.id
    })
  },
  /**
  * 下面的列表点击事件
  */
  navigateToRen: function (e) {
    console.log(e)
    switch (e.currentTarget.id*1){
      case 1:
        wx.navigateTo({
          url: '../myren/myren'
        });
      break;
      case 2:
        wx.navigateTo({
          url: '../info/info'
        });
      break;
      case 3:
        wx.navigateTo({
          url: '../qa/qa'
        });
      break;
      case 4:
        wx.navigateTo({
          url: '../friend/friend'
        });
      break;
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getUserInfo();
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      console.log(0)
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          console.log(2116541)
        }
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