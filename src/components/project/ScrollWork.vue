<template>
  <div :style="{ height: '100%' }">
    <div class="guideUser">
      <div class="scrollicon" :class="scrollIconOpacity">
        <i class="fas fa-angle-double-down fa-4x"></i>
      </div>
    </div>
    <ul class="outer-wrapper" :style="startLocation()">
      <li v-for="(project, index) in projects" :key="index" class="slide">
        <div class="portfolio-link">
          <a :href="project.link" target="_blank" class="link-section">
            <img
              class="slider"
              :class="fadeControl[index]"
              :src="require(`@/assets/${project.img}.gif`)"
            />
            <div class="description">
              <h1>{{ project.name }}</h1>
              <p>{{ project.techs }}</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WorkProject",
  data() {
    return {
      fadeControl: [
        {
          fadeinAnime: false,
          fadeoutAnime: false,
        },
        {
          fadeinAnime: false,
          fadeoutAnime: false,
        },
        {
          fadeinAnime: false,
          fadeoutAnime: false,
        },
        {
          fadeinAnime: false,
          fadeoutAnime: false,
        },
      ],
      projects: [
        {
          name: "Remenu",
          techs: "Vue.js/Nuxt.js/tailwind/Bulma/HTML",
          link: "https://remenu.co/",
          img: "remenu",
        },
        {
          name: "Bug Tracker",
          techs: "Vue.js/tailwind/HTML",
          link: "https://bug-tracker.nagisando.com/",
          img: "bugTracker",
        },
        {
          name: "Pomodoro Timer",
          techs: "Javascript/Bootstrap/HTML",
          link: "https://pomodoro-timer.nagisando.com/",
          img: "pomodoroTimer",
        },
        {
          name: "Sushi Restaurant",
          techs: "css/Javascript/HTML",
          link: "https://sushi-restaurant.nagisando.com/",
          img: "restaurant",
        },
      ],

      scrollIconOpacity: {
        fadeinscrollIcon: true,
        fadeoutscrollIcon: false,
      },
    };
  },
  methods: {
    startLocation: function() {
      const width = window.innerWidth - window.innerWidth * 0.1;

      return { transform: `translate(${width}px)` };
    },

    handleScroll: function() {
      this.notScrolledYet = false;
      let item = document.querySelector(".outer-wrapper");
      let value = window.innerWidth - window.innerWidth * 0.1 - window.scrollY;

      item.style.transform = `translate(${value}px)`;
    },

    opacityChange: function() {
      let sliders = document.querySelectorAll(".slider");
      let vm = this;
      let i = 0;
      sliders.forEach((slide) => {
        let slider = slide.getBoundingClientRect();
        let sliderLeft = Math.floor(slider.left);
        let sliderRight = Math.floor(slider.right);
        let centerPoint = Math.floor(window.innerWidth / 2);
        let sliderWidth = slider.width;

        if (
          sliderLeft >= centerPoint - sliderWidth &&
          sliderRight <= centerPoint + sliderWidth
        ) {
          vm.fadeControl[i].fadeinAnime = true;
          vm.fadeControl[i].fadeoutAnime = false;
        } else {
          vm.fadeControl[i].fadeoutAnime = true;
          vm.fadeControl[i].fadeinAnime = false;
        }
        i++;
      });
    },

    scrollIconsOpacityChange: function() {
      let scrollIcon = document.querySelector(".scrollicon");
      let slider = document.querySelector(".slider");

      let scrollIconRight = Math.floor(
        scrollIcon.getBoundingClientRect().right
      );
      let sliderLeft = Math.floor(slider.getBoundingClientRect().left);

      if (scrollIconRight > sliderLeft) {
        this.scrollIconOpacity.fadeinscrollIcon = false;
        this.scrollIconOpacity.fadeoutscrollIcon = true;
      } else {
        this.scrollIconOpacity.fadeoutscrollIcon = false;
        this.scrollIconOpacity.fadeinscrollIcon = true;
      }
    },
    getImgUrl(number) {
      return this.projects[number].img;
    },
  },

  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.opacityChange);
    window.addEventListener("scroll", this.scrollIconsOpacityChange);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.opacityChange);
    window.removeEventListener("scroll", this.scrollIconsOpacityChange);
  },
};
</script>

<style scoped>
.outer-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 2000px;
  height: 60vh;

  top: 25%;
  position: fixed;
}

.slide {
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center; /* Align the flex items at the center of the container: */
}

.portfolio-link {
  position: relative;
  width: 90%;
  height: 100%;
}

.link-section {
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.slider {
  height: 100%;
  width: 100%;

  object-fit: contain;
  transform: scale(0.9);
  opacity: 0.2;
  transition: 200ms;
  opacity: 0.2;
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

.scrollicon {
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

.description {
  padding-top: 2vw;
  padding-right: 2vw;
  box-sizing: border-box;
  position: absolute;

  color: #eff6e0;

  text-align: right;

  background: rgba(10, 20, 24, 0.7);
  width: 80%;

  height: 60%;
  opacity: 0;
  pointer-events: none;
  transition-duration: 100ms;
}

.portfolio-link:hover .description {
  opacity: 1;
  transform: scale(1);
  transition-duration: 300ms;
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
  0% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@-webkit-keyframes fadein {
  0% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
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
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.9);
  }
}

@-webkit-keyframes fadeout {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.9);
  }
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
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes scrollIconIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes scrollIconOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
