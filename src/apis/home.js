import httpInstance from '@/utils/http'

//获取banner
export function getBannerAPI(params = {}) {
    //解构赋值
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}
export function findNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}
export function findHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}
// 获取所有商品模块
export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}

