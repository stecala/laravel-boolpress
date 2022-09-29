<template>
    <div>
        <header class="position-relative">
            <div class="prev-page btn btn-info" @click="goPrevPage()">
                Prev Page
            </div>
            <div class="next-page btn btn-info" @click="goNextPage()">
                Next Page
            </div>
            <div class="container-lg py-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-3">
                        <h1>
                            Boolpress
                        </h1>
                    </div>
                    <div class="col-6">
                        <input type="text" placeholder="filtro elementi nel post" @keyup.enter="ApiCallFilterPosts()" v-model="search">
                    </div>
                    <div class="col-2">
                        <a href="http://127.0.0.1:8000/admin" class="btn btn-info">Backoffice</a>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <PostComponent v-for="post in posts" :key="post.id" :post='post'  class="my-5"/>
        </main>
    </div>
</template>

<script>
import PostComponent from './PostComponent.vue';
import axios from 'axios';
export default {
    components:{
        PostComponent,
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

<style lang="scss" scoped> 
    header{
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.527);
        position: fixed;
        width: 100%;
        background-color: white;
        z-index: 2;
        .prev-page, .next-page{
            box-shadow: 5px 5px 5px black;
            position: absolute;
            border-radius: 10px;
        }
        .prev-page{
            top: 20%;
            left: 10%;
        }
        .next-page{
            top: 20%;
            right: 10%;
        }
    }
    main{
        padding-top: 105px;
    }
</style>