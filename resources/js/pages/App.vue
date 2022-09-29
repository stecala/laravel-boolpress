<template>
    <div>
        <HeaderComponent  />
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
    components:{
        HeaderComponent,
    }
}
</script>

<style lang="scss" > 
 main{
        padding-top: 105px;
    }
</style>