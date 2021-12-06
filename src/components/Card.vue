<template>
  <div class="hello" v-bind:class="{ hidden: !msg }" @click="$router.push('/')">
    <!-- TODO: adaptive & fixed picture size -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid rgba(128, 128, 238, 0.671);
  border-radius: 2%;
  /* width: 20vw; */
  /* height: 20vw; */
  margin: 0.5em 0px;
  /* margin: 0.5em auto; */
  flex: 0 0 30%;
  /* padding: 5px;
  max-width: 300px;
  max-height: 400px;
  min-width: 80px;
  min-height: 120px; */
}
.hidden {
  visibility: hidden;
}
.hello > img {
  max-width: 80%;
  max-height: 70%;
}
</style>
