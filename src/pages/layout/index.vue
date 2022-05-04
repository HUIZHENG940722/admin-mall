<template>
  <div class="app-wrapper">
    <menubar class="menuBar-container"></menubar>
    <div class="main-container">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script lang="ts">
import menubar from "@/components/menubar/index.vue";
import navbar from "@/components/navbar/index.vue";
import appMain from "@/pages/layout/appMain/index.vue";
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'layout',
  components: {
    menubar,
    navbar,
    appMain,
  },
  setup: () => {
    return {

    }
  }
});
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>