// pages/detail.js
import util from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "img/bg1.png", //背景图
    dataImg: "img/bg1.png",   //内容缩略图
    ewrImg: "img/bg1.png",  //小程序二维码图片
    systemInfo: {
      screenHeight:890,
      windowWidth:500
    },  //系统类型
    canvasWidth: 0,   //canvas的宽
    canvasHeight: 0 ,  //canvas的高
    isModel:true,
    price: 100,//
    id:1,//商品id
    index:0,//商品顺序，死的，要改
    list:[
      {
        src:"../index/img/1.png",
        text:"全网通10元话费"
      },
      {
        src: "../index/img/2.png",
        text: "全网通30元话费"
      },
      {
        src: "../index/img/3.png",
        text: "爱奇艺包月会员"
      },
      {
        src: "../index/img/4.png",
        text: "腾讯视频包月会员"
      }
    ]
  },
  /**
   * 下载需要的图片资源到本地
   */
  downloadImages: function () {
    console.log(1)
    let that = this;
    // wx.downloadFile({
    //   url: that.data.ewrImg,
    //   success: function (res) {//  小程序二维码图
    //     wx.downloadFile({
    //       url: that.data.ewrImg,
    //       success: function (res1) {//  小程序二维码图
    //         wx.downloadFile({
    //           url: that.data.ewrImg,
    //           success: function (res2) {//  小程序二维码图
    //             that.convas(res.tempFilePath, res1.tempFilePath, res2.tempFilePath);
    //           },
    //           fail: function (e) {
    //             console.log(e)
    //           }
    //         });
    //       },
    //       fail: function (e) {
            
    //       }
    //     });
    //   },
    //   fail: function (e) {
       
    //   }
    // });
    
    that.convas(that.data.bgImg, that.data.list[that.data.index].src, that.data.list[that.data.index].src);
  },
  /**
   * 将需要分享的信息绘制成图片
   */
  convas: function (bgImg, dataImg, ewrImg) {
    console.log(1)
    let that = this;
    var ctx = wx.createCanvasContext('myCanvas');
    var scWidth = that.data.systemInfo.windowWidth;
    var scHeight = that.data.systemInfo.screenHeight;
    var defaultHeight = 0.020 * that.data.systemInfo.screenHeight;
    console.log(bgImg, scWidth, scHeight)
    //第一步：刻画背景图
    ctx.drawImage(bgImg, 0, 0);
    
    //第二步：刻画背景色
    ctx.setFillStyle('white');
    // ctx.fillRect(20, 30, scWidth - 40, scHeight - 60);
    //第三步：刻画内容缩略图
    var imgHeight = 400;//parseInt(this.imageProportion());
    ctx.drawImage(dataImg,75, 60, 75, 75);
    //  第五步：刻画小程序码
    ctx.drawImage(ewrImg, 90, 300, 75, 75);
    //第六步：提示用户，长按图片下载或分享
    ctx.setFontSize(10)
    ctx.setFillStyle('#fff')
    ctx.fillText(that.data.list[that.data.index].text, 85, 390);

    ctx.draw(false, function (e) {
      //第八步：生成图片并预览
      
     // that.savePic();
    });
  },
 
  /**
   * 白拿，下单
   */
  orderDown:function(){
    wx.showLoading({
      title: '发送请求...',
    })
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        id:this.data.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.showToast({
          title: '成功白拿',
          icon: 'success',
          duration: 2000
        })
        console.log(res.data)
      },
      fail(res){
        wx.hideLoading();
      }
    })
  },
  share:function(){
    this.setData({
      isModel: !this.data.isModel
    })
  },
  /**
   * 下载海报
   */
  savePic: function () {
    let that = this;
    //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
    wx.canvasToTempFilePath({
      width: this.data.systemInfo.windowWidth,
      height: this.data.systemInfo.screenHeight,
      destWidth: this.data.systemInfo.windowWidth * 3,
      destHeight: this.data.systemInfo.screenHeight * 3,
      canvasId: 'myCanvas',
      success: function (res) {
        //预览图片
        util.savePicToAlbum(res.tempFilePath)
      },
      fail: function (res) {
        console.log("出错了:" + JSON.stringify(res));
      }, complete: function () {
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      index: options.index
    })
    this.downloadImages();
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