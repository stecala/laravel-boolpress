<template>
    <div class="card">
        <div class="row">
            <div class="col-12 img-cont position-relative">
                <img :src=" ValidURL(post.img_post) ? post.img_post : '/storage/' + post.img_post " alt="img_post">
                <div class="dark-filter"></div>
                <div class="text-cont text-white px-3 text-center">
                        {{ post.description }}
                </div>
            </div>
            <div class="col-12 ">
                <div class="text-center name">
                    {{ post.user.name }}
                </div>
                <div class="date">
                    {{ post.post_date }}
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            post : Object,
        },
        methods: {
            ValidURL: function(str) {
                var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(!regex .test(str)) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

.card{
    border: 1px solid grey;
    background-color: rgb(236, 236, 236);
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    .img-cont{
        img{
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 281px;
            object-fit: cover;
            object-position: center;
            position: relative;
            z-index: 0;
        }
        .dark-filter,.text-cont{
            position: absolute;
            top: 0;
            left: 15px;
            border-radius: 10px 10px 0 0;
            width: calc(100% - 30px);
        }
        .dark-filter{
            height: 100%;
            background-image: linear-gradient(black, transparent);
            z-index: 1;
        }
        .text-cont{
            font-size: 1.3rem;
            text-shadow: 2px 2px rgba(255, 255, 255, 0.301);
            z-index: 2;
        }   
    }
    .name{
        border-top: 1px solid gray;
        padding: 15px;
    }
    .date{
        font-size: 0.7rem;
        padding: 2px 5px;
    }
}
</style>