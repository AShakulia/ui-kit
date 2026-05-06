<script setup lang="ts">
import UIButton from './src/components/UIButton/UIButton.vue';
</script>

<template>
  <div class="demo">
    <UIButton text="primary" variant="primary"/>
    <UIButton text="secondary" variant="secondary" />
  </div>
</template>
<style scoped>
.demo {
  display: flex;
  gap: 12px;
}
</style>
