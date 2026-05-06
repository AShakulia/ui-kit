<script lang="ts" setup>
interface UIButton {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variant?: string
}
withDefaults(defineProps<UIButton>(), {
  type: 'button',
  variant: 'primary'
})
</script>
<template>
  <button
    :type="type"
    :class="variant"
  >
    {{ text }}
  </button>
</template>
<style scoped>
.primary {
  background-color: green;
  color: white;
  padding: 4px;
}

.secondary {
  background-color: blue;
  color: white;
  padding: 4px;
}
</style>