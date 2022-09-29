<template>
   <div>
        <div v-if="post">
            <div class="single-card container-lg">
                <div class="row">
                    <div class="col-12 text-center author">
                        {{ post.user.name }}
                    </div>
                    <div class="col-12 text-center">
                        <img :src=" ValidURL(post.img_post) ? post.img_post : '/storage/' + post.img_post " alt="img_post">
                    </div>
                    <div class="col-12 text-center mt-3">
                        {{ post.description }}
                    </div>
                    <div class="col-12 date">
                        {{ post.post_date }}
                    </div>
                </div>
            </div>
        </div>

   </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function(){
        return{
            post: null,
            search: '',
        }
    },
    methods: {
    //! creo una funzione per effetuare la chiamata API
        ApiCallFilterPosts(){
            const id = this.$route.params.id
            axios.get(`/api/posts/${id}`)
            .then((result)=>{
                this.post=result.data.results.data;
                console.warn(this.post)
            })
            .catch((error)=>{
                console.error(error)
            })
        },
        ValidURL: function(str) {
                var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(!regex .test(str)) {
                    return false;
                } else {
                    return true;
                }
            }
    },
    created (){
        this.ApiCallFilterPosts()
    }
}
</script>

<style lang='scss'>
    .single-card{
        margin-top: 50px;
        padding: 20px 0;
        border-radius: 10px;
        border: 1px solid gray;
        .author{
            font-size: 1.3rem;
            font-weight: 600;
        }
        img{
            margin-top: 10px;
            width: 50%;
        }
        .date{
            font-size: 0.7rem;
            margin-left: 10px;
        }
    }
</style>