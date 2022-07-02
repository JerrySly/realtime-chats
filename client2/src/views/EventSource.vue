<template>
  <div>
    <h1>EventSource</h1>
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
    };
  },
  created() {
    this.get();
  },
  methods: {
    async send() {
      if (this.value) {
        await this.$axios.post("http://localhost:5000/new-message", {
          message: this.value,
        });
      }
    },
    get() {
      console.log(11);
      let eventSource = new EventSource("http://localhost:5000/connect");
      console.log(eventSource);
      eventSource.onmessage = (event) => {
        this.messages = [JSON.parse(event.data), ...this.messages];
      };
    },
  },
};
</script>

<style>
</style>