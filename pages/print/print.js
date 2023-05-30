// pages/print/print.js
Page({
  data: {

  },
  chooseFile() {
    wx.chooseMessageFile({
      count: 10,
      success(res) {
        console.log(res)
      }
    })
  }
})