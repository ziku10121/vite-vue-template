<script setup>
import Sidebar from "@/layouts/components/Sidebar/index.vue";
</script>
<template>
  <Sidebar></Sidebar>
  <!-- <main>
    <SideBar>
    <header></header>
    <body>
      <transition>
        <router-view></router-view>
      </transition>
    </body>
    <footer></footer>
  </main> -->
  <router-view> </router-view>
</template>
