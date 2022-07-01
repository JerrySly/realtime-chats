<template>
  <div>
    <h1>LongPolling</h1>
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
      messages: ["Первый нах"],
      value: null,
    };
  },
  mounted() {
    this.get();
    console.log(this.$axios);
  },
  methods: {
    async send() {
      if (this.value) {
        await this.$axios.post("http://localhost:5000/new-message", {
          message: this.value,
        });
        await this.get();
      }
    },
    async get() {
      try {
        let message = await this.$axios.get(
          "http://localhost:5000/get-messages"
        );
        this.messages = [message.data, ...this.messages];
        await this.get();
      } catch {
        await this.get();
      }
    },
  },
};
</script>

<style>
</style>