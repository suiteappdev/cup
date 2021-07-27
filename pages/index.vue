 <template>
 <div class="wrapper">
        <div class="home-section">
            <div class="center grid">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" lg="6" sm="12" xs="12">
                            <div class="box-left">
                                <div class="presentation">
                                    <div class="wrap-overlay">
                                        <h2 class="text-white animate__animated animate__fadeIn entry-title">Consigue el préstamo de tus sueños.</h2>
                                        <p class="text-white  animate__animated animate__fadeInTopRight" style="line-height : 1.5;width:100%;">Construye tu vida financiera con nosotros. Consigue el préstamo que siempre soñaste. Aqui en consigueunprestamo.com te ayudamos a conseguir libertad en tus finanzas.</p>   
                                        <div class="form-control">
                                            <vs-button class="call-action animated bounceInRight" size="xl" warning :active="active == 1" @click="active = 1">Recibe tu asesoria gratis.</vs-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </vs-col>
                    <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="6">
                            <div class="box-right">
                                <div class="form">
                                    <div class="form-inner">
                                        <div class="form-control">
                                            <h1 class="form-title">Inicia sesión</h1>
                                        </div>
                                        <div class="form-control">
                                            <vs-input v-model="value1" placeholder="Correo electronico" shadow>
                                                <template #icon>
                                                <i class='bx bx-user'></i>
                                                </template>
                                            </vs-input>
                                        </div>
                                        <div class="form-control">
                                            <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
                                                <template #icon>
                                                    <i class='bx bx-lock-open-alt'></i>
                                                </template>
                                            </vs-input>
                                        </div>
                                            <div class="center grid">
                                                <vs-row>
                                                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
                                                        <vs-checkbox v-model="option">
                                                        Recordar datos
                                                        </vs-checkbox>
                                                    </vs-col>
                                                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
                                                        <a href="">No tienes cuenta aun ?</a>
                                                    </vs-col>
                                                </vs-row>
                                            </div>

                                        <vs-button
                                            flat
                                            :active="active == 0"
                                            @click="active = 0"
                                        >
                                            Iniciar Sesión
                                        </vs-button>
                                </div>
                                </div>
                            </div>
                    </vs-col>
                </vs-row>
            </div>            
        </div>
        <div class="howto-section">
         <h1 class="text-center cases animated bounceInRight text-white">¿ Como <span class="light">funciona ?</span></h1>
            <div class="howto-text">
                <p class="text-white">En CUP te asesoramos para que puedas conseguir diferentes tipos de beneficios y préstamos con varias entidades financieras.</p>
                <p class="text-white">Te ayudamos a incrementar el cupo de tus tarjetas de crédito actuales brindándote asesoría contable en todo momento.</p>
            </div>
        </div>  
        <div class="testimonial-section">
            <h1 class="text-center cases animated bounceInRight">Casos de <span class="light">éxito</span></h1>
            <template>
                <div class="center grid">
                    <vs-row>
                        <vs-col :key="index" v-for="col,index in comments" vs-type="flex" vs-justify="center" vs-align="center" w="3">
                            <vs-card class="animated fadeInLeft">
                                <template #title>
                                    <h3> {{ col.name }}</h3>
                                </template>
                                <template #img>
                                    <img :src="col.image" alt="">
                                </template>
                                <template #text>
                                    <p>{{col.comment}}</p>
                                </template>
                                <template #interactions>
                                <vs-button primary icon>
                                    Conocer Historia
                                    <i class='bx bx-heart'></i>
                                </vs-button>
                                </template>
                            </vs-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </div> 
 </div>
</template>
 <style scoped>

    .light{
        color:#1fc6e2 ;
    }
    .wrapper{
        width: 100%;
        height: 100%;
    }

    .cases{
        margin-bottom: 60px;
    }

    .vs-card-content{
        width: 70%!important;
    }

    .howto-text{
        width: 80%;
        margin: 0 auto;
    }

    .testimonial-section{
        box-sizing: border-box;
        padding: 50px;
        width: 100%;
        height: 600px;
    }

    .howto-section{
        box-sizing: border-box;
        padding: 50px;
        width: 100%;
        height: 600px;
        background-color: #00131c;
        padding-top: 10%;
    }
    .box-left{
        background-image: url('~/assets/images/bg.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 800px;
     }

     .vs-card-content{
         margin : 0 auto!important;
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
        border-left: 1px solid #1fc6e2;
    }
    
 </style>
<script>
    export default {
      data:() => ({
        comments : [
                {name : 'Andrew Castro', image :`${require(`~/assets/images/foto5.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                {name : 'Miguel Martinez', image : `${require(`~/assets/images/foto3.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                {name : 'Lina Peñates', image : `${require(`~/assets/images/foto4.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }, 
                {name : 'Luis David Florez', image : `${require(`~/assets/images/foto2.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }],
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