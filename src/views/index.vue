<template>
  <div class="index">
    <div class="container">
      <!-- 套一层容器，为以后响应式布局-->
      <div class="info">
        <img class="img" :src="imgSrc" alt />
        <ul>
          <li>26岁</li>
          <li>大厂</li>
          <li>本科</li>
          <li>离职</li>
        </ul>
      </div>
      <div class="slogon">遂古之初 ， 谁传道之 ？ 唯坚唯强 ， 无知有知 。</div>
      <div class="msg-list">
        <p>王志坤</p>
        <p>字节跳动广告部测试开发</p>
        <p>zhikun110@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: require("../assets/index/me2.jpg")
    };
  }
};
</script>
<style scoped>
.index {
  background-color: #86afa4;
  color: white;
  text-align: center;
}
.info {
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
}
img {
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: auto;
}
ul {
  list-style: none;
}
ul > li {
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: #86afa4;
  border-radius: 50%;

  line-height: 4rem;
  top: 0;
  background-image: radial-gradient(2rem at 50%, #86afa4, #bdded6);
  color: rgb(255, 253, 250);
  /* font-size:1.2rem; */
  font-weight: 600;
}
ul > li:first-child {
  left: 3rem;
}
ul > li:nth-child(2) {
  /* left: 19rem; */
  right: 1rem;
  top: 1rem;
}
ul > li:nth-child(3) {
  left: 3rem;
  top: 10rem;
}
ul > li:last-child {
  /* left: 16rem; */
  right: 3rem;
  top: 11rem;
}
.slogon {
  font-size: 1.2rem;
  border-bottom: 1px white solid;
  margin: 1rem 0.5rem 0.5rem;
  padding-bottom: 1rem;
}
.msg-list {
  padding: 0.5rem 0;
}
.msg-list::after {
  /**接触边距融合 */
  content: "";
  display: block;
  overflow: hidden;
}
.msg-list p {
  margin-bottom: 0.5rem;
  font-size:1.2rem;
}

</style>