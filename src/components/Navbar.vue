<template>
    <div>
        <div class="sticky">
            <div class="name">
                    NAGISA
                    <br>
                    ANDO
            </div>

            <ul class="mainnav">
                <!-- <li class="about">
                    <router-link to="/about">
                        ABOUT
                    </router-link>
                </li> -->
                <li class="contact">
                    <a href="mailto:nagisa.ando0720@gmail.com">CONTACT</a>
                </li>
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
    name: "NavBar",
}
</script>

<style scoped>
    .sticky {
        /* position: absolute; */
        top: 0;
        position: fixed;
        width: 100%;
        pointer-events: none;
        height: 100%;
        

    }
    
    ul {
        list-style-type: none;
        display: flex;
        pointer-events: auto;
        z-index: 100;
        
    }

    li {
        margin-left: 1rem;
    }
    a {
        text-decoration: none;
        transition: 0.3s;
        color: #EFF6E0;
    }

    a:hover {
        color: #F03A47;
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
        /* right: 900px; */
        margin-right: 20px;
        margin-top: 3rem;
        margin-bottom: 2rem;
        /* transform: translateX(30rem); */
        
    }
/* 
    .contact {
        margin-top: 3rem;
        transform: translateX(90vw);
        margin-right: 2rem;
    } */

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
        background-color: #F03A47;
        text-align: center;
        width: 4rem;
        height: 15%;
        /* z-index: 100; */
       
    }
/* 
    .work {
        margin-bottom: 80vh;
    } */




</style>