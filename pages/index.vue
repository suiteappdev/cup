 <template>
 <div class="wrapper">
        <div class="home-section">
            <div class="center grid">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12" lg="12" sm="12" xs="12">
                            <div class="box-left">
                                <div class="presentation">
                                    <div class="wrap-overlay">
                                        <h1 class="text-white animate__animated animate__fadeIn entry-title">Bienvenido a <span class="light">Asesorías Florez</span> ,<br /> Te ayudamos a mejorar tu vida financiera</h1>
                                        <p class="text-white  animate__animated animate__fadeInTopRight" style="line-height : 1.5;width:100%;">Aquí te guiamos paso a paso para que mejores tu vida financiera.</p>   
                                    </div>
                                </div>
                            </div>
                    </vs-col>
                </vs-row>
            </div>            
        </div>
        <div class="services-section">
            <div class="center grid">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" lg="6" sm="12" xs="12">
                        <div class="box-service-1">
                            
                        </div>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" lg="6" sm="12" xs="12">
                        <div class="box-service-2">
                            
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
        <div class="pricing-section">
            <h1 class="text-white text-center cases animated bounceInRight">Paquetes de <span class="light">servicio</span></h1>
            <template>
                <div class="center grid">
                    <section>
                            <div class="pricing pricing-palden">
                                <div class="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-0" style="min-height: 497px;">
                                    <div class="pricing-deco">
                                        <svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" y="0px">
                                            <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                            <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                        </svg>
                                        <div class="pricing-price"><span class="pricing-currency">$</span>98.500
                                         <span class="pricing-period">/ Pago único</span>
                                        </div>
                                        <h3 class="pricing-title">Asesoría preferencial</h3>
                                    </div>
                                    <ul class="pricing-feature-list">
                                        <li class="pricing-feature">Comunicación instantánea con un profesional en finanzas y contaduría.</li>
                                        <li class="pricing-feature">Asesoría personalizada</li>
                                        <li class="pricing-feature">Interpretación de tu historial de crediticio</li>
                                        <li class="pricing-feature">Claridad en tu futuro financiero en los dos próximos años</li>
                                    </ul>
                                    <button class="pricing-action">Quiero la asesoría</button>
                                </div>
                                <div class="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style="min-height: 497px;">
                                    <div class="pricing-deco" style="background: linear-gradient(135deg,#a93bfe,#584efd)">
                                        <svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" y="0px">
                                            <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                            <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                        </svg>
                                        <div class="pricing-price"><span class="pricing-currency">$</span>700.000
                                          <span class="pricing-period">/ Anual</span>
                                        </div>
                                        <h3 class="pricing-title">Acompañamiento financiero.</h3>
                                    </div>
                                    <ul class="pricing-feature-list">
                                        <li class="pricing-feature">
                                            La vida crediticia no es una carrera si no una maratón, por eso lo más importante es ir avanzando poco a poco pero de manera segura.
                                        </li>
                                        <li class="pricing-feature">Al tomar la asesoría financiera durante un año te iremos dando recomendaciones de que productos financieros debes tener y cuales deberías evitar.</li>
                                    </ul>
                                    <button class="pricing-action">Saber más</button>
                                </div>
                                <div class="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-2" style="min-height: 497px;">
                                    <div class="pricing-deco">
                                        <svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" y="0px">
                                            <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                            <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                        </svg>
                                        <div class="pricing-price"><span class="pricing-currency">$</span>50.000
                                          <span class="pricing-period">/ Pago único</span>
                                        </div>
                                        <h3 class="pricing-title">Otros servicios</h3>
                                    </div>
                                    <ul class="pricing-feature-list">
                                        <li class="pricing-feature">Consulta en Datacrédito</li>
                                        <li class="pricing-feature">Eliminar un reporte negativo de las centrales de riesgo</li>
                                        <li class="pricing-feature">Asesoría contable</li>
                                    </ul>
                                    <button class="pricing-action">Saber más</button>
                                </div>
                            </div>
                        </section>
                </div>
            </template>
        </div> 
 </div>
</template>
 <style scoped>
 section {
            color: #7a90ff;
            padding: 2em 0 2em;
            min-height: 100vh;
            position: relative;
            -webkit-font-smoothing: antialiased;
        }
        
        .pricing {
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto 3em;
        }
        
        .pricing-item {
            position: relative;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            flex-direction: column;
            -webkit-align-items: stretch;
            align-items: stretch;
            text-align: center;
            -webkit-flex: 0 1 330px;
            flex: 0 1 330px;
        }
        
        .pricing-action {
            color: inherit;
            border: none;
            background: none;
            cursor: pointer;
            top : -50px;
            position: relative;
        }

        .box-service-1{
            background-color: #00131c;
            box-sizing: border-box;
            width: 100%;
            height: 800px;
        }

        .box-service-2{
            box-sizing: border-box;
            width: 100%;
            height: 800px;
        }
        
        
        .pricing-action:focus {
            outline: none;
        }
        
        .pricing-feature-list {
            text-align: left;
            padding: 27px!important;
            top: -60px;
            position: relative;
        }
        
        .pricing-palden .pricing-item {
            font-family: 'Open Sans', sans-serif;
            cursor: default;
            color: #84697c;
            background: #fff;
            box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);
            border-radius: 20px 20px 10px 10px;
            margin: 1em;
        }
        
        @media screen and (min-width: 66.25em) {
            .pricing-palden .pricing-item {
                margin: 1em -0.5em;
            }
            .pricing-palden .pricing__item--featured {
                margin: 0;
                z-index: 10;
                box-shadow: 0 0 20px rgba(46, 59, 125, 0.23);
            }
        }
        
        .pricing-palden .pricing-deco {
            border-radius: 10px 10px 0 0;
            background: linear-gradient(135deg,#4097f9,#0af0c7);
            padding: 4em 0 9em;
            position: relative;
        }
        
        .pricing-palden .pricing-deco-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 160px;
        }
        
        .pricing-palden .pricing-title {
            font-size: 0.75em;
            margin: 0;
            text-transform: uppercase;
            color: #fff;
        }
        
        .pricing-palden .deco-layer {
            -webkit-transition: -webkit-transform 0.5s;
            transition: transform 0.5s;
        }
        
        .pricing-palden .pricing-item:hover .deco-layer--1 {
            -webkit-transform: translate3d(15px, 0, 0);
            transform: translate3d(15px, 0, 0);
        }
        
        .pricing-palden .pricing-item:hover .deco-layer--2 {
            -webkit-transform: translate3d(-15px, 0, 0);
            transform: translate3d(-15px, 0, 0);
        }
        
        .pricing-palden .icon {
            font-size: 2.5em;
        }
        
        .pricing-palden .pricing-price {
            font-size: 3em;
            font-weight: bold;
            padding: 0;
            color: #fff;
            margin: 0 0 0.25em 0;
            line-height: 0.75;
        }
        
        .pricing-palden .pricing-currency {
            font-size: 0.15em;
            vertical-align: top;
        }
        
        .pricing-palden .pricing-period {
            font-size: 0.15em;
            padding: 0 0 0 0.5em;
            font-style: italic;
        }
        
        .pricing-palden .pricing__sentence {
            font-weight: bold;
            margin: 0 0 1em 0;
            padding: 0 0 0.5em;
        }
        
        .pricing-palden .pricing-feature-list {
            margin: 0;
            padding: 0.25em 0 2.5em;
        }
        
        .pricing-palden .pricing-feature {
            padding: 1em 0;
            font-weight : bold;
        }
        
        .pricing-palden .pricing-action {
            font-weight: bold;
            margin: auto 3em 2em 3em;
            padding: 1em 2em;
            color: #fff;
            border-radius: 30px;
            background: linear-gradient(135deg,#a93bfe,#584efd);
            -webkit-transition: background-color 0.3s;
            transition: background-color 0.3s;
        }
        
        .pricing-palden .pricing-action:hover,
        .pricing-palden .pricing-action:focus {
            background: linear-gradient(135deg,#fd7d57,#f55d59);
        }
        
        .pricing-palden .pricing-item--featured .pricing-deco {
            padding: 5em 0 8.885em 0;
        }
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

    .pricing-section{
        box-sizing: border-box;
        padding: 50px;
        width: 100%;
        background-color: #00131c;
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
        text-align: center;
    }
    
 </style>
<script>
    export default {
        beforeMount(){
            this.$nextTick( ()=> {
                //alert("before render");
            }); 
        },
        mounted() {
            this.$nextTick( ()=> {
               // alert("after rendered");
            });
        },
        data:() => ({
        comments : [
                {name : 'Andrew Castro', image :`${require(`~/assets/images/foto5.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                {name : 'Miguel Martinez', image : `${require(`~/assets/images/foto3.png`)}`, comment :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                {name : 'Lina Peñates', image : `${require(`~/assets/images/foto4.png`)}`, comment :'Antes de nosotrosTodo comenzó el 18 de noviembre de 2017, Lina no contaba con ningún producto o, es decir comenzamos desde cero.Ahora con nosotros Luego de más de 3 años y medio de trabajo ( del 18 de noviembre del 2017 al 24 de junio del 2021) Lina cuenta con los siguientes productos financieros:' }, 
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