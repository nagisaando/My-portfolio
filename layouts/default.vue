<script setup lang="ts">

const route = useRoute();

useHead({
    title: "Home",
    meta: [{ property: "og:title", content: `Nagisa Ando portfolio - ${route.meta.title}` }],
    htmlAttrs: {
        lang: "en"
    }
});
</script>

<template>



    <div class="text-white min-h-full max-w-screen-2xl mx-auto pb-20">
        <AppHeader />
        <main class="px-10  overflow-hidden">
            <slot />
        </main>
    </div>
</template>
