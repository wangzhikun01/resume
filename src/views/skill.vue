<template>
  <div class="skill">
    <van-swipe class="swipe" vertical :autoplay="3000" :duration="1000">
      <van-swipe-item>
        <div class="skill-card">
          <p>熟练运用HTML5、CSS3、ES5/6，能够完成PC端、webAPP的项目开发，能够熟练运用JavaScript进行原生开发</p>
          <p>掌握ES6，理解ES6新特性，包括class、Promise对象、async/await、箭头函数、解构，并应用于项目</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="skill-card">
          <p>掌握vue，结合vant及elementUI组件库，构建SPA，搭配axios和vuex进行数据的获取和管理</p>
          <p>熟悉canvas，了解echarts、swiper等JavaScript库.熟悉NodeJS，了解express和koa服务端框架，能够使用NodeJS部署本地开发工具链及持续集成</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import SkillCircle from "../components/SkillCircle";
export default {
  data() {
    return {};
  },
  components: {
    // SkillCircle
  }
};
</script>

<style scoped>
.skill {
  background-color: #4d5e8f;
}
.swipe {
  text-align: center;
  height: 24rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.swipe-item {
}
.skill-card {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgb(182, 180, 180);
}
</style>