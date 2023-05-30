// index.js
Page({
  data: {
    helplist: [
      {
        title: "取快递",
        img: "/icon/快递员.png",
        url: "/pages/express/express"
      },
      {
        title: "代打印",
        img: "/icon/开通服务.png",
        url: "/pages/print/print"
      },
      {
        title: "买东西",
        img: "/icon/餐旅服务.png",
        url: "/pages/buysth/buysth"
      },
      {
        title: "取/送东西",
        img: "/icon/接机服务.png",
        url: "/pages/deliversth/deliversth"
      },
      {
        title: "助个力",
        img: "/icon/好友助力.png",
        url: "/pages/zgl/zgl"
      },
      {
        title: "其它需求",
        img: "/icon/其它通用.png",
        url: "/pages/otherhelp/otherhelp"
      },
    ],
    shoplist: [
      {
        title: "小卖铺",
        img: "/icon/购物.png",
        url: "/pages/express/express"
      },
      {
        title: "跳蚤市场",
        img: "/icon/跳蚤市场.png",
        url: "/pages/express/express"
      },
    ]
  },
  onLoad() {
    console.log(this.data.list)
  },


})
