<template>
  <div id="slot">
    <br />
    <h1 class="title"><span class="midle-line">Slot A</span></h1>
    <br />
    <Clock>
      <span style="color:red">Date now: </span>
    </Clock>
    <Clock>
      <span style="color:green">เวลาปัจจุบัน: </span>
    </Clock>
    <br>
    <br>
    <Clock>
      <span style="color:green">Use tage and Attribute: </span>
      <small>smal</small><br>
      <b>B</b><br>
      <i>I</i><br>
      <u>U</u><br>
      <span style="color:green">Date: </span>
    </Clock>
    <br>
    <br>
    <!-- using fallback -->
    <Clock />
  </div>
</template>

<script>
import Clock from "@/components/layout/Clock.vue";
export default {
  name: "slot",
  components: {
    Clock,
  },
};
</script>

<style></style>
