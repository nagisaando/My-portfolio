<template>
  <div id="app" @mousemove="mousePointer" @click="clickEffect" :style="{height: '100%'}" >
    <!-- <div class="cursor" :style="cursorLocation" :class="clickEvent"></div> -->
    
    <!-- <MyName /> -->
   
     <transition name="fade">
      <div class="firstPage" v-show="scrollnotStartYet" @click="scrollnotStartYet = false">
        <About :activate="scrollnotStartYet"></About>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="!scrollnotStartYet" class="home_page">
        <!-- <Home /> -->
        <WorkProject />
        <Navbar />
        
        
      </div>
    </transition>
   
    <!--   <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import WorkProject from './components/Project.vue';
import About from './views/About.vue'
// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
     Navbar,
     WorkProject,
    // Introduction,
    // CursorItem
    About,
    // Home
  },
   data () {
        return {
            cursorLocation: {
                top: '',
                left: '',
            },
            clickEvent: {
              'clickAnimation' : false
            },
            scrollnotStartYet: true
            
        }
    },
  methods: {
    mousePointer: function(event) {
        // console.log(event)
        this.cursorLocation.top = `${event.clientY - 5}px`;
        this.cursorLocation.left = `${event.clientX - 5}px`;
              
    },
    clickEffect: function() {
        let vm = this;
        this.clickEvent.clickAnimation = true;
        setTimeout(()=>{
          vm.clickEvent.clickAnimation = false;
        }, 500);
    },
    hideHomePage: function(){
        // let isScrolled = document.querySelector('.home_page').scrollTop;
        let isScrolled = window.pageYOffset
        // console.log(isScrolled)
        if(Math.floor(isScrolled > 5)){
          this.scrollnotStartYet = false;
        } else if(Math.floor(isScrolled === 0)) {
          this.scrollnotStartYet = true;
        } 
    }
  },
  created: function(){
    window.addEventListener('scroll', this.hideHomePage)
  },
  destroyed: function(){
    window.removeEventListener('scroll', this.hideHomePage)
  }


}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* cursor: none; */
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #19323C;
  overflow: hidden;
  color: #EFF6E0
}

body, html {
  height: 150%; 
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  
}
@media only screen and (min-width: 768px) {
  body, html {
  height: 210%; 
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  
}
  /* For desktop: */
}


.cursor {
  width: 10px;
  height: 10px;
  border: 1px solid #EFF6E0;
  /* background-color: white; */
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  pointer-events:none;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

.cursor::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 8px solid #EFF6E0;
  border-radius: 50%;
  opacity: 1;
  top: -9px;
  left: -9px;
  background-color: #EFF6E0;
}

.clickAnimation {
  animation: cursorAnim .5s forwards;
  border: 1px solid #F03A47;
}

@keyframes cursorAnim {
  0% {
    transform: scale(1);
    
  }
  50% {
    transform: scale(1.5);
   
  }
  100% {
    transform: scale(1);
    opacity: 1;
  
  }
}

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  
</style>
