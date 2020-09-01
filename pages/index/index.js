//index.js
//获取应用实例
import WeCropper from '../../we-cropper'
const app = getApp()
Page({
  data: {
      Imgurls: ''
  },
  onShow(){
    let that = this
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; //当前页面
    console.log(currPage.data.Imgurls)
    if(currPage.data.Imgurls) {
      that.setData({
        Imgurls: currPage.data.Imgurls
      })
    }
  },
  //事件处理函数
  imgUpdate: function() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success (res) {
        const src = res.tempFilePaths[0]
        wx.navigateTo({
          url: `/pages/cropper/cropper?img=${src}`
        })
      }
    })
  },

})
