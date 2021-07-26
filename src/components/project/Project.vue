<template>
  <div>
    <div v-if="smallScreen">
      <SmallScrollWork></SmallScrollWork>
    </div>
    <div v-else>
      <ScrollWork></ScrollWork>
    </div>
  </div>
</template>

<script>
import SmallScrollWork from './SmScrollWork.vue'
import ScrollWork from './ScrollWork.vue'

export default {
  data() {
    return {
      smallScreen: '',
    }
  },
  methods: {
    resposnsiveCheck() {
      if (window.innerWidth >= 768) {
        this.smallScreen = false
      } else {
        this.smallScreen = true
      }
    },
  },
  created() {
    if (window.innerWidth >= 768) {
      this.smallScreen = false
    } else {
      this.smallScreen = true
    }
    window.addEventListener('resize', this.resposnsiveCheck)
  },
  components: {
    ScrollWork,
    SmallScrollWork,
  },
}
</script>
