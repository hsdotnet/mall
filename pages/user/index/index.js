Page({
  data: {
    height: 64, //header高度
    top: 0, //标题图标距离顶部距离
    scrollH: 0, //滚动总高度
    opcity: 0,
    iconOpcity: 0.5,
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {
    let obj = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          width: obj.left || res.windowWidth,
          height: obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44),
          top: obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6),
          scrollH: res.windowWidth * 0.6
        })
      }
    })
  },
  href(e) {
    let page = Number(e.currentTarget.dataset.type)
    let url = "";
    switch (page) {
      case 1:
        break;
      case 2:
        url = "../set/set"
        break;
      case 3:
        url = "../userInfo/userInfo"
        break;
      case 4:
        url = "../myOrder/myOrder"
        break;
      case 10:
        url = "../myCoupon/myCoupon"
        break;
      case 11:
          url = "../../coupon/coupon"
        break;
        case 50:
          url = "../collection/collection"
        break;
      default:
        break;
    }
    if (url) {
      wx.navigateTo({
        url: url
      })
    } else {
      wx.showToast({
        title: "功能尚未完善~",
        icon:"none"
      })
    }
  },
  detail: function() {
    wx.navigateTo({
      url: '../../productDetail/productDetail'
    })
  },
  onPageScroll(e) {
    let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    let opcity = scroll / this.data.scrollH;
    if (this.data.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.setData({
      opcity: opcity,
      iconOpcity: 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
    })
  }
})