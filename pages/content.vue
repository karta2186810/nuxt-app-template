<template>
  <h1 class="text-lg">CONTENT</h1>
  <nuxt-link v-slot="{ navigate }" to="/" custom>
    <my-btn class="mt-5" @click="navigate">BACK TO INDEX</my-btn>
  </nuxt-link>
</template>
<script setup lang="ts"></script>
<style lang="scss"></style>
