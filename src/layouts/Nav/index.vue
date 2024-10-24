<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
});
const isGoBack = ref(window.history.length > 1);
const router = useRouter(); //獲取路由實例
const route = useRoute(); //獲取當前路由實例

const pageTitle = computed(() => {
  return route.meta.title || props.title;
});

const goBack = () => {
  router.back();
};

const goHome = () => {
  router.push({ path: "/" });
};

watch(route, () => {
  // 如果 `oldPath` 存在，表示是從其他頁面導航過來的
  isGoBack.value = window.history.state.position >= 1 ?? false;
});
</script>
<template>
  <nav class="navbar">
    <!-- Back -->
    <div class="back-btn">
      <a href="#" v-if="isGoBack" @click.prevent="goBack">
        <span class="material-icons-outlined"> arrow_back_ios_new </span>
      </a>
    </div>
    <!-- Title -->
    <div class="title">{{ pageTitle }}</div>
    <div class="back-home">
      <a @click.prevent="goHome">
        <span class="material-icons-outlined"> home </span>
      </a>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>
