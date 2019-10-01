<template>
  <div class="skill">
    <div class="circle">
        <skill-circle></skill-circle>
    </div>
  </div>
</template>

<script>
import SkillCircle from "../components/SkillCircle";
export default {
    data() {
        return {
  
        }
    },
    components:{
        SkillCircle
    }
};
</script>

<style scoped>
.skill {
  background-color: #4d5e8f;
}
.circle{
    text-align: center;
}
</style>