<template>
  <div class="about relative">
    <transition name="fade">
      <div v-if="activate" class="circle"></div>
    </transition>
    <div class="intro">
      <h1 class="text-3xl">
        I am Nagisa Ando.
        <br />
        <span class="front-end">Front-end developer</span>
        based in Vancouver.
      </h1>
    </div>

    <div class="skill">
      <p class="leading-8">
        MAIN SKILLS - JavaScript, HTML5, CSS, Typescript
        <br />
        FRAMEWORK - <b>VueJs</b>, Nuxt.js, React, React Native, Next.js
        <br />
        CSS FRAMEWORKS - <b>PrimeVue</b>, <b>BootstrapVue</b>, Bootstrap, Bulma,
        tailwind, Sass
        <br />
        TESTING - <b>Jest</b>, <b>Vitest</b>, <b>Testing Library</b>, Puppeteer,
        Playwright
        <br />
        <b>Storybook</b>, <b>Pinia</b>, Vuex, Vite, Vue CLI, Storyblok,
        Voiceover and more!
      </p>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <i class="fas fa-angle-double-down fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["activate"],
  // data (){
  // return {
  //   scrollnotStartYet: true
  // }
  // }
  // created: function(){

  // }
};
</script>
<style scoped>
.about {
  position: fixed;
  height: 100%;
  width: 100%;
  /* z-index: 1; */
}
.intro {
  transform: translate(0, 30vh);
  font-size: 1rem;
  text-align: center;
}

.skill {
  transform: translate(0, 50vh);
  text-align: center;
  /* font-size: ; */
}

.skill-img {
  height: 10%;
}

img {
  width: 20%;
  height: 20%;
}

.front-end {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #cca43b 50%);
  /* border-bottom: #CCA43B;
  border-style: solid;
  border-bottom: 50px; */
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f03a47;
  position: absolute;
  text-align: center;
  top: 20%;
  left: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}

i {
  animation-name: updown;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;

  -webkit-animation-name: updown;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-iteration-count: infinite;
}

@keyframes updown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1vh);
  }
}

@-webkit-keyframes updown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1vh);
  }
}
</style>
