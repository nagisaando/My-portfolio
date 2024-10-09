<template>

    <h2 class="mt-40 mb-10 text-4xl">Projects</h2>

    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <li v-for="i in 5" :key="i">
            <img src="https://nagisando.com/img/pfa.6a92c40e.png" aria-hidden="true">
            <h3 class="text-3xl mt-3">Pacific First Aid</h3>
            <p>Vue.js / Nuxt.js / tailwind / HTML</p>
        </li>
    </ul>
</template>