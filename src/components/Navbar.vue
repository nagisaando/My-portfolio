<template>
  <div>
    <div class="fixed w-full top-0">
      <div class="container mx-auto | px-4 pt-8 | flex justify-between  items-center ">
        <div class="name text-2xl">
          NAGISA
          <br />
          ANDO
        </div>

        <a href="mailto:nagisa.ando0720@gmail.com" class="text-white">CONTACT</a>
      </div>
    </div>
    <div class="fixed bottom-10 w-full pointer-events-none">
      <ul class="container mx-auto px-4">
        <li class="follow">Follow</li>
        <li class="linked-in">
          <a href="https://www.linkedin.com/in/nagisa-ando-42ab361aa/" target="_blank">LinkedIn</a>
        </li>
        <li class="github">
          <a href="https://github.com/nagisaando/" target="_blank">Github</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .socialmedia {
    display: flex;
    justify-content: flex-end;
    top: 70px;
    position: absolute;
    right: 0;
    margin-right: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .socialmedia-md {
    font-size: 0.8rem;
    position: absolute;

    transform: translateX(3rem) translateY(25rem) rotate(90deg);
    transform-origin: left top;

    -webkit-transform: translateX(3rem) translateY(25rem) rotate(90deg);
    -webkit-transform-origin: left top;
  }
  .socialmedia-md li {
    margin-left: 0.5rem;
  }
}

ul {
  list-style-type: none;
  display: flex;
  pointer-events: auto;
  z-index: 100;
}

li {
  margin-right: 1rem;
}
a {
  text-decoration: none;
  transition: 0.3s;
  color: #eff6e0;
}

a:hover {
  color: #f03a47;
}

.follow {
  background-color: #f03a47;
  text-align: center;
  width: 4rem;
  height: 15%;
}
</style>
