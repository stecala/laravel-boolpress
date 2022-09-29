<template>
  
</template>

<script>
import axios from 'axios';
export default {
    data: function(){
        return{
            post: [],
            search: '',
        }
    },
    methods: {
    //! creo una funzione per effetuare la chiamata API
        ApiCallFilterPosts(){
            const id = this.$route.params.id
            axios.get(`/api/posts/${id}/?description=` + this.search)
            .then((result)=>{
                console.warn(result)
                this.post=result.data.results
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

<style>

</style>