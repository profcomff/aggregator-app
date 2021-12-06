<template>
  <div class="container">
    <HelloWorld msg="Service 1" />
    <HelloWorld msg="Service 2" />
    <HelloWorld msg="Service 3" />
    <HelloWorld msg="Service 4" />
    <HelloWorld msg="Service 5" />
    <HelloWorld msg="Service 6" />
    <HelloWorld msg="Service 7" />
    <HelloWorld msg="Service 8" />
    <HelloWorld msg="Service 9" />
    <HelloWorld msg="Service 7" />
    <!-- <HelloWorld msg="Service 8" /> -->
    <!-- <HelloWorld msg="Service 9" /> -->
    <HelloWorld msg="" />
    <!-- <HelloWorld msg="" />
    <HelloWorld msg="" />
    <HelloWorld msg="" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  // mounted() {
  //   window.alert(window.innerWidth, screen.availWidth);
  // }
};
</script>

<style>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100%;
  max-width: 768px;
  overflow: auto;
  padding: 0.5em;
}
@media (max-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
