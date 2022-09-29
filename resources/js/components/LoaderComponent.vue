<template>
  <div class="center-page">
       <div class="container">
            <div class='box1'>
                <img src="https://media.discordapp.net/attachments/984731529261481984/1019529442785239050/0e47fc97-eb83-499f-ab8b-3cee86ae2851.gif" alt="">
            </div>
            <div class='box2-cont'>
                <div class='box2'>
                    <img src="https://media.discordapp.net/attachments/984731529261481984/1019529442785239050/0e47fc97-eb83-499f-ab8b-3cee86ae2851.gif" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
 .center-page{
       position: absolute;
        top: calc(50% - 200px);
        left: calc(50% - 200px) ;
        .container{
            width: 400px;
            height: 400px;
            .box1{
                width: 200px;
                height: 200px;
                animation: Slide1 linear 2s infinite;
                margin: 5px;
                img{
                    border-radius: 50%;
                }
            }
            .box2-cont{
                width: 400px;
                height: 200px;
                display:flex;
                justify-content: end;
                .box2{
                    width:50%;
                    height:100%;
                    animation: Slide2 linear 2s infinite;
                    img{
                        border-radius: 50%; 
                    }
                }
            }
            @keyframes Slide1{
               	0%, 100% {
                    transform: none;
                }
                
                25% {
                    transform: translateX(200px);
                }
                
                50% {
                    transform: translateX(200px) translateY(200px);
                }
                
                75% {
                    transform: translateY(200px);
                }
            }
            @keyframes Slide2{
               	0%, 100% {
                    transform: none;
                }
                
                25% {
                    transform: translateX(-200px);
                }
                
                50% {
                    transform: translateX(-205px) translateY(-205px);
                }
                
                75% {
                    transform: translateY(-205px);
                }
            }

        }
    }
</style>