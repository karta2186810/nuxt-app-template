<template>
  <h1 class="text-lg">INDEX</h1>
  <div class="mt-5 flex items-center gap-3">
    <nuxt-link v-slot="{ navigate }" to="/about" custom>
      <my-btn @click="navigate">前往ABOUT</my-btn>
    </nuxt-link>
    <nuxt-link v-slot="{ navigate }" to="/content" custom>
      <my-btn @click="navigate">前往CONTENT</my-btn>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss"></style>
