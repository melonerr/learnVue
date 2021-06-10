<template>
  <div id="ref">
    <br />
    <h1 class="title"><span class="midle-line">Ref</span></h1>
    <br />
    <div>
      <h1 ref="title">Waiting for change by Ref</h1>
      <input
        type="text"
        ref="input1"
        placeholder="This will be focused auto matically"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ref",
  mounted() {
    this.$refs["title"].textContent = "JR Dream vhange Ref";
    this.$refs["input1"].focus();
    // this.$refs["input1"].value = "1234";
  },
};
</script>

<style></style>
