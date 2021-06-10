<template>
  <div id="Condition">
    <br />
    <h1 class="title"><span class="midle-line">Condition</span></h1>
    <center>
      <h2>v-if, v-else, v-show v-for</h2>
    </center>
    <br />

    <div class="V-for">
      <ul>
        <!-- loop array -->
        <li v-for="(item, index) in ['Angular', 'Vue', 'React']" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul>
        <!-- loop Valiable -->
        <li v-for="(list, index) in language" :key="index">{{ list }}</li>
      </ul>
      <ul>
        <!-- loop Valiable OBJ-->
        <li v-for="(detail, index) in detail" :key="index">
          Language: {{ detail.language }} <br />
          Framework:{{ detail.framework }}<br /><br />
        </li>
      </ul>
      <ul>
        <!-- loop Valiable OBJ-->
        <li v-for="({ language, framework }, index) in detail" :key="index">
          {{ language }} <br />
          {{ framework }}<br /><br />
        </li>
      </ul>

      <input type="text" placeholder="text..." v-model="course.language"/><br /><br />
      <input type="number" placeholder="number..." v-model="course.level"/><br /><br />
      <button @click="addData">Submit</button><br /><br />
      <ul>
        <!-- Dynamic loop Valiable OBJ-->
        <li v-for="(data, index) in DynamicData" :key="index">
          {{ data.language }} <br />
          {{ data.level }}<br />
          <button @click="removeData(index)">x</button><br /><br />
        </li>
      </ul>
    </div>
    <hr>
    <br>
    <div class="null">
      <input type="text" v-model="input" />
      <br />
      <br />

      <div v-if="input !== null">
        Not null
      </div>
      <div v-else-if="input === null || input === ''">
        Null
      </div>
      <div v-else>
        Error
      </div>
    </div>
    <div class="toggle">
      <div v-if="isShow">
        true
      </div>
      <div v-else>
        false
      </div>
      <!-- Render show เฉพาะเงื่อนใขที่ตรงกัน  -->
    </div>
    <div class="v-show">
      <div v-show="isShow">
        v-show
      </div>
      <!-- Render show ใน inspace แต่ Display none หากเป็บ false -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 10000);
  },
  methods: {
    addData() {
      this.DynamicData.push(this.course);
      this.course = {
        language:'',
        level:0
      }
    },
    removeData(index){
 this.DynamicData.splice(index,1);
    }
  },
  data() {
    return {
      input: null,
      isShow: false,
      language: ["Javascript", "PHP", "CSS", "HTML", "JAVA", "Python"],
      course:{
        language:'',
        level:0
      },
      DynamicData: [],
      detail: [
        {
          id: 0,
          language: "Javascript",
          framework: ["Angular", "VueJS", "React"],
          status: true,
        },
        {
          id: 1,
          language: "Python",
          framework: ["Django", "Flask"],
          status: true,
        },
        {
          id: 2,
          language: "PHP",
          framework: ["Laravel", "Codeigniter", "Symfony"],
          status: true,
        },
        {
          id: 3,
          language: "CSS",
          framework: ["Bootstrap", "Tailwind ", "Materialize", "Bulma"],
          status: true,
        },
      ],
    };
  },
};
</script>

<style></style>
