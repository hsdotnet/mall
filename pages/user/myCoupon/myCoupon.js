Page({
  data: {
    tabs: [{
      name: "未使用"
    }, {
      name: "已使用"
    }, {
      name: "已过期"
    }],
    currentTab: 0,
    loadding: false,
    pullUpOn: true,
    scrollTop: 0
  },
  onLoad: function(options) {

  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
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