<template>
  <div class="schedule">
    <iframe
      width="100%"
      height="100%"
      src="http://ras.phys.msu.ru/table/1/1.htm"
      scrolling="auto"
      sandbox="allow-forms allow-scripts allow-top-navigation"
      style="margin: 0px; padding: 0px; border: none; line-height: 0"
    />
  </div>
</template>

<style scoped>
.schedule {
  width: 100%;
  height: 100%;
  /* v-bind:height="iframeHeight"  */
}
</style>
