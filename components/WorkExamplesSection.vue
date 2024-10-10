<script setup lang="ts">
const projects = [
    {
        name: "Pacific First Aid",
        techs: "Vue.js / Nuxt.js / tailwind / HTML",
        link: "https://pacificfirstaid.ca/",
        img: "/pfa.png",
    },
    {
        name: "First United",
        techs: "Vue.js / Nuxt.js / tailwind / HTML",
        link: "https://firstunited.ca/",
        img: "/first-united.png",
    },
    {
        name: "Culture Crawl",
        techs: "Vue.js / Nuxt.js / tailwind / HTML",
        link: "https://culturecrawl.ca/",
        img: "/eccs.png",
    },
    {
        name: "Create Arts Festival",
        techs: "Vue.js / Nuxt.js / tailwind / HTML",
        link: "https://createartsfestival.ca/",
        img: "/create-arts.png",
    },
    {
        name: "Remenu",
        techs: "Vue.js / Nuxt.js / tailwind / Bulma / HTML",
        link: "https://remenu.co/.png",
        img: "/remenu.png",
    },
];
</script>

<template>

    <h2 class="mt-40 mb-10 text-4xl">Projects</h2>

    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <li v-for="project, i in projects" :key="i">
            <NuxtLink :to="project.link">
                <div class=" transition duration-200 hover:text-red">
                    <img :src="project.img" aria-hidden="true">
                    <h3 class="text-3xl mt-5 mb-2 underline">{{ project.name }}
                    </h3>
                </div>
                <p>{{ project.techs }}</p>
            </NuxtLink>
        </li>
    </ul>
</template>