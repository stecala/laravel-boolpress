<template>
  <div class="container-lg cont-img position-relative">

    <!-- cloud -->
    <div class="c1"></div>
    <div class="c2"></div>
    <div class="c3"></div>
    <div class="c4"></div>
    <div class="c5"></div>
    <div class="c6"></div>
    <div class="eye-c" id="left"></div>
    <div class="eye-c" id="right"></div>
    <div class="mouth-c"></div>

    <!-- land -->
    <div class="land"></div>

    <!-- sun -->
    <div class="sun"></div>
    <div class="eye-s" id="left-s"></div>
    <div class="eye-s" id="right-s"></div>
    <div class="white-dot" id='left-w'></div>
    <div class="white-dot" id='right-w'></div>
    <div id="mouth-s" :class=" animationMouth ? 'animationMouth' : '' "></div>

    <!-- signal -->
    <div class="signal-cont"><div><h1>404</h1></div></div>
    <div class="triangle"></div>
    <div class="leg"></div>

    <!-- grass -->
    <div class="base-g"></div>
    <div class="g1"></div>
    <div class="g2"></div>
    <div class="g3"></div>
    <div class="g4"></div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            animationMouth: false,
        }
    },
    methods:{
        setClassSun(){
           setInterval(()=>{
                this.animationMouth = !this.animationMouth
                console.log(this.animationMouth)

           },1800)
        }
    
    },
    created(){
        this.setClassSun()
    }
}
</script>

<style lang='scss' scoped>
    .cont-img{
        margin-top: 50px;
        height: 500px;
        background: lightblue;
       
       /* cloud */
       .c1, .c2, .c3,.c4, .c5, .c6{
            position: absolute;
            background-color: white;
        }
        .c1{
            border-radius: 50% 50% 0 30%;
            top: 40px;
            left:40px;
            width: 50px;
            height:50px;
        }
        .c2{
            border-radius: 50%;
            top:20px;
            left: 70px;
            width: 70px;
            height: 70px;
        }
        .c3{
            border-radius: 50% 50% 30% 30%;
            top: 40px;
            left:120px;
            width: 50px;
            height:50px;
        }
        .c4{
            top:70px;
            left: 40px;
            width: 130px;
            height: 50px;
            border-radius: 0 0 50% 50%;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.267);
        }
        .c5{
            top: 60px;
            left: 130px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .c6{
            top: 60px;
            left:25px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: -2px 1px 2px rgba(0, 0, 0, 0.267);
        }
        .eye-c{
            position: absolute;
            border-radius: 50%;
            background-color: black;
            width: 10px;
            height: 10px;
        }
        #left{
            top: 75px;
            left: 85px;
        }
        #right{
            top: 75px;
            left: 105px;
        }
        .mouth-c{
            position: absolute;
            left: 96px;
            top: 90px;
            width: 7px;
            height: 7px;
            border-top: 3px solid pink;
            border-radius: 50%;
        }

        /* land */
        .land{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 45px;
            background-color: rgb(55, 158, 55);
        }
        /* sun */
        .sun{
            position: absolute;
            right: 0;
            top: 0;
            background-color: orange;
            width: 150px;
            height: 150px;
            border-radius: 0 0 0 100%;
            box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.267);
        }
        .eye-s{
            position: absolute;
            top: 75px;
            width: 15px;
            height: 15px;
            background-color: black;
            border-radius: 50%;
        }
        #left-s{
            right: 90px;
        }
        #right-s{
            right: 65px;
        }
        .white-dot{
            position: absolute;
            top: 79px;
            background-color: white;
            border-radius: 50%;
            width: 5px;
            height: 5px;
        }
        #right-w{
            right: 67px;
        }
        #left-w{
            right: 92px;
        }
        #mouth-s{
            position: absolute;
            top: 90px;
            right: 83px;
            width: 5px;
            height: 9px;
            background-color: rgb(204, 26, 26);
            border-radius: 50%;
            
        }
        .animationMouth{
            animation: closeM 2s linear;     
        }
        @keyframes closeM {
            0%{height: 9px;}
            50%{height: 0px;}
            100%{height: 9px;}
        }
        /* signal */
       .signal-cont{
            width: 200px;
            height: 100px;
            background-color: rgb(185, 178, 111);
            position: absolute;
            left: 370px;
            top: 50%;
            box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.267);
            z-index: 1;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                h1{
                    margin-top: 20px;
                    font-size: 3rem;
                    font-weight: 600;
                }
            }
        } 
        .triangle {
            width: 0px;
            height: 0px;

            border: 50px solid transparent;
            border-top: 0;
            border-bottom: 70px solid rgb(185, 178, 111);
            transform: rotate(90deg);
            position: absolute;
            top: 53%;
            left: 554px;
        }
        .leg{
            position: absolute;
            top: calc(50% + 100px);
            left: 450px;
            width: 25px;
            height: 110px;
            background-color: rgb(185, 178, 111);
            box-shadow: -3px 0 3px rgba(0, 0, 0, 0.267);
        }
        .base-g{
            background-color: rgb(55, 158, 55);
            width: 30px;
            height: 15px;
            position: absolute;
            left: 445px;
            bottom: 30px;
        }
        .g1,.g2,.g3,.g4{
            position: absolute;
            background-color: rgb(55, 158, 55);
        }
        .g1{
            height: 30px;
            width: 3px;
            border-radius: 0 180% 0 0;
            transform: rotate(-20deg);
            bottom: 30px;
            left: 445px;
            z-index: 1;
        }
        .g2{
            height: 45px;
            width: 5px;
            border-radius: 180% 180% 0 0;
            bottom: 30px;
            left: 460px;
            z-index: 1;
        }
        .g3{
            height: 40px;
            width: 5px;
            border-radius: 0 180% 0 0;
            transform: rotate(-20deg);
            bottom: 30px;
            left: 450px;
            z-index: 1;
        }
        .g4{
            height: 35px;
            width: 4px;
            border-radius: 0 180% 0 0;
            transform: rotate(20deg);
            bottom: 30px;
            left: 470px;
            z-index: 1;
        }
    }
</style>