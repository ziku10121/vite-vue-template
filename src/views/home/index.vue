<script setup>
import HelloWorld from '@/components/common/HelloWorld/index.vue';
import Sidebar from '@/components/common/Sidebar/index.vue';
</script>

<template>
  <Sidebar />
  <div style="width: calc( 100% - 200px);position:absolute;left:200px;">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../../assets/svgs/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue Leo's Template !" />
  </div>
</template>
<style lang="scss" scoped></style>