<template>
  <div id="Clock">
    <slot>
      <span style="color:orange">Now: </span>
    </slot>
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: '',
    };
  },
  mounted() {
    setInterval(() => {
      this.time = Date();
    }, 100);
  },
};
</script>

<style scoped></style>
