Page({
  data: {
    productList:[{
      img: 1,
      name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
      sale: 599,
      factory: 899,
      payNum: 2342
    },
    {
      img: 2,
      name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
      sale: 29,
      factory: 69,
      payNum: 999
    }],
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {

  },
  onPullDownRefresh: function() {
    setTimeout(() => {
      this.setData({
        pullUpOn: true
      })
      wx.stopPullDownRefresh()
    }, 200);
  },
  onReachBottom: function() {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    })
    setTimeout(() => {
      this.setData({
        loadding: false,
        pullUpOn: false
      })
    }, 1000)
  }
})