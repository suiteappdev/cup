 <template>
        <div class="center grid">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12" lg="12" sm="12" xs="12">
                        <div class="box-left">
                            <div class="presentation">
                                <div class="wrap-overlay">
                                    <h1 class="text-white animate__animated animate__fadeIn entry-title">Bienvenido a asesorías Florez, Te ayudamos a mejorar tu vida financiera</h1>
                                    <p class="text-white  animate__animated animate__fadeInTopRight" style="line-height : 1.5;width:100%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius non sapien at eleifend. Fusce efficitur sapien sodales tellus bibendum congue. </p>   
                                    <div class="form-control">
                                        <vs-button class="call-action animate__animated animate__backInUp" size="xl" warning :active="active == 1" @click="active = 1">Recibe tu asesoria gratis.</vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
</template>
 <style scoped>
     .box-left{
        background-image: url('~/assets/images/bg.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 800px;
     }

     .presentation{
         width : 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
     }

     .form{
        padding-top: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
     }

    .form-inner{
        width: 80%;
        padding: 20px;
        padding: 24%;
    }
    
    .form-control{
        margin-bottom: 24px;
        height: 40px;
    }

    .form-title{
        font-size: 1.1rem;
        font-weight: 700;
    }

    .box-right{
        width: 100%;
        height: 600px; 
        background-color: white;
     }
     
     .consvg{
        bottom: 0;
        transform: translateY(100%);
        position: absolute;
        width: 120%;
        left: 0;
     }
     .divider{
        transform: translate(-19.35px, 0px);
        position: static;
        top: 0;
        left: 0;
        width: 163%;
        overflow: hidden;
        line-height: 0;
        overflow: hidden;
     }
    .entry{
        width: 100%;
        height: 600px;
        background-size: cover;
        background-position: center;
        position: relative;
        top: 48px;
    }

    .entry-inner{
        width: 80%;
        height: 600px;
        margin: 0 auto;
        position: relative;
    }

    .entry-text{
        position: relative;
        top: 100px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 40px;
        width: 50%;
    }

    .boxes{
        width: 100%;
        height: 400px;
        background-color: white;
    }

    .entry-title{
        margin-top: 0pc;
        margin: 0;
    }

    .call-action{
        margin-top: 30px;
    }

    .wrap-overlay{
        padding-left: 40px;
        width : 70%;
        border-radius: 20px;
    }
    
 </style>
<script>
    export default {
      data:() => ({
        value1 : '',
        value2:'',
        option : false,
        active: false,
        email: '',
        password: '',
        remember: false
      })
    }
  </script>