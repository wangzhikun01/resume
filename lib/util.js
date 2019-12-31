// 公共函数库

/**
 *  随机颜色
 */
function range_color(opacity){
    let s = '#';
    let index = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for(let key = 0;key<8;key++){
        s += index[Math.floor(Math.random()*index.length)];
    }
    // console.log('随机颜色：',s);
    return s;
}