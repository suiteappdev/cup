 <template>
 <div class="wrapper">
        <div class="testimonial-section">
            <h1 class="text-center cases animated bounceInRight" style="margin-top:50px;">Casos de <span class="light">éxito</span></h1>
            <template>
                <div class="center grid">
                    <vs-row>
                        <vs-col :key="index" v-for="col, index in comments" vs-type="flex" vs-justify="center" vs-align="center" w="3">
                            <vs-card class="animated fadeInLeft">
                                <template #title>
                                    <h3> {{ col.name }}</h3>
                                </template>
                                <template #img>
                                    <img :src="col.image" alt="">
                                </template>
                                <template #text>
                                    <p>{{col.preview}}</p>
                                    <br />
                                    <vs-button primary icon @click="$router.push('/testimonio/?cliente=' + col.id)">
                                        Conocer Historia
                                    <i class='bx bx-heart'></i>
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
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
                                        <div class="pricing-price"><span class="pricing-currency">$</span>99.500
                                         <span class="pricing-period">/ Pago único</span>
                                        </div>
                                        <h3 class="pricing-title">Asesoría preferencial</h3>
                                    </div>
                                    <div class="pricing-feature-list">
                                     <ul class="service-list vineta">
                                        <li class="text-dark service-item-premium">Asesoría personalizada</li>
                                        <li class="text-dark service-item-premium">Resolver todas tus dudas financieras y contables</li>
                                        <li class="text-dark service-item-premium">Quitar reporte negativo o aumentar el puntaje en las centrales de riesgo</li>
                                        </ul>  
                                    </div>
                                    <button class="pricing-action">Quiero mi asesoría ya</button>
                                </div>
                                <div class="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style="min-height: 497px;">
                                    <div class="pricing-deco" style="background: linear-gradient(135deg,#a93bfe,#584efd)">
                                        <svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" y="0px">
                                            <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                            <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                            <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                        </svg>
                                        <div class="pricing-price"><span class="pricing-currency">$</span>965.000
                                          <span class="pricing-period">/ Anual</span>
                                        </div>
                                        <h3 class="pricing-title">Acompañamiento financiero premium anual - 965.000 (cupos limitados 300)</h3>
                                    </div>
                                    <div class="pricing-feature-list">
                                        <ul class="service-list vineta">
                                            <li class="text-dark service-item-premium">No des mas vueltas, esta es la mejor financiera que puede tomar para mejorar tu vida financiera en un 100%.</li>
                                            <li class="text-dark service-item-premium">Si al finalizar el año no cumplimos tus objetivos te reembolsamos todo tu dinero.</li>
                                        </ul>
                                    </div>
                                    <button @click="$router.push('/premium')" class="pricing-action">Conoce más</button>
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
                                    <div class="pricing-feature-list">
                                        <ul class="service-list vineta">
                                            <li class="text-dark service-item-premium">Consulta en Datacrédito</li>
                                            <li class="text-dark service-item-premium">Eliminación de un reporte negativo</li>
                                            <li class="text-dark service-item-premium">Asesoría contable</li>
                                            <li class="text-dark service-item-premium">Asesoría jurídica en procesos financieros (embargos, suplantaciones, etc.)</li>
                                            <li class="text-dark service-item-premium">Te respondemos en un plazo máximo de 8 horas hábiles.</li>
                                        </ul>
                                    </div>
                                    <button class="pricing-action">Escríbenos por WhatsApp para ayudarte</button>
                                </div>
                            </div>
                        </section>
                </div>
            </template>
        </div> 
 </div>
</template>
 <style scoped>
 .strong{
     font-weight: bold;
 }
.arrows {
  position: relative;
  width: 20px;
  height: 20px;
  top: 180px;
  transform: translate(-50%, -50%);
}
body .arrows:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(0, 230, 227, 0.7);
  border-bottom: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  transform: translate(26.6666666667px, 106.6666666667px) rotate(-45deg);
  animation: arrows 3s linear infinite;
}
body .arrows:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  border-bottom: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  transform: translate(53.3333333333px, 0px) rotate(-45deg);
  animation: arrows 3s linear infinite -1.5s;
}

@keyframes arrows {
  0% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
    transform: translate(-13.3333333333px, -53.3333333333px) rotate(-45deg);
  }
  10%, 90% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
  }
  50% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0.7);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0.7);
    transform: translate(-13.3333333333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
    transform: translate(-13.3333333333px, 53.3333333333px) rotate(-45deg);
  }
}
.box-service-inner{
    padding: 20px;
}

.mt-40{
    margin-top: 30px!important;
}

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
        }

        .service-list{
            padding : 40;
            list-style: none;
        }

        .service-item{
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .service-item-premium{
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .flex{
            display: flex;
        }

        .flex-center{
            align-items: center;
            justify-content: center;
        }

        .flex-column{
            flex-direction: column;
        }

        .box-service-2{
            box-sizing: border-box;
            width: 100%;
            height: 800px;
        }

        .vineta{
            list-style-image: url('~/assets/images/vineta.png');
        }
        
        .pricing-action:focus {
            outline: none;
        }

        .no-margin{
            margin: 0;
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
        color:#00E6E3 ;
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
        box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
        -webkit-box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
        -moz-box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
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

    .text-left{
        text-align: left;
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
                {
                    id: 1, 
                    name : 'Luis Florez', 
                    image :`${require(`~/assets/images/foto5.png`)}`, 
                    preview :'El 25 de julio de 2018 contaba con los siguientes productos...',
                    pretext : 'El 25 de julio de 2018 contaba con los siguientes productos:',
                    posttext : 'Luego de 3 años de trabajo ( del 25 de julio de 20187 al 25 de julio de 2021) cuenta con los siguientes productos:',
                    credits_before : [
                        "Tarjeta de crédito BANCO DAVIVIENDA, cupo $10.000.000",
                        "Tarjeta de crédito TUYA S.A. (grupo Éxito), cupo $5.000.000",
                    ],
                    credits_before_total : '$15.000.000',
                    credits_after :[
                        "BANCOLOMBIA HIPOTECARIO, cupo $90.000.000",
                        "BANCOLOMBIA ROTATIVO, cupo $30.000.000",
                        "ROTATIVO BCO DE BOGOTA, cupo $20.250.000",
                        "Tarjeta de crédito BANCOLOMBIA MASTERCARD, $12.000.000",
                        "Tarjeta de crédito COLPATRIA VISA, cupo $33.500.000",
                        "Tarjeta de crédito COLPATRIA MASTERCARD, cupo $7.772.000",
                        "Tarjeta de crédito TUYA S.A. (grupo Éxito), cupo $5.000.000"
                    ],
                     credits_after_total : '$198.522.000',
                    note : ''
                },
                {
                    id : 2, 
                    name : 'Lina Peñates', 
                    image : `${require(`~/assets/images/foto4.png`)}`, 
                    preview :'Todo comenzó el 18 de noviembre de 2017, Lina no contaba con ningún producto...',
                    pretext : 'Todo comenzó el 18 de noviembre de 2017, Lina no contaba con ningún producto financiero, es decir comenzamos desde cero.',
                    posttext:'Luego de más de 3 años y medio de trabajo ( del 18 de noviembre del 2017 al 24 de junio del 2021) Lina cuenta con los siguientes productos financieros:',
                    credits_before : [],
                    credits_after : [],
                    note : 'En el mes de Julio del 2021 el banco Colpatria le ofreció a Lina una tarjeta de crédito preaprobada de $8.000.000 pero esta se rechazó debido a la alta cuota de manejo que tenía ($30.000 al mes).'  
                },
                {
                    id : 3, 
                    name : 'Miguel Martinez', 
                    image : `${require(`~/assets/images/foto3.png`)}`, 
                    preview :'Miguel solicito nuestra asesoría el día 12 de septiembre del 2018...',
                    posttext:'',
                    pretext : '',
                    credits_before : [],
                    credits_after : [],
                    note : '' 
                },
                 {
                    id : 4,
                    name : 'Luis David Florez', 
                    image : `${require(`~/assets/images/foto2.png`)}`, 
                    preview :'En abril del 2019 Luis Carlos solicito la primera tarjeta de crédito...',
                    pretext : '',
                    posttext:'Luego de 3 años de trabajo ( del 25 de julio de 20187 al 25 de julio de 2021) cuenta con los siguientes productos:',
                    credits_before : [
                        "Tarjeta de crédito BANCO DAVIVIENDA, cupo $10.000.000",
                        "Tarjeta de crédito TUYA S.A. (grupo Éxito), cupo $5.000.000",
                    ],
                    credits_before_total : '$15.000.000',
                    credits_after : [],
                    note : ''  
                }
            ],
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