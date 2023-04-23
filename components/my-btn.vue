<template>
  <button v-if="href !== null" class="btn" v-bind="$attrs">
    <slot></slot>
  </button>
  <a v-else class="btn" :href="href" v-bind="$attrs">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: null
  }
})
</script>
<style lang="scss" scoped>
.btn {
  @apply inline-flex cursor-pointer select-none items-center whitespace-nowrap rounded-sm bg-gray-800 px-3 py-2 text-base text-white hover:bg-gray-900;
}
</style>
