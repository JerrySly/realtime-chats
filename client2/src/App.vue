<template>
  <nav>
    <router-link to="/long-polling">Polling</router-link> |
    <router-link to="/event-source">Event</router-link> |
    <router-link to="/web-sockets">Sockets</router-link>
  </nav>
  <router-view />
</template>

<style>
.input-block input {
  width: 500px;
  height: 40px;
  margin-right: 20px;
  border: 2px solid #42b983;
  outline: none;
  font-size: 20px;
}
.input-block button {
  width: 100px;
  height: 40px;
  outline: none;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.messages-block {
  padding: 30px 15px;
}
.messages-block div {
  margin-top: 10px;
  width: 300px;
  border: 2px solid #42b983;
  font-size: 18px;
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
