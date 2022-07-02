<template>
  <div>
    <h1>Web sockets</h1>
    <div class="input-block">
      <input type="text" v-model="value" />
      <button @click="send">Send</button>
    </div>
    <div style="display: flex; justify-content: center">
      <div class="messages-block">
        <div v-for="(message, index) in messages" :key="index">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      value: null,
      socket: null,
    };
  },
  mounted() {
    this.socket = new WebSocket("ws://localhost:5000");
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify("Connection opened"));
    };
    this.socket.onmessage = (event) => {
      this.messages = [event.data, ...this.messages];
    };
  },
  methods: {
    async send() {
      if (this.value) {
        this.socket.send(JSON.stringify(this.value));
      }
    },
  },
};
</script>

<style>
</style>