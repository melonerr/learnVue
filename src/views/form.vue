<template>
  <div id="form">
    <br />
    <h1 class="title">
      <span class="midle-line">Form Input and V Model</span>
    </h1>
    <br />
    <form v-on:submit.prevent="btnSunmit">
      <div>
        <label for="first_name">Firstname: </label>
        <input
          type="text"
          class="first_name"
          id="first_name"
          v-model="applicant.firstname"
          v-bind:maxlength="textmax"
        />&emsp; <span>{{ textmax - applicant.firstname.length }}</span>
        <br /><br />
        <label for="last_name">Lastname: </label>
        <input
          type="text"
          class="last_name"
          id="last_name"
          v-model="applicant.lastname"
        />&emsp; <span>{{ textmax - applicant.lastname.length }}</span>
        <br /><br />
      </div>
      <!-- Gender -->
      <div>
        <span v-bind:class="p10">Gender:</span>
        <label for="gender">male</label>
        <input
          type="radio"
          name="gender"
          v-bind:class="m20"
          value="male"
          v-model="applicant.gender"
        />
        <label for="gender">female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          v-model="applicant.gender"
        />
        <br />
        <br />
      </div>
      <!-- Couse -->
      <div>
        <span v-bind:class="p10">Couses:</span>
        <select name="Couses" id="Couses" v-model="applicant.Couses">
          <option value="Vue">Vue</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
      </div>
      <br />
      <div>
        <button type="submit">Sunmit</button>&emsp;
        <button type="button" @click="btnClear()">Clear</button>
      </div>
    </form>
    <br /><br />
    <div>
      Data: <span style="color:red"> {{ JSON.stringify(applicant) }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      applicant: {
        firstname: "",
        lastname: "",
        gender: "",
        Couses: "",
      },
      textmax: 15,
      p10: "p-10",
      m20: "m-20",
    };
  },
  methods: {
    btnSunmit() {
      //    event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    btnClear() {
      this.applicant = {
        firstname: "",
        lastname: "",
        gender: "",
        Couses: "",
      };
    },
  },
};
</script>

<style scroped>
.p-10 {
  padding-right: 10px;
}
.m-20 {
  margin-right: 20px;
}
</style>
