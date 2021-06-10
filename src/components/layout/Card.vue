<template>
  <div id="Card">
    <div class="card">
      <!-- ใช้ props ในการ รับข้อมูลจาก component แม่-->
      <img :src="imageURL" alt="Avatar" style="width:100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  mounted() {
    // ใช้  setInterval emit ในการ ส่งข้อมูลไปที่ methods onClock ของ component แม่
    setInterval(() => {
      this.$emit("onClock", Date())
    }, 100);
  },
  // ใช้ props ในการ รับข้อมูลจาก component แม่
  props: ["imageURL"],
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
