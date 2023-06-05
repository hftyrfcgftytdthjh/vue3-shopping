//封装banner轮播图相关代码,业务逻辑以use打头
import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";
// 封装业务逻辑
export function useBanner() {
    //轮播图，1为首页，2为其他导航页
    const bannerList = ref([]);

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: "2",
        });
        console.log(res);
        bannerList.value = res.result;
    };
    onMounted(() => getBanner());
    // 函数内部把组件中需要用到的数据或方法return出去
    return {
        bannerList
    }
}