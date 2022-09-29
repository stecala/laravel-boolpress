<template>
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
</template>

<script>
export default {

}
</script>

<style lang='scss'>
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
    
</style>