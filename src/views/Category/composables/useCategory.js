import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
// 获取路由参数
import { useRoute, onBeforeRouteUpdate } from "vue-router";
// 封装分类数据业务相关代码
export function useCategory() {
    // 获取数据
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    };
    onMounted(() => getCategory());

    //第2种 路由缓存问题解决,使用 onBeforeRouteUpdate钩子函数，做精确更新
    //目标：路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        //to 目标路由对象
        // 存在问题：使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id);
    });
    return {
        categoryData
    }
}