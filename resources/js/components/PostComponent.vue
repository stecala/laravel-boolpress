<template>
    <div class="card">
<!--       <div class="row">
        <div class="col-12 author">
           <h2 class="">
                {{ post.user.name }}
            </h2>
        </div>
        <div class="img-containter mt-3 mx-auto">
            <img :src=" ValidURL(post.img_post) ? post.img_post : '/storage/' + post.img_post " alt="img_post" class="w-100">
        </div>
        <div class="col-12 mt-3">
            <span>{{post.description}}</span>
        </div>
        <div class="col-12 date mt-3">
            {{ post.post_date }}
        </div>
      </div> -->
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
    padding: 20px 75px;
    border: 1px solid grey;
    background-color: rgb(236, 236, 236);
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    .author{
        padding: 0 10px;
        border-bottom: 1px solid black;
        h2{
            font-weight: 600;
        }
    }
    .date{
        font-size: 0.8rem;
    }
}
</style>