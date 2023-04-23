<template>
  <h1 class="text-lg">ABOUT</h1>
  <nuxt-link v-slot="{ navigate }" to="/" custom>
    <my-btn class="mt-5" @click="navigate">BACK TO INDEX</my-btn>
  </nuxt-link>
</template>
<script lang="ts" setup></script>
<style lang="scss"></style>
