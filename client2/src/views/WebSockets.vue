<template>
  <div>
    <h1>WebSockets</h1>
    <div class="input-block">
      <input type="text" v-model="value" />
      <button @click="send">Send</button>
    </div>
    <div style="display:flex; justify-content: center">
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
      messages: ["[thyz"],
      value: null,
    };
  },
  methods: {
    send() {},
  },
};
</script>

<style>
</style>