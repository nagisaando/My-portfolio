<template>
    <div :style="{'height': '100%'}" >
        
        <!-- <div class="greeting">
            <div class="greeting-word" :class="greetingOpacity">
                <h1>Hello, </h1>
                <h1>I am a web developer.</h1>
            </div>
        </div> -->
        
        <!-- <div class="outer-wrapper"> -->
                <ul class="outer-wrapper" :style="startLocation()">
                    <li class="slide one" >
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                  <img class="slider" :class="fadeControl[0]" src="../assets/lemon.png">  
                                  <p class="description">VueJs/Bootstrap</p>
                            </a>
                        </div>
                        
                    </li>
                
                    <li class="slide two">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[1]" src="../assets/bloom.png" @mouseover="showText2 = !showText2" @mouseout="showText2 = !showText2">
                                <transition name="slide-fade">
                                    <p v-if="showText2" class="description">yahho2</p>
                                </transition>
                            </a>
                        </div>
                    </li>
                
                    <li class="slide three">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[2]" src="../assets/eyelush.png">
                                <p class="description">yahho</p>
                            </a>
                        </div>
                    </li>
                    <li class="slide four">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[3]" src="../assets/grapefruit.png">
                                <p class="description">yahho</p>
                            </a>
                        </div>
                    </li>
                </ul>
        <!-- </div> -->
    </div>
</template>

<script>
//--------------------------checkHeight might be causing problem so check it
export default {
    name: 'WorkProject',
    data(){
        return{
            
            fadeControl: [
                {
                'fadeinAnime' : false,
                'fadeoutAnime' : false
                },
                {
                'fadeinAnime' : false,
                'fadeoutAnime' : false
                },
                {
                'fadeinAnime' : false,
                'fadeoutAnime' : false
                },
                {
                'fadeinAnime' : false,
                'fadeoutAnime' : false
                }
            ],
            showText2: false
            // greetingOpacity: {
            //     'fadeinGreeting': true,
            //     'fadeoutGreeting': false
            // },
            // notScrolledYet: true
            
            
        }
    },
    methods: {
        startLocation: function() {
            // event.preventDefault()
            // const height = window.innerHeight * 0.25;
            const width = window.innerWidth - (window.innerWidth * 0.1);
            // return {'transform': `translate(${width}px, ${height}px)`}
            return {'transform': `translate(${width}px)`}
            
        },
        
        handleScroll: function () {
            // event.preventDefault()
            this.notScrolledYet = false;
            let item = document.querySelector('.outer-wrapper');
            let value = (window.innerWidth - (window.innerWidth * 0.1)) - window.scrollY;
            // let height = window.innerHeight * 0.25 + window.scrollY 
            // item.style.transform = `translate(${value}px, ${height}px)`;
            item.style.transform = `translate(${value}px)`;
  
        },

        opacityChange: function () {
            
            // event.preventDefault()
            let sliders = document.querySelectorAll('.slider');
            let vm = this;
            let i = 0
            sliders.forEach((slide) => {
               
                let slider = slide.getBoundingClientRect();
                let sliderLeft = Math.floor(slider.left);
                let sliderRight = Math.floor(slider.right);
                let centerPoint = Math.floor(window.innerWidth / 2);
                let sliderWidth = slider.width
               
                if(sliderLeft >= centerPoint - sliderWidth && sliderRight <= centerPoint + sliderWidth) {
                    
                    vm.fadeControl[i].fadeinAnime = true;
                    vm.fadeControl[i].fadeoutAnime = false;    
                } else {
                    vm.fadeControl[i].fadeoutAnime = true;
                    vm.fadeControl[i].fadeinAnime = false; 
                    
                }
                i++
            })
          
        },

        // greetingsOpacityChange: function() {
        //     let greeting = document.querySelector('.greeting-word');
        //     let slider = document.querySelector('.slider');

        //     let greetingRight = Math.floor(greeting.getBoundingClientRect().right);
        //     let sliderLeft = Math.floor(slider.getBoundingClientRect().left)

        //     if(greetingRight > sliderLeft) {
        //         this.greetingOpacity.fadeinGreeting = false;
        //         this.greetingOpacity.fadeoutGreeting = true;
        //         // greeting.classList.remove('fadeinGreeting')
        //         // greeting.classList.add('fadeoutGreeting')
        //     } else {
        //         // greeting.classList.remove('fadeoutGreeting')
        //         // greeting.classList.add('fadeinGreeting')
        //         this.greetingOpacity.fadeoutGreeting = false;
        //         this.greetingOpacity.fadeinGreeting = true;
        //     }

        // }
    },

    created: function () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.opacityChange);
        // window.addEventListener('scroll', this.greetingsOpacityChange)
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.opacityChange);
        // window.removeEventListener('scroll', this.greetingsOpacityChange)

    }

}
</script>

<style>
    
    .greeting {
    position: fixed;
    width: 55%;
    transform: translate(10rem, 20rem);
    display: inline-block;
    }

    .greeting h1{
        font-size: 3rem;
    }


    /* body {
        -webkit-font-smoothing: subpixel-antialiased;
    } */
    .outer-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
        /* width: 160%;
        height: 80%; */
        width: 160vw; 
        height: 60vh;
        /* transform: translateY(1000px);   */
        top: 25%;
        position: fixed;
        

        
    }

    .slide {
        position: relative;
        width: 60vw;
        height: 50vh;
        /* width: 40%;
        height: 100%; */
        /* to make element center */
        display: flex;
        align-items: center;  
        justify-content: center; /* Align the flex items at the center of the container: */
    }

    .portfolio-link {
        /* border: red solid; */
        position: relative;
        width: 90%;
        height: 100%;
        /* overflow: hidden; */
    }

    .link-section {
        /* border: blue solid; */
        position: absolute;
        width: 100%;
        height: 100%;
        /* text-align: center; */
        display: flex;
        align-items: center;  
        justify-content: center; 
    }

    .slider {
        /* z-index: 200; */
        /* overflow:hidden; */
        height: 100%;
        width: 100%;
        /* display: cover; */
        object-fit: cover;
        transform: scale(0.9);
        opacity: 0.2;
        transition: 200ms;
        opacity: 0.2;
        
        
        /* overflow: hidden; */
        /* transition-delay: .3s; */

        /* -webkit-transform: translateZ(0); */
        
        /* -webkit-transform: translate(100px, 100px); */
        /* -webkit-backface-visibility: hidden;
        overflow:hidden;
        will-change: opacity; */
    }

    .slider:hover {
        transform: scale(1);
        opacity: 1;
    }

  
    
    .description {
        box-sizing: border-box;
        position: absolute;
        /* bottom: 0; */
        color: #EFF6E0;
        /* transform: translateY(30%);  */
        /* left:  10%;
        right: 20%;*/
        text-align: right;
        /* background: rgba(239, 246, 224, 0.4); */
        background: rgba(10, 20, 24, 0.4); 
        width: 80%;
        
        height: 80%;
        opacity: 0;
        pointer-events:none;
        transition-duration: 100ms;
        /* transform: scale(0.9); */
        
    }

      .portfolio-link:hover .description {
        opacity: 1;
        transform: scale(1);
        transition-duration: 300ms;
        /* transition-delay: 300ms; */
      
    }
    .fadeinAnime {
        animation-name: fadein; 
        animation-duration: 300ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        
        -webkit-animation-name: fadein;
        -webkit-animation-duration: 300ms;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-timing-function: ease-in;
        
        
    }
    @keyframes fadein {
        0% {opacity: 0.2; transform: scale(0.9);}
        100% {opacity: 1; transform: scale(1);}
    }

    @-webkit-keyframes fadein {
        0% {opacity: 0.2; transform: scale(0.9);}
        100% {opacity: 1; transform: scale(1);}
    }

    .fadeoutAnime {
        animation-name: fadeout; 
        animation-duration: 300ms;
        animation-timing-function: ease-in;
   
        -webkit-animation-name: fadeout;
        -webkit-animation-duration: 300ms;
        -webkit-animation-timing-function: ease-in;
        
    }
    @keyframes fadeout {
        0% {opacity: 1; transform: scale(1);}
        100% {opacity: 0.2; transform: scale(0.9);}
    }

    @-webkit-keyframes fadeout {
        0% {opacity: 1; transform: scale(1);}
        100% {opacity: 0.2; transform: scale(0.9);}
    }

    
    .fadeinGreeting {
        animation-name: greetingIn; 
        animation-duration: 500ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        
        -webkit-animation-name: greetingIn;
        -webkit-animation-duration: 400ms;
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-fill-mode: forwards;
        
        
        
    }
    @keyframes greetingIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @-webkit-keyframes greetingIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .fadeoutGreeting {
        animation-name: greetingOut; 
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
   
        -webkit-animation-name: greetingOut;
        -webkit-animation-duration: 400ms;
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-fill-mode: forwards;
        
    }
    @keyframes greetingOut {
        0% {opacity: 1;}
        100% {opacity: 0;}
    }

    @-webkit-keyframes greetingOut {
        0% {opacity: 1;}
        100% {opacity: 0}
    }

    

</style>



