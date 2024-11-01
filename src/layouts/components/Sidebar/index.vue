<script setup></script>
<template>
  <!-- class:has-logo -->
  <div class="sidebar-container">
    <!-- logo -->
    <div class="sidebar-logo-container">
      <a href="#/" class="logo">
        <img src="" class="sidebar-logo" alt="Logo" />
      </a>
    </div>
    <div class="menu">
      <div>
        <div class="scrollbar-wrap">
          <div class="scrollbar-view">
            <ul role="menubar" class="menu-list">
              <li role="menuitem" class="menu-item">
                <svg
                  data-v-f9f7fefc=""
                  aria-hidden="true"
                  class="svg-icon"
                  data-v-18eeea00=""
                >
                  <use data-v-f9f7fefc="" xlink:href="#icon-guide"></use>
                </svg>
                <span class="item-title"></span>
              </li>
              <li class="menu-item">
                <div role="menuitem" class="sub-menu-title">
                  <svg
                    data-v-f9f7fefc=""
                    aria-hidden="true"
                    class="svg-icon"
                    data-v-18eeea00=""
                  >
                    <use data-v-f9f7fefc="" xlink:href="#icon-guide"></use>
                  </svg>
                  <span class="menu-title"> 首頁 </span>
                  <i
                    class="el-icon el-sub-menu__icon-arrow"
                    style="transform: rotateZ(180deg)"
                  >
                    <svg
                      data-v-f9f7fefc=""
                      aria-hidden="true"
                      class="svg-icon"
                      data-v-18eeea00=""
                    >
                      <use data-v-f9f7fefc="" xlink:href="#icon-guide"></use>
                    </svg>
                  </i>
                </div>
                <ul role="menu" class="menu-list">
                  <li role="menuitem" class="menu-item">
                    <span class="menu-title"> 分析頁 </span>
                  </li>
                  <li role="menuitem" class="menu-item">
                    <span class="menu-title"> 工作臺 </span>
                  </li>
                </ul>
              </li>
              <li class="menu-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar-container {
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  border-right: 1px solid #eee;
  .sidebar-logo-container,
  .menu {
    width: 100%;
  }
}
</style>
