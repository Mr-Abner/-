# -开发中遇到的疑问
# -WeUi实例网址：
https://weui.io/#
# -微信H5调用支付接口：
https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6
# -关于vux $stroe getter 
https://vuex.vuejs.org/zh-cn/mutations.html
# -首次进入组件的页面会报错（返回数据的body找不到）
原因：var x = this.$store.getters.all_myrest_QueryGrowthRecord这样写会报错；
      var x = this.$store.getters.all_myrest_QueryGrowthRecord.body这样不报错；
