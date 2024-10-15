<template>

    <nav class="flex w-full pt-5 px-10 justify-end">
        <NuxtLink to="https://github.com/nagisaando" class="mr-3">
            <Icon name="uil:github" />
            <span class="visually-hidden">github</span>
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/nagisa-ando-42ab361aa/" class="mr-3">
            <Icon name="uil:linkedin" />
            <span class="visually-hidden">linked in</span>

        </NuxtLink>
        <NuxtLink to="mailto:nagisa.ando0720@email.com">
            <Icon name="uil:envelope" />
            <span class="visually-hidden">send email</span>
        </NuxtLink>
    </nav>
</template>

<style lang="css">
.visually-hidden {
    @apply border-0 p-0 m-0 absolute h-[1px] w-[1px] overflow-hidden whitespace-nowrap
}

a {
    @apply transition duration-200 hover:text-red
}
</style>