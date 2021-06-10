<template>
  <div id="NormalState">
    <br />
    <h1 class="title">
      <span class="midle-line">Normal vs State Variables</span>
    </h1>
    <br />
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
  </div>
</template>

<script>
export default {
  name: "NormalState",
  mounted() {
    setInterval(() => {
      this.count++;
    }, 10000);
    setTimeout(() => {
      // alert("Timeout");
    }, 10000);
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped></style>
