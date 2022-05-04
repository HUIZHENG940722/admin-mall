<template>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'appMain',
  setup: () => {
    return {

    }
  }
});
</script>

<style scoped>

</style>