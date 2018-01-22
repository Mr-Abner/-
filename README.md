# 1、 -开发中遇到的疑问
# 2、-WeUi实例网址：
https://weui.io/#
# 3、-微信H5调用支付接口：
https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6
# 4、-关于vux $stroe getter 
https://vuex.vuejs.org/zh-cn/mutations.html
# 5、-首次进入组件的页面会报错（返回数据的body找不到）
原因：var x = this.$store.getters.all_myrest_QueryGrowthRecord这样写会报错；
      var x = this.$store.getters.all_myrest_QueryGrowthRecord.body这样不报错；
# 6、-在vue中 还可以这样添加类名 -vue动态添加类名
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
#  7、-vue 搭建项目及一些别的相关问题

http://www.cnblogs.com/wisewrong/p/6255817.html

#  8、-关于比较头疼的es6的代码规范

http://www.jianshu.com/p/69bfcb95b8d7

#  9、-你知道怎么把本地的项目放到你的GitHub上面吗？

    1.GitHub端这样配置
      找到设置里面的deploy keys
      把电脑本地唯一的秘钥放进去（用户>admin>.ssh>文件idrsa可能打不开要用linux系统才能打开）
    2.现在你就可以按正常提交走流程了 提交代码流程如下
      在本地新建文件夹下克隆（步骤一所见的远程地址）-> 会把远程下的根目录克隆下来 打开后会有一个.git文件 也就是本地仓库->在与.git文件同目录下你就可     以放你写的项目了->写好之后就可以提交代码了 提交之前先拉取 拉取的意思是把远程代码拉倒本地仓库  提交的意思是把本地的代码放在本地仓库与你拉取的代码     进行整合 完了推送意思就是把整合好的代码推送到远程——>提交代码流程完毕
 #  10、-FTP好用的工具WinSCP 
    http://blog.sina.com.cn/s/blog_a201dc3f0102w1pk.html
 #  11、-点击图片放大 
    http://blog.csdn.net/qq_33072593/article/details/74276766
 
