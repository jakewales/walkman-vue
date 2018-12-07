<template>
  <div class="layout">
    <header></header>
    <div class="container">
      <aside></aside>
      <section>
        <router-view/>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {
  }
</script>

<style lang="sass" scoped>
  
</style>
