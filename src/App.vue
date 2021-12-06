<template>
  <div id="nav">
    <div class="router-button" @click="routeApp(0)">
      <div class="router-button__descr">
        <div class="descr__img" v-bind:class="{ active: isActive == 'hub' }">
          <img width="18px" height="18px" src="@/assets/hub.png" />
        </div>
        <p>Приложения</p>
      </div>
    </div>
    <div class="router-button" @click="routeApp(1)">
      <div class="router-button__descr">
        <div
          class="descr__img"
          v-bind:class="{ active: isActive == 'schedule' }"
        >
          <img width="18px" height="18px" src="@/assets/schedule.png" />
        </div>
        <p>Расписание</p>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  name: "app",
  data() {
    return {
      isActive: "hub", // "hub" | "schedule"
    };
  },
  mounted() {
    // window.alert(window.innerWidth, screen.availWidth);
  },
  methods: {
    routeApp(route = 0) {
      if (route == 0) {
        this.$router.push({ path: "/" });
        this.isActive = "hub";
      } else if (route == 1) {
        this.$router.push({ path: "schedule" });
        this.isActive = "schedule";
      }
    },
  },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 85%;
}

#nav {
  position: fixed;
  bottom: 0px;
  height: 12%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.router-button {
  background-color: #548bb1;
  height: 100%;
  flex: 1 1 49%;
  /* border: 1px solid rgba(49, 120, 187, 0.76); */
  /* font-weight: bold;
  font-size: 0.9em;
  color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .router-button__descr {
  padding-top: 12px;
} */
/* TODO: icon in figma -> to same height 18px */
.router-button__descr img {
  width: 18px;
  height: 18px;
}
.router-button__descr p {
  margin-top: 0;
  color: white;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: center;
}
.router-button__descr .descr__img {
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-button__descr .active {
  background: rgba(4, 4, 4, 0.1);
  border-radius: 20px;
}
</style>
