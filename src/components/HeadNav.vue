<template>
  <div class="head-nav">
    <div class="title" @click="openAndClose">
      导航
      <span class="iconfont">{{listShow?'&#xe6a5;':'&#xe6a4;'}}</span>
    </div>
    <div class="list" v-show="listShow" @click="openAndClose">
      <router-link v-for="(item,linkNum) of linkList" :to="item.link" :key="linkNum">{{item.msg}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            listShow:false,
            linkList:[
                {link:'index',msg:'首页'},{link:'skill',msg:'能力'},
                {link:'experience',msg:'经历'},{link:'product',msg:'作品集'},
                {link:'contact',msg:'联系我'},
            ]
        }
    },
    methods:{
        openAndClose(){ // 点击改变 listShow 的布尔值，来切换list 的div是否显示
            this.listShow = !this.listShow;
        }
    },
    watch:{
        currentUrl(){
            let route_name = this.$route.hash
        }
    },
};
</script>
<style scoped>
.title {
  text-align: center;
  color: white;
  font-size: 1.1rem;
}
.list {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.4);
  margin-top: 0.5rem;
}
.iconfont {
  color: rgb(243, 237, 237); /**设置首页后面，那个按钮的颜色 */
}
.list > a {
  display: inline-block;
  box-sizing: border-box;
  width: 25%;
  text-align: center;
  text-decoration: none;
  color: black;
}
.router-link-active{
    color:#38bcff !important;
}
</style>>
