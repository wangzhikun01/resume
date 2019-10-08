<template>
  <div class="skill">
    <van-swipe class="swipe" vertical :duration="1500" :autoplay="15000">
      <van-swipe-item class="swipe-item">
        <div class="skill-card">
          <p>熟练运用HTML5、CSS3、ES5/6</p>
          <p>能够完成PC端、webAPP的项目开发，能够熟练运用JavaScript进行原生开发</p>
          <p>掌握ES6，理解ES6新特性</p>
          <p>包括class、Promise对象、async/await、箭头函数、解构，并应用于项目</p>
        </div>
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <div class="skill-card">
          <p>掌握vue，结合vant及elementUI组件库，构建SPA，搭配axios和vuex进行数据的获取和管理</p>
          <p>熟悉canvas，了解echarts、swiper等JavaScript库</p>
          <p>熟悉NodeJS，了解express和koa服务端框架，能够使用NodeJS部署本地开发工具链及持续集成</p>
        </div>
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <div class="skill-card">
          <p>熟悉git常用命令，能够使用git进行代码的版本控制</p>
          <p>熟悉前端质量保障及自动化测试，具有owner精神和责任意识</p>
          <p>了解Python及后端相关工作流，了解Linux，了解后端中间件的环境配置</p>
          <p>独立负责过项目并带领过5人的团队，熟悉工作流程的定制和优化，熟悉Jenkins持续集成</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import SkillCircle from "../components/SkillCircle";
export default {
  data() {
    return {
      isPre: false // item 是否处于全屏预览
    };
  },
  components: {
    // SkillCircle
  },
  methods: {
    showBig() {
      // item 大屏预览
      this.isPre = !this.isPre;
    }
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
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}
.swipe-item {
  width: 100% !important;
}
.skill-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: white;
}
.skill-card p {
  padding: 0.5rem 0 1rem;
}
.big {
  /* item的最大化，全屏显示 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5rem 2rem;
  background: rgba(83, 83, 83, 0.637);
}
</style>