//定义懒加载插件
// 2.vueuse可视区域---图片懒加载
import { useIntersectionObserver } from "@vueuse/core";
export const lazyPlugin = {
    install(app) {
        //   懒加载指令逻辑
        // 1、定义全局组件 实现图片懒加载
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的那个元素  img
                //binding:binding.value 指令等于号后面绑定的表达式 图片url
                console.log(el, binding)
                // 3.useuseIntersectionObserver使用
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        //进入视口区域
                        if (isIntersecting) {
                            el.src = binding.value
                            //在监听一次后就停止监听 stop解决重复监听问题
                            stop()
                        }
                    },
                )
            }
        })

    }
}