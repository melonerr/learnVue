<template>
  <div id="app">
    <Header />
    <Content />
    <Footer title="Footer v 1.0.1" />
  </div>
</template>

<script>
// import component
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/content.vue";

export default {
  name: "app",
  components: {
    //Use component
    Header,
    Footer,
    Content,
  },
};
</script>

<style>
body {
  margin: 0;
}
#binding,
#component,
#computed,
#form,
#home,
#intro,
#modifier {
  margin: 15px;
}
.title {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

.midle-line {
  background: #fff;
  padding: 0 10px;
}
</style>
