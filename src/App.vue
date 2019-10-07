<template>
  <div id="app" @wheel="changePage">
    <head-nav class="head-nav"></head-nav>
    <router-view class="main" />
    <foot-btn class="foot-btn" ref="foot" v-show="current!='contact'"></foot-btn>
  </div>
</template>

<script>
import HeadNav from "./components/HeadNav";
import FootBtn from "./components/FootBtn";

export default {
  data() {
    return {
      wheelTimer: 0, // 定时器
      current: "" //当前路由名字
    };
  },
  components: {
    HeadNav,
    FootBtn
  },
  methods: {
    changePage(e) {
      // 切换页面
      clearTimeout(this.wheelTimer);
      this.wheelTimer = setTimeout(() => {
        // 做了个防抖
        if (e.deltaY > 0) {
          // 向上巴拉,展示下一页
          this.$refs.foot.nextPage();
        } else {
          this.prePage();
        }
      }, 150);
    },
    prePage() {
      // 上一页
      let index = this.$store.state.linkList.indexOf(this.$route.name);
      let link = index == -1 ? undefined : this.$store.state.linkList[--index];
      console.log("......", index, link);
      if (link) {
        // 有下一页
        this.$router.push(link);
      }
    }
  },
  created() {
    this.current = this.$route.name;
  },
  updated() {
    // 更新时，判断一下当前连接，决定是否显示底部的按钮
    this.current = this.$route.name;
  }
};
</script>

<style>
.app {
  text-align: center;
}
.head-nav {
  position: absolute;
  top: 0.5rem;
  z-index: 100;
  width: 100%;
}
.main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10; /* 在图层的下面*/
  box-sizing: border-box;
  padding-top: 4rem;
  transition:all 1s;
}
.foot-btn {
  position: absolute;
  bottom: 0px;
  z-index: 100;
  width: 100%;
}
</style>
