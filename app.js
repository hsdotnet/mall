//app.js
App({
  onLaunch: function() {
    
  },
  onError (err) {
    //全局错误监听
    // console.log("发生错误：" + err)
    // const res = wx.getSystemInfoSync()
    //let errMsg = "手机品牌：" + res.brand + "；手机型号：" + res.model + "；微信版本号：" + res.version + "；操作系统版本：" + res.system + "；客户端平台：" + res.platform + "；错误描述：" + err;

  },
  globalData: {
    isLogin: wx.getStorageSync("thorui_mobile") ? true : false,
    version: "1.0.1",
    isOnline: false
  }
})