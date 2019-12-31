let e_container = document.getElementsByClassName('container')[0];// 页面容器
let e_bar_list = document.getElementsByClassName('bar'); // 分割条数组

// 静态遍历区域
const bar_change_time = 2000; // 分割条变换背景色时间
/**
 * 初始化的自调用函数
 */
(
    function () {
        // 重置 容器高度
        let container_height = window.getComputedStyle(e_container).height;
        container_height = parseFloat(container_height);
        if (container_height < window.innerHeight) {
            e_container.style.height = window.innerHeight + 'px'
        }

    }
)();


/**
 * 初始化动画
 */
(
    function () {
        // 分割条定时变色
        for (let key of e_bar_list) {
            setInterval(function () {
                key.style.backgroundColor = range_color();
            }, bar_change_time);
        };
        // 背景：滚动鼠标变色
        let body_bgc_timer;
        window.addEventListener("wheel", function (e) {
            if (!body_bgc_timer) {
                clearTimeout(body_bgc_timer);
            }
            body_bgc_timer = this.setTimeout(function () {
                document.body.style.backgroundColor = range_color();
            }, 50);
        })
    }
)()


