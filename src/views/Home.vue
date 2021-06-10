<template>
  <div id="home">
    <br>
    <h1 class="title"><span class="midle-line">Home</span></h1>
    <br>
    <h1>{{ title }}</h1>
    <hr />
    <h2>{{ count }}</h2>
    <h3>{{ array }}</h3>
    <button @click="upCount">Up</button> &emsp;
    <button @click="downCount">Down</button> <br /><br />
    <button @click="pushToArray(count)">Push</button>&emsp;
    <button @click="UnsetToArray()">Unset</button>
    <br />
    <hr />
    <br />
    <div>
      <input
        type="text"
        placeholder="Enter your message..."
        v-model="message"
      />
      <span> {{ message }} </span><br /><br />
      <button @click="resetData()">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "test",
      count: 0,
      array: [],
      message: "",
    };
  },
  methods: {
    upCount() {
      this.count++;
    },
    downCount() {
      this.count--;
    },
    pushToArray: function(count) {
      this.array.push(count);
      console.log(this.array);
    },
    UnsetToArray: function() {
      this.array.splice(0);
    },
    resetData: function() {
      this.message = "";
    },
  },
};
</script>
