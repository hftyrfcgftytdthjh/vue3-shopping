import { defineStore } from "pinia";
import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/layout";
export const useCategoryStore = defineStore('category', () => {
    //state 数据
    const CategoryList = ref([]);
    //action 方法
    const getCategory = async () => {
        const res = await getCategoryAPI();
        CategoryList.value = res.result;
    }
    return {
        getCategory,
        CategoryList
    }
}
)