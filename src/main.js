<<<<<<< HEAD
import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

// 测试接口函数
import { getCategory } from '@/apis/testAPi'
getCategory().then(res => {
    console.log(res)
})
//导入
import { createPinia } from 'pinia'
//执行，得到实例
const pinia = createPinia()
//把pinia加入app中
createApp(App).use(pinia).mount('#app')
=======
// vue初始化的css
// import './assets/main.css'
// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'
import { componentPlugin } from './components'
//  2.vueuse可视区域---图片懒加载
// import { useIntersectionObserver } from "@vueuse/core";
/* 测试接口函数
import { getCategory } from '@/apis/testAPi'
getCategory().then(res => {
    console.log(res)
}) */
//导入pinia
import { createPinia } from 'pinia'
// import { version } from 'less'
//执行，得到实例
const pinia = createPinia()
//把pinia加入app中

const app = createApp(App)

// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
//封装起来了
// // 1、定义全局组件 实现图片懒加载
// app.directive('img-lazy', {
//     mounted(el, binding) {
//         //el:指令绑定的那个元素  img
//         //binding:binding.value 指令等于号后面绑定的表达式 图片url
//         console.log(el, binding)
//         // 3.useuseIntersectionObserver使用
//         useIntersectionObserver(
//             el,
//             ([{ isIntersecting }]) => {
//                 console.log(isIntersecting)
//                 //进入视口区域
//                 if (isIntersecting) {
//                     el.src = binding.value
//                 }
//             },
//         )
//     }
// })
>>>>>>> b61af38 (first commit)
