<template>
  <div id="filter">
    <br />
    <h1 class="title"><span class="midle-line">filter</span></h1>
    <br />
    <div>
      <h2>{{ 1234 | currency("THB") }}</h2>
      <h2>{{ 200000000000 | byte }}</h2>
      <h2>{{ "JR Dream" | capitalize({ onlyFirstletter: true }) }}</h2>
      <h2>{{ [1, 2, 3] | reverseArray }}</h2>
      <h2>{{ "JR Dream" | uppercase }}</h2>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "filter",
  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    },
  },
};
</script>

<style></style>
