<template>
  <div class="foot-btn" @click="nextPage">
    <span class="iconfont move">&#xe623;</span>
  </div>
</template>
<script>
export default {
  methods: {
    nextPage() {
      let index = this.$store.state.linkList.indexOf(this.$route.name);
      let link = index == -1 ? undefined : this.$store.state.linkList[++index];
      console.log("......", index, link);
      if (link) {
        // 有下一页
        this.$router.push(link);
      }
    }
  },
};
</script>
<style scoped>
.foot-btn {
  text-align: center;
  color: white;
}
.move {
  font-size: 2rem;
  display: inline-block;
  /* transition:all .5s; */
  animation: swipe 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-direction: alternate-reverse;
}
@keyframes swipe {
  to {
    padding-bottom: 20px;
  }
  /* 25%{
        padding-bottom:13px;
        opacity: .7;
    }
    50%{
        padding-bottom: 16px;
        opacity: .4;
    }
    75%{
        padding-bottom: 19px;
        opacity: .1;
    }
    100%{
        padding-bottom: 20px;
        opacity: 0;
    } */
}
</style>