<template>
  <div id="LifecycleHooks">
    <br />
    <h1 class="title"><span class="midle-line">Lifecycle Hooks</span></h1>
    <br />
    <span> {{ counter }} </span>
    <br />
    <br />
    <button @click="add">Change</button>
    <div>
      <ul>
        <li v-for="(item, index) in Lifecycle" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifecycleHooks",
  data() {
    return {
      counter: 0,
      Lifecycle: [
        // ทำงานเมื่อกดมาที่ route ที่มีไฟล์นี้อยู่
        "beforeCreate()",
        "created()",
        "mounted()",
        //  end

        // ทำงานเมื่อมีการเปลี่ยนแปลงค่า
        "beforeUpdate()",
        "updated()",
        // end

        // ทำงานเมื่อกดไปที่ route อื่น
        "beforeDestroy()",
        "destroyed()",
        // end
      ],
    };
  },
  methods: {
    add() {
      this.counter++;
    },
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("Before Destroy");
  },
  destroyed() {
    console.log("Destroyed");
  },
};
</script>

<style scoped>
li {
  /* padding: 5px; */
}
</style>
