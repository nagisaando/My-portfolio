<script setup lang="ts">
definePageMeta({
    title: "Home",
});
</script>

<template>
    <MainPageInitialSection />
    <WorkExamplesSection />
</template>

<style lang="css" scoped>
@keyframes animation {
    0% {
        transform: translateY(10%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 100%;
    }
}

.red-ball-animation {
    animation: 1s ease-out 0s 1 animation;
    padding: 30px;
}
</style>