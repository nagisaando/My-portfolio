<template>
  <div>
    <!-- <Introduction /> -->
    <!-- <MyName /> -->
    
    <WorkProject />
    <NavBar />
  </div>
</template>

<script>
// import MyName from '../components/Stickybar';
import NavBar from '../components/Stickybar'
import WorkProject from '../components/ScrollWork';

// import Introduction from './components/BackGround';
// import CursorItem from './components/CustomCursor';

export default {
  components: {
    // MyName,
    WorkProject,
    NavBar
    // Introduction,
    // CursorItem
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

</style>
