Page({
  data: {
    content: [
      {
        id: '01',
        title: '抽奖怎么玩？',
        contents: '我不告诉你',
        shows: false
      },
      {
        id: '02',
        title: '抽奖怎么玩',
        contents: '我不告诉你',
        shows: false
      },
      {
        id: '03',
        title: '为什么不告诉我？',
        contents: '因为我也不知道',
        shows: false
      },
      {
        id: '04',
        title: '抽奖怎么玩?',
        contents: '我也不知道',
        shows: false
      }
    ]
  },
  onLoad() {

  },
  showHide(e) {

    var contentFor = this.data.content;

    for (var i = 0; i < contentFor.length; i++) {
  　　if (e.currentTarget.dataset.changeid == contentFor[i].id) {
　　　　var printPrice = "content[" + i + "].shows";
　　　　if (this.data.content[i].shows) {
　　　　　　this.setData({
　　　　　　　　[printPrice]: false
　　　　　　});
　　　　} else {
　　　　　　this.setData({
　　　　　　　　[printPrice]: true
　　　　　　});
　　　　}
  　　} else {
　　　　　　var printPrice1 = "content[" + i + "].shows";
　　　　　　this.setData({
　　　　　　　　[printPrice1]: false
　　　　　　});
　　　　}
　　}
  }
})