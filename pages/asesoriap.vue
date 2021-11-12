 <template>
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <div class="form-control">
                                        <h1 class="form-title">Formula tu pregunta</h1>
                                    </div>
                                    <div class="form-control">
                                        <b-form-textarea 
                                            v-model="pregunta" 
                                            debounce="500" 
                                            rows="1" 
                                            max-rows="100" 
                                            placeholder="(elabora la pregunta de manera precisa, así el asesor que analice tu caso te dará la información completa. Recuerda que si tienes mas de una duda a resolver, debes tomar la asesoría preferencial)"
                                            style="font-family: Poppins; font-size: smaller; height: 130px"
                                        >
                                        </b-form-textarea>
                                    </div>
                                    <div class="form-control" v-show="meplan">
                                    <h1 class="form-title">Formas de pagos</h1>
                                    <p style="margin-bottom:30px;">Te responderemos todas tus dudas en un plazo máximo de 12 horas hábiles, te enviaremos un mensaje a tu numero de WhatsApp para acordar la hora de la llamada.</p>
                                    <p style="margin-bottom:30px;">Realiza el pago de tu asesoría preferencial a una de las siguientes cuentas bancarias y envía el comprobante de pago a  nuestro numero de WhatsApp 3118221549</p>
                                    <template>
                                    <vs-tr>
                                        <vs-td>Cuenta de ahorros Bancolombia: </vs-td><vs-td>50672061269 </vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Cuenta de ahorros Davivienda</vs-td><vs-td>206000722424</vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Cuenta de ahorros Banco de Bogotá:</vs-td> <vs-td>592622575</vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Cuenta de ahorros Colpatria</vs-td> <vs-td>9362004758</vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Cuenta de ahorros banco caja social: </vs-td> <vs-td>24103774390</vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Total Patrimonio bruto:</vs-td> <vs-td>68.000.000</vs-td>
                                    </vs-tr>
                                    <vs-tr>
                                        <vs-td>Total deudas</vs-td> <vs-td>18.000.000</vs-td>
                                    </vs-tr>
                                    </template>
                                    </div>
                                    <template>
                                    <div> 
                                    </div>
                                    </template>
                                        <div class="center grid">
                                            <vs-row>
                                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                        <vs-button
                                                            style="margin-bottom:30px;margin-top:30px;"
                                                            flat
                                                            :active="active == 0"
                                                            @click="active = 0, enviar()"
                                                            block
                                                            size="large"
                                                            
                                                        >
                                                        Enviar
                                                        </vs-button>
                                                </vs-col>
                                            </vs-row>
                                        </div>

                               </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
</template>
<script>
    export default {
      middleware:'silogin',
   async mounted(){
        let meuser = window.localStorage.getItem('username')
        let actDatos = await this.$axios.get('/perfil/username/' + meuser)
        let pregunta = actDatos.data[0].estadopreg
        if(pregunta){
            this.$router.push('board')
        }else{
            this.$router.push('asesoriap')
        }
          let plan = window.localStorage.getItem('plan').replace(/['"]+/g, '')
          if(plan == "ap"){
              this.meplan = true
          }else{
              this.meplan = false
          }
          
      },  
      data(){
          return{
                    pregunta : '',
                    estadopreg:'',
                    active:'',
                    meplan:false
                }
      
        },
                methods: {

                async enviar() {
                    try {
                        const metoken =  window.localStorage.getItem('jwt')
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')

                        let res = await this.$axios.put("perfils/" + meid, {
                            pregunta: this.pregunta,
                            estadopreg: true,
                        });

                        this.success = this.openSuccess('top-center','success')
                        this.go('/profile')
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.go('/asesoriag')
                        this.pregunta = this.pregunta
                    }
                },
                
                go : (route)=>{
                    window.location.href = route
                },
                
                openSuccess(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Su pregunta fue enviada con exito`
                    })
                    },
                openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Ocurrio un error al enviar la pregunta`
                    })
                    },

                },

            computed: {

 	            }
    }
  </script>
 <style>
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
    }
    
    .form-control{
        margin-bottom: 0px;
        /*height: 130px;*/
        width: 100%;
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
        border-left: 1px solid #1fc6e2;
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
  .cup-footer{
      padding: 20px!important;
  }

  .form-inner{
      padding: 10%!important;
  }
}
 </style>
