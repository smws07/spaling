//app.js  全局的逻辑
App({
  onLaunch: function () {
   // 程序初始化的时候 需要执行的
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   //getUserInfo  全局的方法 其他的页面也可以调用
          //   success: res => {
          //     // 可以将 res 发送给后台解码出 unionId
          //     this.globalData.userInfo = res.userInfo

          //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //     // 所以此处加入 callback 以防止这种情况
          //     if (this.userInfoReadyCallback) {
          //       this.userInfoReadyCallback(res)
          //     }
          //   }
          // })
        }
      }
    })
  },
  //小程序显示的时候  
  onShow:function(){
    console.log('生命周期')
  },
  //在小程序隐藏的时候  切换后台的时候
  onHide:function(){
   console.log('后台切换时候')
  },

  
  //全局的属性
  globalData: {
    userInfo: null,
    pass:"12345"

  }
})