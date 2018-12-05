const app = getApp();
var t=1;
Page({
  data: {
    front:180,
    modelHidden:true,//弹出框
    isAnimation:false,//是否在动画
    stepNum:45000,//当前步数
    cusStep:3000,
    isStat:true,//是否开始（翻转）
    DrawList:[
      {
        id:1,
        src:"img/1.png",
        text:"1888步数",
        top:0,
        isClick:false,
        animationData: {},
      },
      {
        id: 2,
        src: "img/2.png",
        text: "谢谢参与",
        top: 0,
        isClick: false,
        animationData: {},
      },
      {
        id: 3,
        src: "img/3.png",
        text: "10元话费",
        top: "20rpx",
        isClick: false,
        animationData: {},
      },
      {
        id: 4,
        src: "img/4.png",
        text: "腾讯视频会员",
        top:0,
        isClick: false,
        animationData: {},
      },
      {
        id: 5,
        src: "img/4.png",
        text: "腾讯视频会员",
        top:0,
        isClick: false,
        animationData: {},
      },
      {
        id: 6,
        src: "img/4.png",
        text: "爱奇艺视频会员",
        top:0,
        isClick: false,
        animationData: {},
      },
      {
        id: 7,
        src: "img/3.png",
        text: "10元话费",
        top:"20rpx",
        isClick: false,
        animationData: {},
      },
      {
        id: 8,
        src: "img/1.png",
        text: "16888步数",
        top:0,
        isClick: false,
        animationData: {},
      },
      {
        id: 9,
        src: "img/4.png",
        text: "爱奇艺视频会员",
        isClick: false,
        animationData: {},
      }
    ],//奖品数据
    boxList:[
      {
        id: 1,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "1",
        bgColor: "#fff",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 2,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "2",
        bgColor: "#fafafa",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 3,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "3",
        bgColor: "#fff",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 4,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "4",
        bgColor: "#fafafa",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 5,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "5",
        bgColor: "#fff",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 6,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "6",
        bgColor: "#fafafa",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 7,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "7",
        bgColor: "#fff",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 8,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "8",
        bgColor: "#fafafa",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 9,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "9",
        bgColor: "#fff",
        num: 0,//中奖区域向上滚动的像素
      },
      {
        id: 10,
        userName: "天是海的背影",
        proName: "20块钱话费",
        time: "10",
        bgColor: "#fafafa",
        num: 0,//中奖区域向上滚动的像素
      }
    ],//中奖列表
    deviation: 0,//偏移量
  },
  statDraw:function(e){
    if (!this.data.isAnimation) {
      wx.showModal({
        title: '温馨提示',
        content: '请稍等，当前正在洗牌或翻牌中',
      });
      return;
    }
    if (this.data.stepNum < this.data.cusStep){
      this.setData({
        modelHidden: !this.data.modelHidden
      })
      return;
    }
    this.setData({
      isAnimation: !this.data.isAnimation
    })
    var id = e.currentTarget.id * 1;//用户点击的块
    if (this.data.DrawList[id].isClick){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '这位臣妾已被您翻牌了',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
    var a = this.data.DrawList;
    a[id].isClick = true;
    var that=this;
    that.setData({
      DrawList: a,
      stepNum: that.data.stepNum - that.data.cusStep,
      cusStep: that.data.cusStep + 3000,
    })
   setTimeout(function(){
     that.setData({
       isAnimation: !that.data.isAnimation
     })
   },2000)
  },
  cancel:function(){
    console.log(1)
    this.setData({
      modelHidden: !this.data.modelHidden
    })
  },
  /**
   * 规则说明
   */
  rule:function(){
    wx.showModal({
      title: '提示',
      showCancel:false,
      content: '这是一个规则说明',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  end:function(){
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    setTimeout(function () {
      that.setData({
        isStat: !that.data.isStat
      })
     }, 1000);
    setTimeout(function () {
      that.setData({
        front: 1260,
        isAnimation: !that.data.isAnimation
      })
    }, 2500);
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
    this.getHeight();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(t)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来抽奖，免费领话费了',
      path: '/page/LuckDraw/LuckDraw'
    }
  },
  util: function (obj) {
    var continueTime = (parseInt(obj.list / obj.container) + 1) * 5000;
    var setIntervalTime = continueTime;
    var animation = wx.createAnimation({
      timingFunction: "linear", //线性
    });
    this.animation = animation;
    animation.translateY(-obj.list*this.data.boxList.length).step({ duration: continueTime });
    this.setData({
      animationData: animation.export()
    })
    t=setInterval(() => {
      animation.translateY(0).step({ duration: 1, timingFunction: 'step-start' }).translateY(-obj.list * this.data.boxList.length).step({ duration: continueTime });
      this.setData({
        animationData: animation.export()
      })
    }, setIntervalTime)
  },
  getHeight() {
    var obj = new Object();
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('.con').boundingClientRect()
    query.select('.a').boundingClientRect()
    query.exec((res) => {
      obj.container = res[0].height; // 框的height
      obj.list = res[1].height; // list的height
      // return obj;
      this.util(obj);
    })
  }
})