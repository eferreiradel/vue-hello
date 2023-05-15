const vm = ({ createApp } = Vue);

createApp({
  data() {
    return {
      hello: "Hello",
    };
  },
}).mount("#app");
