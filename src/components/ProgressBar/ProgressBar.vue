<template>
  <div :class="{hidden: hidden}" :style="{width: `${percent}%`}" />
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      percent: 0,
    };
  },
  methods: {
    start() {
      this.hidden = false;
    },
    finish() {
      this.hidden = true;
      this.percent = 100;
    },
  },
};
</script>

<style>
</style>