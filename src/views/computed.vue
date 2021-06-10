<template>
  <div id="computed">
    <br />
    <h1 class="title"><span class="midle-line">computed</span></h1>
    <br>
    <h2>data: {{ firstname }} {{ lastname }}</h2>
    <h2>computed: {{ fullname }}</h2>
    <h3 style="background-color:gray;">
      Random No from computed property: {{ getrandomno }}
    </h3>
    <h3>Random No from method: {{ getrandomno1() }}</h3>
    <h3>Random No from method : {{ getrandomno1() }}</h3>
    <h3 style="background-color:gray;">
      Random No from computed property: {{ getrandomno }}
    </h3>
    <h3 style="background-color:gray;">
      Random No from computed property: {{ getrandomno }}
    </h3>
    <h3 style="background-color:gray;">
      Random No from computed property: {{ getrandomno }}
    </h3>
    <h3>Random No from method: {{ getrandomno1() }}</h3>
    <h3>Random No from method: {{ getrandomno1() }}</h3>
  </div>
</template>

<script>
export default {
  name: "computed",
  data() {
    return {
      name: "helloworld",
      firstname: "Jiravat",
      lastname: "kakeaw",
    };
  },
  methods: {
    getrandomno1: function() {
      return Math.random();
    },
  },
  //   Computed จะ Return ค่าครั้งล่าสุดเสมอ and Upadte ทุกตำแหน่งที่เรียกใช้งาน ให้เป็นค่าล่าสุด
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno: function() {
      return Math.random();
    },
  },
};
</script>

<style></style>
