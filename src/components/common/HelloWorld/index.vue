<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const toggleCollapse = () => {
  console.log('toggle');
}
</script>

<template>
  <div data-v-c45b27d3="" class="v-collapse custom-hover">
    <i data-v-69f03f1f="" class="el-icon v-icon cursor-pointer"
      style="font-size: 18px; --color: var(--top-header-text-color); --69f03f1f-hoverColor: undefined;"
      @click="toggleCollapse">
      <img src="../../../assets/svgs/collapse.svg" class="logo" alt="Vite logo" />
    </i>
  </div>
  <h1>{{ msg }}</h1>

  <div class="card bg-gray-200">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p class="text-blue-400">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="text-cyan-400">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}

i {
  cursor: pointer;
}
</style>
