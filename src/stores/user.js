//用户管理数据相关
import { loginAPI } from "@/apis/user";
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cateStore.js'
import { mergeCartAPI } from '@/apis/cart'
// user模块名
export const usedefineStore = defineStore('user', () => {
    //    定义管理用户数据state
    const cartStore = useCartStore()
    const userInfo = ref({})
    //    定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        //合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }
    // 退出时请清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()

    }
    //    以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }


}, { persist: true, })