// pages/buysth/buysth.js
Page({
  data: {
    checked: false
  },
  onChange({detail}){
    this.setData({ checked: detail });
  },
  addimg() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
      }
    });
  }
})