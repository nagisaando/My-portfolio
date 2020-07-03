<template>
    <div :style="{'height': '100%'}" >
        
        <div class="guideUser"> 
            <div class="scrollicon" :class="scrollIconOpacity">
                <!-- <p class="guide">Scroll Down</p> -->
                <i class="fas fa-angle-double-down fa-4x"></i>
            </div>
        </div> 
        
        <!-- <div class="outer-wrapper"> -->
                <ul class="outer-wrapper" :style="startLocation()">
                    <li class="slide one" >
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                  <img class="slider" :class="fadeControl[0]" src="../assets/bugTracker.gif">  
                                  <div class="description">
                                      <h1>Bug Tracker</h1>
                                      <p>VueJs/tailwind/HTML</p>
                                  </div>
                            </a>
                        </div>
                        
                    </li>
                
                    <li class="slide two">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[1]" src="../assets/pomodoroTimer.gif" @mouseover="showText2 = !showText2" @mouseout="showText2 = !showText2">
                                <div class="description">
                                    <h1>Pomodoro Timer</h1>
                                    <p>Javascript/Bootstrap/HTML</p>
                                </div>
                            </a>
                        </div>
                    </li>
                
                    <li class="slide three">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[2]" src="../assets/restaurant.gif">
                                <div class="description">
                                      <h1>Sushi Restaurant</h1>
                                      <p>Javascript/CSS/HTML</p>
                                  </div>
                            </a>
                        </div>
                    </li>
                    <!-- <li class="slide four">
                        <div class="portfolio-link">
                            <a href="#" class="link-section">
                                <img class="slider" :class="fadeControl[3]" src="../assets/grapefruit.png">
                                <p class="description">yahho</p>
                            </a>
                        </div>
                    </li> -->
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
            showText2: false,
            scrollIconOpacity: {
                'fadeinscrollIcon': true,
                'fadeoutscrollIcon': false
            },
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

        scrollIconsOpacityChange: function() {
            let scrollIcon = document.querySelector('.scrollicon');
            let slider = document.querySelector('.slider');

            let scrollIconRight = Math.floor(scrollIcon.getBoundingClientRect().right);
            let sliderLeft = Math.floor(slider.getBoundingClientRect().left)

            console.log(scrollIconRight, sliderLeft)
            if(scrollIconRight > sliderLeft) {
                this.scrollIconOpacity.fadeinscrollIcon = false;
                this.scrollIconOpacity.fadeoutscrollIcon = true;
                // scrollIcon.classList.remove('fadeinscrollIcon')
                // scrollIcon.classList.add('fadeoutscrollIcon')
            } else {
                // scrollIcon.classList.remove('fadeoutscrollIcon')
                // scrollIcon.classList.add('fadeinscrollIcon')
                this.scrollIconOpacity.fadeoutscrollIcon = false;
                this.scrollIconOpacity.fadeinscrollIcon = true;
            }

        }
    },

    created: function () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.opacityChange);
        window.addEventListener('scroll', this.scrollIconsOpacityChange)
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.opacityChange);
        window.removeEventListener('scroll', this.scrollIconsOpacityChange)

    }

}
</script>

<style scoped>

    .outer-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
        /* width: 160%;
        height: 80%; */
        width: 2000px; 
        height: 60vh;
        /* transform: translateY(1000px);   */
        top: 25%;
        position: fixed;
        /* z-index: 100; */
        

        
    }

    .slide {
        position: relative;
        width: 100%;
        height: 100%;
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
        object-fit: contain;
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

    .guideUser {
        height: 100%;
        width: 100%;
        position: fixed;
        pointer-events: none;
        z-index: -1;
    }

    .scrollicon
     {
        display: inline-block;
        position: relative;
        top: 50%;
        left: 50%;
        
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
        0% {transform: translateY(0);}
        100% {transform: translateY(1vh);}
    }

    @-webkit-keyframes updown {
        0% {transform: translateY(0);}
        100% {transform: translateY(1vh);}
    }



  
    
    .description {
        padding-top: 2vw;
        padding-right: 2vw;
        box-sizing: border-box;
        position: absolute;
        /* bottom: 0; */
        color: #EFF6E0;
        /* transform: translateY(30%);  */
        /* left:  10%;
        right: 20%;*/
        text-align: right;
        /* background: rgba(239, 246, 224, 0.4); */
        background: rgba(10, 20, 24, 0.7); 
        width: 80%;
        
        height: 60%;
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

    
    .fadeinscrollIcon {
        animation-name: scrollIconIn; 
        animation-duration: 500ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        
        -webkit-animation-name: scrollIconIn;
        -webkit-animation-duration: 400ms;
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-fill-mode: forwards;
        
        
        
    }
    @keyframes scrollIconIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @-webkit-keyframes scrollIconIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .fadeoutscrollIcon {
        animation-name: scrollIconOut; 
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
   
        -webkit-animation-name: scrollIconOut;
        -webkit-animation-duration: 400ms;
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-fill-mode: forwards;
        
    }
    @keyframes scrollIconOut {
        0% {opacity: 1;}
        100% {opacity: 0;}
    }

    @-webkit-keyframes scrollIconOut {
        0% {opacity: 1;}
        100% {opacity: 0}
    }

    

</style>



