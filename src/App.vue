<template>
  <div>
    <p>單價 {{ price }} 元</p>
    <!-- ... 中間略 ... -->
    <p>數量 {{ quantity }}</p>
    <!-- ... 中間略 ... -->
    <p>總金額共 {{ price * quantity }} 元</p>
    <!-- subtotalComputed 只執行了一次，而 subtotalMethods() 卻執行了三次。 這是由於
    computed 屬性會將計算後的結果暫存，若它所觀察的屬性 (也就是那些 this.XXX)
    沒有被更新的情況下，computed 就不會重複被執行。 -->
    <p>總金額共 {{ this.subtotalComputed }} 元</p>
    <p>總金額共 {{ this.subtotalComputed }} 元</p>
    <p>總金額共 {{ this.subtotalMethods() }} 元</p>
    <p>總金額共 {{ this.subtotalMethods() }} 元</p>

    <p>1 日幣 = 0.278 台幣</p>
    <div>台幣 <input type="text" v-model="twd" v-on:input="twd2jpy" /></div>
    <div>日幣 <input type="text" v-model="jpy" v-on:input="jpy2twd" /></div>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
  },
  data() {
    return { name: "008JS", price: 100, quantity: 10, twd: 0.278, jpy: 1 };
  },
  computed: {
    subtotalComputed: function () {
      console.log("computed");
      return this.quantity * this.price;
    },
  },
  methods: {
    // subtotalMethods: function () {
    //   return this.price * this.quantity;
    // },
    // subtotalMethods: () => {
    //   // 小心這裡的 this 由於 arrow function 的關係變成了 window!
    //   return this.price * this.quantity;
    // },
    subtotalMethods: function () {
      console.log("methods");
      // 沒問題！ 這裡的 this 可以對應至 Vue 實體
      return this.quantity * this.price;
    },
    twd2jpy() {
      this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
    },
    jpy2twd() {
      this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
