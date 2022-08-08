<template>
  <div id="Header">
    <div>
      <ul class="navbar">
        <li>
          <router-link to="/"
            ><img
              class="logo"
              src="https://npgblog.dev/static/cf23526f451784ff137f161b8fe18d5a/vue-logo.png"
          /></router-link>
        </li>
        <li><router-link class="nav-list" to="/"> Home </router-link></li>
        <li><router-link class="nav-list" to="/intro"> Intro </router-link></li>
        <li>
          <router-link class="nav-list" to="/computed"> Computed </router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/binding"> Binding </router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/form"> Form V Model </router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/modifier"> modifier </router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/component">component</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/slot">slot </router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/Condition">Condition</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/LifecycleHooks">Lifecycle</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/NormalState">Normal State</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/ref">Ref</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/filter">filter</router-link>
        </li>
        <li>
          <router-link class="nav-list" to="/CORS">CORS</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
}
.nav-list {
  color: black;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
  vertical-align: middle;
  padding: 0 5px;
}
.nav-list:hover {
  transition: 0.2s;
  text-shadow: 1px 1px 5px gray;
}
.logo {
  width: 30px;
  vertical-align: middle;
}
</style>
