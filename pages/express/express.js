// pages/express/express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    smallcount: 0,
    middlecount: 0,
    bigcount: 0,
    arriveshow: false,
    sexshow: false,
    sexcolumns: ["不限","男","女"]
  },
  goAddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  arrivetime() {
    this.setData({
      arriveshow: true
    })
  },
  sexselect() {
    this.setData({
      sexshow: true
    })
  },
  onClose() {
    this.setData({
      arriveshow: false,
      sexshow: false
    })
  },
})