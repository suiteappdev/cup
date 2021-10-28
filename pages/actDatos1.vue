 <template>
        <div class="center-grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <h1 class="form-title">Formulario de actualización Imformacion Basica</h1>
                                    <p style="margin-bottom:30px;">Por favor complete todo el formulario para asesorte de mejor manera</p>
                                    <div class="form-control">
                                        <label   for="">Nombre completo</label>
                                        <vs-input style="margin-top:10px;" v-model="value1" placeholder="Nombre completo" shadow>
                                            <template #icon>
                                                <i class='bx bx-user'></i>
                                            </template>
                                        </vs-input>
                                    <!-- Componente-->
                                    <!--<inf-fecha-nacimiento />-->
                                    <!-- Componente-->
                                        <div style="float: left; margin-top:10px;padding-left: 10px;">    
                                            <label  style="margin-bottom:10px;" for="">Sexo</label>
                                            <div class="form-control">
                                                <vs-select
                                                    placeholder="Sexo"
                                                    v-model="sexo"
                                                >
                                                <vs-option v-for="(s, index) in sex()" :key="index" :label="s" :value="s">
                                                    {{s}}
                                                </vs-option>
                                                </vs-select>
                                            </div>
                                        </div>
                                        <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                            <label  style="margin-bottom:10px;" for="">Estado civil</label>
                                            <div class="form-control">
                                                <vs-select
                                                    placeholder="Estado civil"
                                                    v-model="estadocivil"
                                                >
                                                <vs-option v-for="(e, index) in civilstatus()" :key="index" :label="e" :value="e">
                                                    {{e}}
                                                </vs-option>
                                                </vs-select>
                                            </div>
                                        </div>
                                        <vs-row>
                                        <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                        <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                            <label  style="margin-bottom:10px;" for="">Cedula</label>
                                            <div class="form-control">
                                                <vs-input style="margin-top:10px;" v-model="username" placeholder="Cedula" shadow @click="disabled = !disabled">
                                                    <template #icon>
                                                        <i class='bx bx-lock-open-alt'></i>
                                                    </template>
                                                </vs-input>
                                            </div>
                                        </div>
                                        <!-- Componente-->
                                        <inf-fecha-expedicion />
                                        <!-- Componente-->
                                        </vs-col>
                                                                                <!-- Componente-->
                                        <inf-contacto />
                                        <!-- Componente-->
                                        <!-- Componente-->
                                        <inf-residencial />
                                        <!-- Componente-->
                                        <inf-laboral />        
                                        </vs-row>
   


                                    </div>
                                    <div class="form-control">
                                            <div>
                                                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                        <vs-button
                                                            size="large"
                                                            flat
                                                            :active="active == 0"
                                                            @click="active = 0, actDatos3()"
                                                            block
                                                        >
                                                        Actualizar
                                                        </vs-button>
                                                </vs-col>
                                                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                <vs-button
                                                    size="large"
                                                    flat
                                                    :active="active == 0"
                                                    @click="active = 0, goDatos2()"
                                                    block
                                                    
                                                >
                                                Atras
                                                </vs-button>
                                        </vs-col>
                                            </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
</template>
<script>
import Contacto from '~/components/inf-contacto.vue';
import FechaExpedicion from '~/components/inf-fecha-expedicion.vue';
import fechaNacimiento from '~/components/inf-fecha-nacimiento.vue';
import InfLaboral from '~/components/inf-laboral.vue';
import InfResidencial from '~/components/inf-residencial.vue';
export default {
  components: { fechaNacimiento, FechaExpedicion, Contacto, InfResidencial, InfLaboral },
        data(){
            return{
                cllamadas:'',
                ano: '',
                mes: '',
                dia: '',
                estadocivil:'',
                sexo: '',
                username:'',
                value1: '',
                value3: '',
                picked : false,
                option : false,
                active: false,
                email: '',
                password: '',
                remember: false,
                erro: 'ocurrio un error'
            }
        },
                methods: {
               
                civilstatus : ()=>{
                    var estadocivil = [

                        "Solter@","Casada@","Comprometid@","Divorciad@"
                    ]
                    return estadocivil;
                },

                sex : ()=>{
                    var sexo = [

                        "Masculino@","Femenino"
                    ]
                    return sexo;
                },

    
                async actDatos3() {
                    try {
                        this.$router.push('board');
                        
                    } catch(error) {
                        this.error = true
                    }
                },
                async goDatos2() {
                    try {
                        this.$router.push('actDatos2');
                        
                    } catch(error) {
                        this.error = true
                    }
                },
                }
            }
  </script>
 <style scoped>
     .resi{
         margin-top: 30px;
     }   
     .center-grid{
        height: 2000px !important;
        margin-top: 90px;
     }   
     .box-right{
        width: 100%;
        margin-top: 100px;
        height: 1500px !important;

        /*height: 800px;*/
     }   
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
        padding: 30%;
    }
    
    .form-control{
        margin-bottom: 30px;
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

  .vs-card-content{
      width: 90%!important;
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
