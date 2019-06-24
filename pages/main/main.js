const app = getApp()

Page({
  data: {
    formList: {},
    sexList: [{
      value: "男",
      name: "man"
    }, {
      value: "女",
      name: "woman"
    }],
    likeList: [{
      value: "吃饭",
      name: "eating"
    }, {
      value: "睡觉",
      name: "sleeping"
    }, {
      value: "打豆豆",
      name: "playing"
    }],
    addressList: ["黄浦区", "天河区", "越秀区"],
  },
  inputChange: function(e) {
    this.setData({
      formList: {
        name: e.detail.value
      }
    })
  },
  radioChange: function(e) {
    this.setData({
      formList: {
        sex: e.detail.value
      }
    })
  },
  checkboxChange: function(e) {
    this.setData({
      formList: {
        like: e.detail.value
      }
    })
  },
  bindTextAreaBlur: function(e) {
    this.setData({
      formList: {
        remark: e.detail.value
      }
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      formList: {
        addressIndex: e.detail.value
      }
    })
  },
  sliderChange: function (e) {
    this.setData({
      formList: {
        age: e.detail.value
      }
    })
  },

  switchChange: function (e) {
    this.setData({
      formList: {
        isAgree: e.detail.value
      }
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件', e.detail.value)
    wx.request({
      //请求接口
      url: 'https://tcb-api.tencentcloudapi.com',

      //请求方法
      method: 'POST',

      //请求参数
      data: {
        params: this.data.formList
      },

      //请求头
      header: {
        'content-type': 'application/json' // 默认值
      },

      //请求成功后的回调函数
      success(res) {
        console.log(res.data)
      },

      //请求失败后的回调函数
      fail(res) {
        console.log(res.data)
      },

      //接口调用结束的回调函数（调用成功、失败都会执行）
      complete(res) {
        console.log(res.data)
      }
    })
    console.log("注册")
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})