<template>
    <div>
        <HeaderComponent />
        <main>
            <PostComponent v-for="post in posts" :key="post.id" :post='post'  class="my-5"/>
        </main>
    </div>
</template>

<script>
import PostComponent from '../components/PostComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import axios from 'axios';
export default {
    components:{
        PostComponent,
        HeaderComponent,
    },
    data: function(){
        return{
            posts: [],
            search: '',
            urlNext : '',
            ulrPrev : '',
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

<style lang="scss" > 
 main{
        padding-top: 105px;
    }
</style>