<template>
  <div id="binding">
    <br />
    <h1 class="title"><span class="midle-line">Binding (v-bind)</span></h1>
    <br />
    <img v-bind:src="imgURL" class="img-radius" v-bind:width="imgWidth" />
    <br />
    <!-- short form -->
    <a :href="LinkURL" :target="openNewTab">Google</a>
    <!--  Binding CSS Class and Style -->
    <br />
    <div :class="[true ? error : '', font]">Error</div>
    <div :style="{ color, fontSize: fontSize }">Binding Style</div>
    <!-- style OBJ -->
    <br />
    <button @click="isActive = !isActive">Chang Style</button>
    <br />
    <br />
    <div :style="isActive ? styleObj : ''" :class="fontSizeB">
      Binding Style
    </div>
  </div>
</template>

<script>
export default {
  name: "binding",
  data() {
    return {
      imgURL: "https://placekitten.com/640/360",
      imgWidth: "80%",
      LinkURL: "https://www.google.com/",
      openNewTab: "_blnk",
      error: "error_class",
      font: "font-size",
      color: "green",
      fontSize: "60px",
      fontSizeB: "subHerd",
      styleObj: {
        color: "white",
        backgroundColor: "green",
        fontSize: "30px",
      },
      isActive: false,
    };
  },
};
</script>

<style scroped>
.img-radius {
  border-radius: 15px;
  box-shadow: 0 5px 8px 0 rgb(0 0 0 / 10%), 0 3px 10px 0 rgb(0 0 0 / 10%);
}
.error_class {
  color: red;
}
.font-size {
  font-size: 36px;
}
.subHerd {
  font-size: 30px;
}
</style>
