<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TimeInput :count="1"></TimeInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeInput from '@/components/TimeInput.vue';

@Component({
  components: {
    TimeInput,
  },
})
export default class Home extends Vue {}
</script>
