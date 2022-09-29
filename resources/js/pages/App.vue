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
 .ms-text{
      font-size: 4rem;
      font-weight: 600;
      color: white;
      text-shadow: 5px 5px rgba(0, 0, 0, 0.342);
    }
</style>