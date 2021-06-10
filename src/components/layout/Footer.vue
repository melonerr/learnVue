<template>
  <div id="Footer">
    <div class="footer">
      <p> {{title}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:[
    "title",
  ],
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #222222;
  color: white;
  text-align: center;
}
</style>
