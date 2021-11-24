 <template>
 <div class="wrapper">
 <vs-dialog scroll overflow-hidden not-close auto-width v-model="active_gratuito">
        <template #header>
          <h3>
            Asesoría<span class="light"> gratuita</span> 
          </h3>
        </template>
        <div class="con-content">
            <ul class="service-list vineta">
                <li class="text-dark service-item">Aumentar tu puntaje en Datacrédito o TransUnion.</li>
                <li class="text-dark service-item">Aumentar el cupo actual de tus tarjetas de crédito.</li>
                <li class="text-dark service-item">Pagar menos intereses en tus préstamos bancarios.</li>
                <li class="text-dark service-item">Saber si estas reportado en las centrales de riesgo.</li>
                <li class="text-dark service-item">Conocer cuánto tiempo estarás reportado negativamente en las centrales de riesgo por incumplimiento de pago.</li>
                <li class="text-dark service-item">Conocer cuáles son las mejores tarjetas de crédito en Colombia.</li>
                <li class="text-dark service-item">Conocer cuáles son las mejores tasas de crédito hipotecario.</li>
                <li class="text-dark service-item">Conocer los requisitos que exigen la mayoría de bancos a la hora de solicitar un préstamo de libre inversión.</li>
                <li class="text-dark service-item">Como empezar tu vida crediticia (personas jóvenes o adultas que nunca han tenido un producto financiero).</li>
                <li class="text-dark service-item">Saber si tengo que declarar renta o no.</li>
                <p class="light">
                    <span class="strong text-white">Nota:</span> <br />  Solo puedes seleccionar uno de los temas anteriores en la asesoría gratis. <br />
                    <br />
                    <span class="strong text-white">Nota:</span> <br /> Si quieres saber tu estado en las centrales de riesgo, debes pagar el valor de la consulta ($10.000).</p>
            </ul>
        </div>
      </vs-dialog>
       <vs-dialog scroll overflow-hidden not-close auto-width v-model="active_preferencial">
        <template #header>
          <h3>
            Asesoria <span class="light">preferencial</span> 
          </h3>
        </template>
        <div class="con-content">
            <ul class="service-list vineta">
                <li class="text-dark service-item-premium">Resolver todas tus dudas financieras por vía telefónica o WhatsApp.</li>
                <li class="text-dark service-item-premium">Revisar minuciosamente tu Datacrédito y aumentar tu puntaje.</li>
                <li class="text-dark service-item-premium">Interpretar tu historial crediticio de Datacrédito para que tengas claro cuáles son tus fortalezas y tus falencias.</li>
                <li class="text-dark service-item-premium">Elaborar un plan financiero a mediano plazo (2 años), deberás seguirlo para
                    mejorar tu vida financiera bien sea aumentando los cupos bancarios
                    actuales o adquiriendo nuevos productos (nuevas tarjetas de créditos,
                    nuevos cupos rotativos, nuevos préstamos hipotecarios, nuevos préstamos
                    de libre inversión, etc.</li>
                <li class="text-dark service-item-premium">Eliminar un reporte negativo en las centrales de riesgo.</li>
                <li class="text-dark service-item-premium">Resolver todas tus dudas contables en materia tributaria (impuestos).</li>
            </ul>
        </div>
      </vs-dialog>
       <vs-dialog scroll overflow-hidden not-close auto-width v-model="active_premiun">
        <template #header>
          <h3>
            Acompañamiento <span class="light">financiero premium</span> 
          </h3>
        </template>
        <div class="con-content">
            <ul class="service-list vineta">
                <li class="text-dark service-item-premium">No des mas vueltas, esta es la mejor financiera que puede tomar para mejorar tu vida financiera en un 100%.</li>
                <li class="text-dark service-item-premium">Si al finalizar el año no cumplimos tus objetivos te reembolsamos todo tu dinero.</li>
            </ul>
        </div>
      </vs-dialog>
             <vs-dialog scroll overflow-hidden not-close auto-width v-model="active_otros">
        <template #header>
          <h3>
            Otros <span class="light">servicios</span> 
          </h3>
        </template>
        <div class="con-content">
            <ul class="service-list vineta">
                <li class="text-dark service-item-premium">Consulta en Datacrédito</li>
                <li class="text-dark service-item-premium">Eliminación de un reporte negativo</li>
                <li class="text-dark service-item-premium">Asesoría contable</li>
                <li class="text-dark service-item-premium">Asesoría jurídica en procesos financieros (embargos, suplantaciones, etc.)</li>
                <li class="text-dark service-item-premium">Te respondemos en un plazo máximo de 8 horas hábiles.</li>                
            </ul>
        </div>
      </vs-dialog>
        <div class="home-section">
            <div class="center grid">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12" lg="12" sm="12" xs="12">
                            <div class="box-left" style="height: 600px; important">
                                <div class="presentation">
                                    <div class="wrap-overlay flex flex-center flex-column">
                                        <h1 class="text-white animated fadeInUp entry-title">Aquí te guiamos paso a paso para que mejores tu vida financiera.</h1>
                                    </div>
                                </div>
                            </div>
                    </vs-col>
                </vs-row>
            </div>            
        </div>
        <div class="testimonial-section">
            <h1 class="text-center cases animated bounceInRight">Paquetes de <span class="light">Asesorías Florez</span></h1>
            <template>
                <div class="center grid">
                    <vs-row justify="center">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important;">
                                <template #title>
                                    <h3>Asesoría gratuita</h3>
                                </template>
                                <template #img>
                                    <img src='~/assets/images/gratuita.png' alt="">
                                </template>
                                <template #text>
                                    <p>¡Pregúntanos lo que quieras! te ayudamos a resolver gratis cualquier duda financiera que tengas.
                                    <vs-button
                                    @click="active_gratuito=!active_gratuito"
                                        size="mini"
                                    >
                                        Saber más
                                    </vs-button>
                                    </p>

                                    <br />
                                    <vs-button
                                        block
                                        color="rgb(59,222,200)"
                                        gradient
                                        :active="active == 6"
                                        @click="active = 6"
                                        size="xl"
                                    >
                                    Recibe tu asesoría gratuita
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
                       </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important;">
                                <template #title>
                                    <h3>Asesoría preferencial</h3>
                                </template>
                                <template #img>
                                    <img src='~/assets/images/preferencial.jpeg' alt="">
                                </template>
                                <template #text>
                                    <p>Te ayudamos a elaborar  un plan financiero a mediano plazo ( 2 años) con el que vas a lograr tus objetivos...
                                    <vs-button
                                      @click="active_preferencial=!active_preferencial"
                                        size="mini"
                                    >
                                    Saber más
                                    </vs-button>
                                    </p>
                                    <br />
                                    <vs-button
                                        block
                                        color="rgb(59,222,200)"
                                        gradient
                                        :active="active == 6"
                                        @click="active = 6"
                                        size="xl"
                                    >
                                      Recibe tu asesoría preferencial
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
                       </vs-col>
                    </vs-row>
                    <vs-row justify="center">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important;">
                                <template #title>
                                    <h3>Acompañamiento financiero premium</h3>
                                </template>
                                <template #img>
                                    <img src='~/assets/images/premiun.jpeg' alt="">
                                </template>
                                <template #text>
                                    <p>No des más vueltas, esta es la mejor decisión que puede tomar para mejorar tu vida financiera en un 100%.
                                        <vs-button
                                            @click="active_premiun=!active_premiun"

                                            size="mini"
                                        >
                                        Saber más
                                        </vs-button>
                                    </p>
                                    <br />
                                    <vs-button
                                        block
                                        color="rgb(59,222,200)"
                                        gradient
                                        :active="active == 6"
                                        @click="active = 6"
                                        size="xl"
                                    >
                                        Acompañamiento financiero premium
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
                       </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important;">
                                <template #title>
                                    <h3>Otros servicios</h3>
                                </template>
                                <template #img>
                                    <img src='~/assets/images/otros.jpeg' alt="">
                                </template>
                                <template #text>
                                    <p>¿Necesitas una consulta en Datacrédito, eliminar un reporte negativo, una asesoría contable o jurídica?  Elige esta opción y te ayudamos...
                                    <vs-button
                                        @click="active_otros=!active_otros"
                                        size="mini"
                                    >
                                    Saber más
                                    </vs-button>
                                    </p>
                                    <br />
                                    <vs-button
                                        block
                                        color="rgb(59,222,200)"
                                        gradient
                                        :active="active == 6"
                                        @click="active = 6"
                                        size="xl"
                                    >
                                        Escríbenos por WhatsApp
                                    </vs-button>
                                    <br />
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
                       </vs-col>
                    </vs-row>
                </div>
            </template>
        </div> 
        <div class="services-section">
            <div class="center grid">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" lg="6" sm="12" xs="12">
                        <div class="box-service-1" >
                            <div class="box-service-inner flex flex-center flex-column">
                                <h2 class="text-white no-margin text-left mt-40">Asesoría <span class="light">gratuita</span></h2>
                                <p class="light" style="padding:40px;margin:0;">Selecciona esta opción y uno de nuestros profesionales en menos de 24 horas hábiles te ayudara a:</p>
                                <ul class="service-list vineta">
                                    <li class="text-white service-item">Aumentar tu puntaje en Datacrédito o TransUnion.</li>
                                    <li class="text-white service-item">Aumentar el cupo actual de tus tarjetas de crédito.</li>
                                    <li class="text-white service-item">Pagar menos intereses en tus préstamos bancarios.</li>
                                    <li class="text-white service-item">Saber si estas reportado en las centrales de riesgo.</li>
                                    <li class="text-white service-item">Conocer cuánto tiempo estarás reportado negativamente en las centrales de riesgo por incumplimiento de pago.</li>
                                    <li class="text-white service-item">Conocer cuáles son las mejores tarjetas de crédito en Colombia.</li>
                                    <li class="text-white service-item">Conocer cuáles son las mejores tasas de crédito hipotecario.</li>
                                    <li class="text-white service-item">Conocer los requisitos que exigen la mayoría de bancos a la hora de solicitar un préstamo de libre inversión.</li>
                                    <li class="text-white service-item">Como empezar tu vida crediticia (personas jóvenes o adultas que nunca han tenido un producto financiero).</li>
                                    <li class="text-white service-item">Saber si tengo que declarar renta o no.</li>
                                    <p class="light">
                                       <span class="strong text-white">Nota:</span> <br />  Solo puedes seleccionar uno de los temas anteriores en la asesoría gratis. <br />
                                       <br />
                                       <span class="strong text-white">Nota:</span> <br /> Si quieres saber tu estado en las centrales de riesgo, debes pagar el valor de la consulta ($10.000).</p>
                                </ul>
                                <br />
                                    <vs-button v-model="ag" size="xl" @click="$router.push('/login/?tase=ag')">
                                    Recibe tu asesoría gratuita
                                    </vs-button> 
                            </div>
                        </div>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" lg="6" sm="12" xs="12">
                        <div class="box-service-2">
                            <div class="box-service-inner flex flex-center flex-column">
                                <h2 class="text-dark no-margin text-center mt-40">Asesoría <span class="light">preferencial</span></h2>
                                <p style="padding:40px;margin:0;" class="light">Selecciona esta opción y uno de nuestros profesionales en menos de 12 horas hábiles te ayudara a:</p>
                                <ul class="service-list vineta">
                                    <li class="text-dark service-item-premium">Resolver todas tus dudas financieras por vía telefónica o WhatsApp.</li>
                                    <li class="text-dark service-item-premium">Revisar minuciosamente tu Datacrédito y aumentar tu puntaje.</li>
                                    <li class="text-dark service-item-premium">Interpretar tu historial crediticio de Datacrédito para que tengas claro cuáles son tus fortalezas y tus falencias.</li>
                                    <li class="text-dark service-item-premium">Elaborar un plan financiero a mediano plazo (2 años), deberás seguirlo para
                                        mejorar tu vida financiera bien sea aumentando los cupos bancarios
                                        actuales o adquiriendo nuevos productos (nuevas tarjetas de créditos,
                                        nuevos cupos rotativos, nuevos préstamos hipotecarios, nuevos préstamos
                                        de libre inversión, etc.</li>
                                    <li class="text-dark service-item-premium">Eliminar un reporte negativo en las centrales de riesgo.</li>
                                    <li class="text-dark service-item-premium">Resolver todas tus dudas contables en materia tributaria (impuestos).</li>
                                </ul>
                                <br />
                                <vs-button v-model="ap" size="xl" @click="$router.push('/login/?tase=ap')">
                                    Recibe tu asesoría preferencial - $99.500 COP
                                </vs-button>
                            </div>
                        </div>
                    </vs-col>
                </vs-row>
            </div>            
        </div>
        <div class="testimonial-section">
            <h1 class="text-center cases animated bounceInRight">Casos de <span class="light">éxito</span></h1>
            <template>
                <div class="center grid">
                    <vs-row>
                        <vs-col :key="index" v-for="col, index in comments" vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important;">
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
 </div>
</template>
<script>
    export default {
        beforeMount(){
            this.$nextTick( ()=> {
                this.loading = this.$vs.loading({
                    background: '#7a76cb',
                    color: '#fff'
                });
            }); 
        },
        mounted() {
            this.$nextTick( ()=> {
                setTimeout(()=>{
                    this.loading.close();
                }, 2000);
            });
        },
        data:() => ({
        active_gratuito : false,
        active_preferencial : false,
        active_premiun : false,
        active_otros : false,
        ap:'',
        ag:'',
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
                    name : 'Luis Carlos Alvarez', 
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
        remember: false,
      })
    }
  </script>
 <style>

 .vs-card{
      cursor: unset!important;
  }
  .vs-card-content{
      width: 90%!important;
  }
 .strong{
     font-weight: bold;
 }
.arrows {
  position: relative;
  width: 20px;
  height: 20px;
  top: 50px;
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
            cursor: unset;
            font-size: 0.9rem;
        }

        .service-item-premium{
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: unset;
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
            padding: 10px!important;
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

            .testimonial-section{
                padding: 10px!important;
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
        width: 90%!important;
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
        background-position: unset;
        width: 100%;
        height: 400px;
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

    /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  /* CSS */
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  /* CSS */
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  /* CSS */
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  /* CSS */
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  /* CSS */
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {


  .testimonial-section{
      padding: 10px!important;
  }


  .pricing-section{
      padding: 10px!important;
  }

  .cup-footer{
      padding: 20px!important;
  }

  .form-inner{
      padding: 10%!important;
  }
  
}
    
 </style>
