//index.js
//获取应用实例
const app = getApp();
var interval;
var ctx = wx.createCanvasContext('canvasArcCir');
Page({
  data: {
    hiddenModel: true,
    isSingIn:false,//是否签到
    StepNum:18888,//今日步数
    day:5,// 签到天数
    num:168,//我的人人币
    list:[
      {
        id:1,
        src:"img/1.png",
        unit:"人人币",
        userName:"全网通10元话费",
        price:10,
        residue:20
      },
      {
        id: 2,
        src: "img/2.png",
        unit: "人人币",
        userName: "全网通30元话费",
        price: 10,
        residue: 20
      },
      {
        id: 3,
        src: "img/3.png",
        unit: "人人币",
        userName: "爱奇艺包月会员",
        price: 10,
        residue: 20
      },
      {
        id: 4,
        src: "img/4.png",
        unit: "人人币",
        userName: "腾讯视频包月会员",
        price: 10,
        residue: 20
      }
    ]
  },
  //弹出签到框
  model:function(){
    this.setData({
      hiddenModel: !this.data.hiddenModel
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/index/index'
    }
  },
  //签到
  singIn:function(e){
    if(!this.data.isSingIn){
      wx.showToast({
        title: '签到成功',
        icon:"success",
        detail:2000
      })
      this.setData({
        day:++this.data.day,
        isSingIn: !this.data.isSingIn,
        hiddenModel: !this.data.hiddenModel
      })
    }else{
      wx.showToast({
        title: '您今天已经签到了',
      })
    }
  },
  detail:function(e){
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id + "&index=" + e.currentTarget.dataset.index
    })
  },
  close:function(){
    this.setData({
      hiddenModel: !this.data.hiddenModel
    })
  },
  drawCircle: function () {
    function drawArc(s, e) {
      ctx.setFillStyle('white');
      ctx.clearRect(0, 0, 200, 200);
      ctx.draw();
      var x = 100, y = 100, radius = 80;
      ctx.setLineWidth(9);
      ctx.setStrokeStyle('#d1203d');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(x, y, radius, s, e, false);
      ctx.stroke()
      ctx.draw()
    }
    var step=20, startAngle = 0.9 * Math.PI, endAngle = 0;
    var animation_interval = 1000, n = 46;
    if (step <= n) {
      endAngle = step * 2 * Math.PI / n + 0.8 * Math.PI;
      drawArc(startAngle, endAngle);
      step++;
    } 
    // varName = setInterval(animation, animation_interval);
  },
  onLoad: function () {
    //微信运动
    this.drawCircle();
    wx.getWeRunData({
      success(res) {
        console.log(res)
        const encryptedData = res.encryptedData;
        console.log(encryptedData)
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function () {
    //创建并返回绘图上下文context对象。
    var cxt_arc = wx.createCanvasContext('canvasCircle');
    cxt_arc.setLineWidth(10);
    cxt_arc.setStrokeStyle('#f9d2d8');
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    cxt_arc.arc(100, 100, 80, 0.9 * Math.PI, 2.08 * Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.draw();
  }
})
