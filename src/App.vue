<template>
  <div id="app" class="">
    <transition name="fade">
      <div class="firstPage" v-show="scrollnotStartYet" @click="scrollnotStartYet = false">
        <About :activate="scrollnotStartYet"></About>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="!scrollnotStartYet" class="home_page">
        <ProjectList />
        <Navbar />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import ProjectList from './components/ProjectList.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ProjectList,
    About,
  },
  data() {
    return {
      scrollnotStartYet: true,
    }
  },
  methods: {
    hideHomePage: function() {
      let isScrolled = window.pageYOffset

      if (Math.floor(isScrolled > 5)) {
        this.scrollnotStartYet = false
      } else if (Math.floor(isScrolled === 0)) {
        this.scrollnotStartYet = true
      }
    },
  },
  created: function() {
    window.addEventListener('scroll', this.hideHomePage)
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.hideHomePage)
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #19323c;
  color: #eff6e0;
}

body,
html {
  min-height: 105%;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
@media only screen and (min-width: 768px) {
  body,
  html {
    min-height: 105%;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  /* For desktop: */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
