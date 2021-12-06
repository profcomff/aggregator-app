<template>
  <div class="container">
    <Card msg="Service 1" />
    <Card msg="Service 2" />
    <Card msg="Service 3" />
    <Card msg="Service 4" />
    <Card msg="Service 5" />
    <Card msg="Service 6" />
    <Card msg="Service 7" />
    <Card msg="Service 8" />
    <Card msg="Service 9" />
    <Card msg="Service 7" />
    <Card msg="" />
    <!-- 
    <Card msg="" />
    <Card msg="" />
    <Card msg="" /> 
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  // TODO: scroll to full page width
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
