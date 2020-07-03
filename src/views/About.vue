<template>
  <div class="about">
    <transition name="fade">
      <div v-if="activate" class="circle"></div>
    </transition>
    <div class="intro">
        <h1>
          I am Nagisa Ando.
          <br>
          A Japanese <span class="front-end">Front-end developer</span> based in Toronto.
        </h1>
    </div>
        
    <div class="skill">
      <p>
        MAIN SKILLS - JavaScript, HTML5, CSS
        <br> 
        FRAMEWORK - VueJs, Angular
        <br>
        CSS FRAMEWORKS - Bootstrap, Bulma
      </p>
    </div>


    
  </div>
  
</template>

<script>



export default {
  name: 'About',
  props: ['activate']
  // data (){
    // return {
    //   scrollnotStartYet: true
    // }
  // }
  // created: function(){
  
  // }
}
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
  transform: translate(0, 60vh);
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
  background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #CCA43B 50%);
  /* border-bottom: #CCA43B;
  border-style: solid;
  border-bottom: 50px; */
}

.circle {
 
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #F03A47;
  position: absolute;
  text-align: center;
  top: 20%;
  left: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);


}
</style>