<template>
    <div class="body-cursor" @mousemove="mousePointer">
        <div class="cursor" :style="cursorLocation"></div>
    </div>
</template>

<script>

export default {
    name: 'CursorItem',
    data () {
        return {
            cursorLocation: {
                top: '',
                left: ''
            }
        }
    },
    methods: {
        mousePointer: function(event) {
            this.cursorLocation.top = `${event.pageY}px`;
            this.cursorLocation.left = `${event.pageX}px`;
            console.log(event)
        },
    }
}
</script>

<style scoped>
    .body-cursor {
        margin: 0;
        height: 200vh;
        background-color: black; 
    }
    /* body {   
       
        /* background-color: black; 
    } */

    .cursor {
        width: 20px;
        height: 20px;
        border: 1px solid white;
        border-radius: 50%;
        position: absolute;
    }
</style>