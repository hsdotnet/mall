Page({
  data: {
    tabs: [{
      name: "未使用",
      state: 1,
      couponList: [{},{},{}]
    }, {
      name: "已使用",
      state: 2,
      couponList: [{}]
    }, {
      name: "已失效",
      state: 3,
      couponList: [{},{},{},{},{},{}]
    }],
    couponList:[],
    currentTab: 0,
    loadding: false,
    pullUpOn: true,
    scrollTop: 0
  },
  onLoad: function(options) {
    let that = this;
    that.setData({
      couponList: that.data.tabs[that.data.currentTab].couponList
    })
  },
  change(e) {
    let that = this;
    let index = e.detail.index;
    this.setData({
      currentTab: index,
      couponList: that.data.tabs[index].couponList
    });
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