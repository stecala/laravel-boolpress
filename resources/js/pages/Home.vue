<template>
<div class="py-5 wrapper">
    <LoaderComponent v-if="isLoading"/>
    <div class="container-lg" v-else>
        <label for="filter" class="d-block">Cerca elemento del post</label>
        <input type="text" placeholder="filtro elementi nel post" @keyup.enter="ApiCallFilterPosts()" v-model="search" name="filter">
        <div class="prev-page btn btn-info" @click="goPrevPage()">
            Prev Page
        </div>
        <div class="next-page btn btn-info" @click="goNextPage()">
            Next Page
        </div>
    </div>

    <div class="flex-wrap d-flex">
        <PostComponent v-for="post in posts" :key="post.id" :post='post'  class="my-5"/>
    </div>

</div>
</template>

<script>
import PostComponent from '../components/PostComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import axios from 'axios';

export default {
    components:{
        PostComponent,
        LoaderComponent,
    },
    data: function(){
        return{
            posts: [],
            search: '',
            urlNext : '',
            ulrPrev : '',
            isLoading: true,
        }
    },
    methods: {
    //! creo una funzione per effetuare la chiamata API
    //! funzione per la chiamata filtrata
        ApiCallFilterPosts(){
            axios.get('/api/posts?description=' + this.search)
            .then((result)=>{
                this.posts=result.data.results.data.data
                this.urlNext=result.data.results.data.next_page_url
                this.urlPrev=result.data.results.data.last_page_url
                console.log(result.data.results)
                this.isLoading= false
            })
            .catch((error)=>{
                console.error(error)
            })
        },
    //! funzione per scorrere nella pagina successiva
        goNextPage(){
            axios.get(this.urlNext)
            .then((result)=>{
                this.posts=result.data.results.data.data
                this.urlNext=result.data.results.data.next_page_url
                if(this.urlNext==null){
                    this.urlNext=result.data.results.data.first_page_url
                }
                console.log(result.data.results)
            })
            .catch((error)=>{
                console.error(error)
            })
        },          
        goPrevPage(){
            axios.get(this.urlPrev)
            .then((result)=>{
                this.posts=result.data.results.data.data
                this.urlPrev=result.data.results.data.prev_page_url
                if(this.urlPrev==null){
                    this.urlPrev=result.data.results.data.last_page_url
                }
                console.log(result.data.results)
            })
            .catch((error)=>{
                console.error(error)
            })
        },
    },
    created (){
        this.ApiCallFilterPosts()
    }
}

</script>

<style scoped lang="scss">
   .wrapper{
    background-color: lightblue;
    overflow: hidden;
    min-height: calc(100vh - 83px);
   }




    

</style>