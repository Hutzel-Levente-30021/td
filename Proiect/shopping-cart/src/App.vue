<template>
  <img src="@/assets/books1.jpg" />
  <div id="nav">
    <router-link :class="{active: $route.name === 'Home'}" to="/">Stoc</router-link> |
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Coș</router-link> |
    <router-link :class="{active: $route.name === 'Contact'}" to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body{
  background-color: rgba(0, 255, 0, 0.8);
}

img{
  width: 100%;
  height: 300px;
}

#nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: rgba(0, 255, 0, 0.8);
  line-height: 30px;

  a{
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active{
      color: #2c3e50;
    }
  }
}

.text-center{
  text-align: center;
}
</style>
