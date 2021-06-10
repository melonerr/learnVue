<template>
  <div id="component">
    <br />
    <h1 class="title">
      <span class="midle-line">Component</span>
    </h1>
    <br />
    <!-- ใช้ props ในการ ส่งข้อมูลไปที่ component ลูก-->

    <!-- Event  @onClock="onClock" เรียกใช้งาน mounted ที่ component ลูก -->
    <Card
      imageURL="https://www.w3schools.com/howto/img_avatar.png"
      @onClock="onClock"
    />
    <br />
    <br />
    <span> {{ time }} </span>
    <br />
    <br />
    <br />
    <Card imageURL="https://www.w3schools.com/howto/img_avatar2.png" />
  </div>
</template>

<script>
// import components Body
import Card from "@/components/layout/Card.vue";

export default {
  name: "component",
  data() {
    return {
      time: "",
    };
  },
  components: {
    Card,
  },
  methods: {
    // รับค่า value จาก mounted ของ component ลูก มาเก็บไว้ที่ this.time
    onClock(value) {
      this.time = value;
      // this.time = moment(value).format('MM/DD/YYYY hh:mm:ss')
    },
  },
};
</script>

<style></style>
