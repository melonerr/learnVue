<template>
  <div id="modifier">
    <br />
    <h1 class="title">
      <span class="midle-line">modifier</span>
    </h1>
    <br />
    <form v-on:submit.prevent="btnSunmit">
      <div>
        <label for="first_name">Firstname: </label>
        <input
          type="text"
          class="first_name"
          id="first_name"
          v-model.trim="applicant.firstname"
          v-bind:maxlength="textmax"
        />&emsp; <span>{{ textmax - applicant.firstname.length }}</span>
        <br /><br />
        <label for="last_name">Lastname: </label>
        <input
          type="text"
          class="last_name"
          id="last_name"
          v-model.lazy="applicant.lastname"
        />&emsp; <span>{{ textmax - applicant.lastname.length }}</span>
        <br /><br />
        <label for="age">Age: </label>
        <input type="number" id="age" v-model.number="applicant.age" />
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
        <button
          type="button"
          @click.exact="btnClear()"
          @click.alt="useDefault()"
        >
          Clear
        </button>
      </div>
    </form>
    <br /><br />
    <div>
      Data: <span style="color:red"> {{ JSON.stringify(applicant) }} </span>
    </div>
    <br />
    <br />
    <br />
    <br />
    <table width="80%" style="color:green">
      <tr>
        <td><h3>submit.prevent</h3></td>
        <td><h3>: Not reset data in form whe submit</h3></td>
      </tr>
      <tr>
        <td width="30%"><h3>v-model.trim</h3></td>
        <td width="70%"><h3>: Remove space in data output</h3></td>
      </tr>
      <tr>
        <td><h3>v-model.number</h3></td>
        <td><h3>: Change type data to number</h3></td>
      </tr>
      <tr>
        <td><h3>v-model.lazy</h3></td>
        <td><h3>: กด submit ถึง show data</h3></td>
      </tr>
      <tr>
        <td>
          <h3>
            @click.exact <br />
            @click.alt
          </h3>
        </td>
        <td>
          <h3>
            : exact กัน Error เวลามี 2 @click <br />: click.alt กด alt+click
            จะทำงานอีก function
          </h3>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "modifier",
  data() {
    return {
      applicant: {
        firstname: "",
        lastname: "",
        gender: "",
        Couses: "",
        age: 0,
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
        age: 0,
      };
    },
    useDefault() {
      this.applicant = {
        firstname: "UNKNOWN",
        lastname: "UNKNOWN",
        gender: "male",
        Couses: "vue",
        age: 10,
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
