<template>
    <div class="tabbar-item" @click="myindex">
      <img v-if="this.$route.path.indexOf('/index')==-1" src="../assets/img/jd2.png" />
      <img v-else src="../assets/img/jd1.png" />
      <div :class="{active:this.$route.path.indexOf('/index')==1}">首页</div>
  </div>
</template>

<script>
export default {
  methods: {
    myindex() {
      this.$router.push("/index").catch(data => {});
    }
  }
}
</script>

<style>

.active {
  color: #de4f3c;
}
@import "../assets/base.css";
</style>