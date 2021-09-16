<template>
  <div id="app">
    <router-view></router-view>
    <div id="myapp">
      <div class="project" @click="myindex">
        <img v-if="this.$route.path.indexOf('/index')==-1" src="./assets/img/jd2.png" />
        <img v-else src="./assets/img/jd1.png" />
        <div :class="{active:this.$route.path.indexOf('/index')!==-1}">首页</div>
      </div>
      <div class="project" @click="mycassify">
        <img v-if="this.$route.path.indexOf('/cassify')==-1" src="./assets/img/pr2.png" />
        <img v-else src="./assets/img/pr1.png" />
        <div :class="{active:this.$route.path.indexOf('/cassify')!==-1}">分类</div>
      </div>
      <div class="project" @click="mysurprise">
        <img v-if="this.$route.path.indexOf('/surprise')==-1" src="./assets/img/jx2.png" />
        <img v-else src="./assets/img/jx1.png" />
        <div :class="{active:this.$route.path.indexOf('/surprise')!==-1}">京喜</div>
      </div>
      <div class="project" @click="myshop">
        <img v-if="this.$route.path.indexOf('/shop')==-1" src="./assets/img/shop2.png" />
        <img v-else src="./assets/img/shop1.png" />
        <div :class="{active:this.$route.path.indexOf('/shop')!==-1}">购物车</div>
      </div>
      <div class="project" @click="mymy">
        <img v-if="this.$route.path.indexOf('/my')==-1" src="./assets/img/my2.png" />
        <img v-else src="./assets/img/my1.png" />
        <div :class="{active:this.$route.path.indexOf('/my')!==-1}">我的</div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      is_active: true
    }
  },
  methods: {
    myindex() {
      this.$router.push("/index").catch(data => {});
    },
    mycassify() {
      this.$router.push("/cassify").catch(data => {});
    },
    mymy() {
      this.$router.push("/my").catch(data => {});
    },
    myshop() {
      this.$router.push("/shop").catch(data => {});
    },
    mysurprise() {
      this.$router.push("/surprise").catch(data => {});
    }
  }
};
</script>



<style>
@import "./assets/base.css";
.active {
  color: #de4f3c;
}
</style>