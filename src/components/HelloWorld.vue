<template>
    <div>
        <div class="outer-wrapper">
            <div class="wrapper">
                <div class="slide one">
                    <img src='./assets/bloom.jpg'>
                </div>
                <div class="slide two">
                    <img src="./assets/grapefruit.jpg">
                </div>
                <div class="slide three">slide 3</div>
                <div class="slide four">slide 4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkProject'

}
</script>

<style scoped>

    .slide {
        width: 50vw;
        height: 50vh;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        width: 200vw; /*it has to be total width of each slide  */
        transform: rotate(90deg) translateY(-50vh);
        transform-origin: top left;
    }
    .one {
        background-color: antiquewhite;
    }
    .two {
        background-color: aqua;
    }
    .three {
        background-color: blueviolet;
    }
    .four {
        background-color: chocolate;
    }
    .outer-wrapper {
        width: 50vh;
        height: 100vw;
        transform: rotate(-90deg) translateX(-80vh);
        transform-origin: top left;
        overflow-y: scroll;
        overflow-x: hidden;
        position: absolute;
        scrollbar-width: none;
        -ms-overflow-style: none;
        /* margin-top: -100px; */
        /* left: rem; */
        /* margin-top: 100px;
        margin-left: 100px */
    }
    ::-webkit-scrollbar {
        display: none;
    }
</style>