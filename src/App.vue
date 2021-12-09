<template>
  <div id="topbar">
    <div class="router-button1 router-button1__icon">
      <div class="router-button__descr1">
        <div class="descr__img1">
          <img src="@/assets/profile.png" />
        </div>
      </div>
    </div>

    <div class="router-button1 router-button1__naming">
      {{ translateNaming[isActive] }}
    </div>

    <div class="router-button1 router-button1__icon">
      <div class="router-button__descr1">
        <div class="descr__img1">
          <img class="img__burger1" src="@/assets/burger.png" />
        </div>
      </div>
    </div>
  </div>

  <div id="nav">
    <div class="router-button" @click="routeApp('hub')">
      <div class="router-button__descr">
        <div class="descr__img" v-bind:class="{ active: isActive == 'hub' }">
          <img width="18px" height="18px" src="@/assets/hub.png" />
        </div>
        <p>{{ translateNaming["hub"] }}</p>
      </div>
    </div>
    <div class="router-button" @click="routeApp('schedule')">
      <div class="router-button__descr">
        <div
          class="descr__img"
          v-bind:class="{ active: isActive == 'schedule' }"
        >
          <img width="18px" height="18px" src="@/assets/schedule.png" />
        </div>
        <p>{{ translateNaming["schedule"] }}</p>
      </div>
    </div>
  </div>

  <div class="content-view">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
//

export default {
  name: "app",
  data() {
    return {
      isActive: "hub", // "hub" | "schedule"
      translateNaming: {
        hub: "Приложения",
        schedule: "Расписание",
      },
    };
  },
  mounted() {
    // console.log(window.innerWidth, screen.availWidth);
  },
  methods: {
    routeApp(route = "hub") {
      if (route == "hub") {
        this.$router.push({ path: "/" });
        this.isActive = route;
      } else if (route == "schedule") {
        this.$router.push({ path: route });
        this.isActive = route;
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  height: 85%;
}

.content-view {
  /* width: 100%; */
  height: 100%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
}

#topbar {
  height: 40px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.router-button1 {
  background-color: #548bb1;
  height: 100%;
  /* flex: 1 1 80%; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;

  /* M3/title/large */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height, or 127% */
  text-align: center;
  /* Light */
  color: rgba(255, 255, 255, 0.9);
}
.router-button1__icon {
  flex: 1 1 15%;
}
.router-button1__naming {
  flex: 1 1 70%;
}

.router-button__descr1 {
  height: 70%;
  /* border: 1px solid red; */
  display: flex;
  /* vertical-align: middle; */
  align-items: center;
  justify-content: center;
}

/* TODO: icon in figma -> to same height 18px */
.router-button__descr1 img {
  width: 22px;
  height: 22px;
  /* border: 1px solid blue; */
  /* vertical-align: middle;
  align-items: center;
  justify-content: center; */
}
.descr__img1 {
  display: flex;
  justify-content: center;
  /* border: 2px solid red; */
  align-items: center;
  /* padding: auto; */
}
.descr__img1 .img__burger1 {
  width: 4px;
  height: 18px;
}
.router-button__descr1 p {
  margin-top: 0px;
  color: white;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: center;
}
.router-button__descr1 .descr__img {
  width: 64px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-button__descr1 .active {
  background: rgba(4, 4, 4, 0.1);
  border-radius: 20px;
}

#nav {
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.router-button {
  background-color: #548bb1;
  height: 100%;
  flex: 1 1 49%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
  /* padding-top: 6px; */
}
.router-button__descr {
  height: 70%;
  /* width: 30%; */
  /* display: flex; */
  /* flex-flow: column wrap; */
  /* vertical-align: middle;
  align-items: center;
  justify-content: center; */
  /* border: 1px solid red; */
}

/* TODO: icon in figma -> to same height 18px */
.router-button__descr img {
  width: 18px;
  height: 18px;
}
.router-button__descr p {
  margin-top: 0px;
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
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-button__descr .active {
  background: rgba(4, 4, 4, 0.1);
  border-radius: 20px;
}
</style>
