<script setup lang="ts">
</script>

<template>
    <div class="h-[96vh] flex flex-col relative justify-end pb-10 z-10">
        <h1 class="text-8xl pb-5">Nagisa Ando</h1>
        <p class="text-3xl">Frontend Developer</p>

        <div class="w-80 h-80 bg-red rounded-full absolute bottom-20 left-24 -z-10 red-ball-animation" />

    </div>
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