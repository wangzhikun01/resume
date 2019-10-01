<template>
    <canvas id="circle" :width="w" :height="h"></canvas>
</template>
<script>
export default {
    data() {
        return {
            w:0,
            h:0,// 画布的宽高，只能使用HTML属性来设置
            ctx:{},//动画的上下文
        }
    },
    created() {
        this.w = parseInt(window.innerWidth*0.9);
        this.h = this.w;
    },
    mounted() { // 挂载后，获取上下文
        this.ctx = document.getElementById('circle').getContext('2d');
        this.init();
    },
    methods:{
        init(){
            console.log('初始化动画');
            let ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(this.w/2,this.h/2,80,0,2*Math.PI);
            ctx.fill();
        },
    }
}
</script>
<style scoped>
#circle{
    background: white;
}
</style>