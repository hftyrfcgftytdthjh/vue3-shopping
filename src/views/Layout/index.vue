<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFix from "./components/LayoutFixed.vue";
import { onMounted } from "vue";

//触发获取导航列表的action
import { useCategoryStore } from "@/stores/category";
const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategory());
</script>

<template>
  <div>
    <LayoutNav />
    <LayoutFix />
    <LayoutHeader />
    <!--路由缓存问题解决 1. 给 routerv-view 添加key属性，破坏缓存 -->
    <!-- <RouterView :key="$route.fullPath" /> 但是太浪费-->
    <RouterView></RouterView>
    <LayoutFooter />
  </div>
</template>