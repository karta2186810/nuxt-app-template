<template>
  <div>
    <div class="">
      {{ counter }}
      <div class="flex gap-3">
        <button @click="counter--">minus</button>
        <button @click="counter++">add</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/index'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>
