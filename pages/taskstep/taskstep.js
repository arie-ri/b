Page({
  data: {
    fileList: [],
    tip: "1",
    base64: ""
  },
  onLoad() {
    const app = getApp();
  },
  afterRead(event) {
    const { file } = event.detail;
    const { fileList = [] } = this.data;
    fileList.push({
      url: file.url
    })
    this.setData({
      fileList
    })
  },
  tabChange(e) {
    let title = e.detail.title
    if (title == "二维码") {
      this.setData({
        tip: "1"
      })
    } else if (title == "链接") {
      this.setData({
        tip: "2"
      })
    } else {
      this.setData({
        tip: "3"
      })
    }
  },
  taskStepConfirm() {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      tip: this.data.tip,
      taskstepinfo: "已填写"
    })
    wx.navigateBack()
  }
});
