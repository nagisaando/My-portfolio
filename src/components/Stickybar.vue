<template>
    <div>
        <div class="sticky">
            <div class="name">
                <a href="#" >
                    NAGISA
                    <br>
                    ANDO
                </a>
            </div>

            <ul class="mainnav">
                <li class="work"><a href="#">WORK</a></li>
                <li class="about"><a href="#">ABOUT</a></li>
                <li class="about"><a href="#">CONTACT</a></li>
            </ul>
            

            <ul class="socialmedia">
                <li class="follow">Follow</li>
                <li class="linked-in"><a href="#">LinkedIn</a></li>
                <li class="github"><a href="#">Github</a></li>
            </ul>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "MyName",
}
</script>

<style scoped>
    .sticky {
        /* position: absolute; */
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;

    }
    
    ul {
        list-style-type: none;
        display: flex;
    }

    li {
        margin-left: 1rem;
    }
    a {
        text-decoration: none;
        transition: 0.3s;
        color: white
    }

    a:hover {
        color: red;
    }

    .name {
        position: absolute;
        margin-left: 2rem;
        margin-top: 2rem;
        font-size: 1.5rem;
        /* text-align: center; */
    }

    .mainnav {
        float: right;
        margin-right: 2rem;
        margin-top: 3rem;
        margin-bottom: 2rem;
        
    }

    .socialmedia {
        font-size: 0.8rem;
        position: absolute;
        /* 
        transform: rotate(-90deg) translateY(15vh) translateX(-80vw);
        transform-origin: left bottom; */
       
        transform: translateX(3rem) translateY(28rem) rotate(90deg);
        transform-origin: left top;

        -webkit-transform: translateX(3rem) translateY(28rem) rotate(90deg);
        -webkit-transform-origin: left top;
    }

    .socialmedia li {
        margin-left: 0.5rem;
    }
    .follow {
        color: white;
        background-color: black;
        text-align: center;
        width: 4rem;
        height: 15%;
    }
/* 
    .work {
        margin-bottom: 80vh;
    } */




</style>