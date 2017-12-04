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
# -在vue中 还可以这样添加类名 -vue动态添加类名
vue 
动态添加class类名，灵活得让你发狂，下面示例几个

<template>
    <div>
        <h2>动态添加类名</h2>


        <!-- 第一种方式:对象的形式 -->
        <!-- 第一个参数 类名， 第二个参数：boolean值 -->
        <!-- 对象的形式: 用花括号包裹起来，类名用引号， -->
        <!-- 优点: 以对象的形式可以写多个，用逗号分开 -->
        <p :class="{'p1' : true}">对象的形式(文字的颜色)</p>
        <p :class="{'p1' : false, 'p': true}">对象的形式(文字的颜色)</p>


        <!-- 第二种方式:三元表达式 注意点：放在数组中，类名要用引号-->
        <p :class="[ 1 < 2 ? 'p1' : 'p' ]" >三元表示式(文字的颜色)</p>


        <!-- 第三种方式: 数组的形式 -->
        <p :class="[isTrue, isFalse]">数组的形式(文字的颜色)</p>


        <!-- 数组中用对象 -->
        <p :class="[{'p1': false}, isFalse]">数组中使用对象(文字的颜色)</p>
    </div>
</template>


<script>
    export default {
        data () {
           return {
               isTrue: 'p1',
               isFalse: 'p'
           }
        }
    }
</script>


<style scoped>
    .p1 {
        color: red;
        font-size: 30px;
    }
    .p {
        color: blue
    }
</style>
# -
