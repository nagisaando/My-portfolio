<template>
  <ul class="container px-4 mx-auto | pt-80 pb-64 | grid md:grid-cols-2 lg:grid-cols-3 gap-14">
    <li v-for="(item, i) in projects" :key="i">
      <a :href="item.link" target="_blank">
        <img :src="require(`@/assets/${item.img}.png`)" alt="" />
        <h2 class="title mt-5 underline text-3xl">{{ item.name }}</h2>
      </a>
      <p class="mt-3">{{ item.techs }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Pacific First Aid',
          techs: 'Vue.js / Nuxt.js / tailwind / HTML',
          link: 'https://pacificfirstaid.ca/',
          img: 'pfa',
        },
        {
          name: 'First United',
          techs: 'Vue.js / Nuxt.js / tailwind / HTML',
          link: 'https://firstunited.ca/',
          img: 'first-united',
        },
        {
          name: 'Culture Crawl',
          techs: 'Vue.js / Nuxt.js / tailwind / HTML',
          link: 'https://culturecrawl.ca/',
          img: 'eccs',
        },
        {
          name: 'Create Arts Festival',
          techs: 'Vue.js / Nuxt.js / tailwind / HTML',
          link: 'https://createartsfestival.ca/',
          img: 'create-arts',
        },
        {
          name: 'Remenu',
          techs: 'Vue.js / Nuxt.js / tailwind / Bulma / HTML',
          link: 'https://remenu.co/',
          img: 'remenu',
        },
      ],
    }
  },
}
</script>

<style scoped>
.title {
  transition: 0.3s;
}

a:hover .title {
  color: #f03a47;
}
</style>
