<template>
    <div>
        <div class="greeting">
            <div class="greeting-word">
                <h1>Hello, </h1>
                
                <h1>I am a web developer.</h1>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Introduction',
    // data() {
    //     // return {

    //     // }
    // }
}
</script>

<style scoped>
.greeting {
    position: fixed;
    width: 100%;
    transform: translate(10rem, 20rem);
}


h1 {
    font-size: 3rem;
}

</style>