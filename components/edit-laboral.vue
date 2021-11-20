<template>
<div>
  <div style="float: left; margin-top:10px;padding-left: 10px;">  
  <label for=""  style="font-size:12px;">Nivel de estudio</label>
  <div class="form-control">
      <vs-select
      placeholder="Nivel de estudio"
      v-model="nestudio"
      >
      <vs-option v-for="(ne, index) in nivest()" :key="index" :label="ne" :value="ne">
          {{ne}}
      </vs-option>
      <template v-if="nestudio == ''" #message-warn>
          Nivel de estudio es requerido
      </template>
      <template v-if="nestudio" #message-success>
          ok
      </template>
      </vs-select>
  </div>
  </div>
<div style="float: left; margin-top:10px;padding-left: 10px;">  
    <label for=""  style="font-size:12px;">Actualmente soy</label>
    <div class="form-control">
        <vs-select
        placeholder="Actualmente soy"
        v-model="actsoy"
        >
        <vs-option v-for="(as, index) in actualmentes()" :key="index" :label="as" :value="as">
            {{as}}
        </vs-option>
          <template v-if="actsoy == ''" #message-warn>
            Actualmente soy es requerido
        </template>
        <template v-if="actsoy" #message-success>
            ok
        </template>
        </vs-select>
    </div>
</div>
<div style="float: left; margin-top:10px;padding-left: 10px;">  
        <div class="form-control">
        <label  for=""  style="font-size:12px;">Ingresos mensuales</label>
            <vs-input type="text" v-model="imensual">
            <template v-if="imensual == ''" #message-warn>
                Ingresos mensual es requerido
            </template>
            <template v-if="imensual" #message-success>
                ok
            </template>
            </vs-input>
            <div style="font-size:12px;">
                {{imensual | currency}}
            </div>
        </div>
</div>
<div style="float: left; margin-top:10px;padding-left: 10px;">  
        <div class="form-control">
        <label  for=""  style="font-size:12px;">Gastos mensuales</label>
            <vs-input type="text" v-model="gtomensual">
            <template v-if="gtomensual == ''" #message-warn>
                Gastos mensual es requerido
            </template>
            <template v-if="gtomensual" #message-success>
                ok
            </template>
            </vs-input>
            <div  style="font-size:12px;">
                {{gtomensual | currency}}
            </div>
        </div>
</div>
<div class="footer-dialog">
    <vs-button block @click="editlaboral()">
    Actualizar
    </vs-button>
</div>
</div>
</template>
<script>
import { ModelSelect } from 'vue-search-select'
export default {
middleware:'silogin',    
async mounted(){
        
        const metoken =  window.localStorage.getItem('jwt')
        let meuser = window.localStorage.getItem('username')
        this.username = meuser
        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
        let res = await this.$axios.get("/perfil/username/" + this.username);
        let medata = res.data[0]
        window.localStorage.setItem('id', medata.id)
        let axnestudio = medata.nestudio
        this.nestudio = axnestudio
        let axactsoy = medata.actsoy
        this.actsoy = axactsoy
        let aximensuales = medata.imensual
        this.imensual = aximensuales
        let axgtomensual = medata.gtomensual
        this.gtomensual = axgtomensual
    },

        data(){
            return{
                serverDate :'',
                nombrec:'',
                fnano: '',
                fnmes: '',
                fndia: '',
                fnacimiento: '',
                sexo: '',
                estadocivil:'',
                username:'',
                exano: '',
                exmes: '',
                exdia: '',
                fexpedicion: '',
                cllamadas:'',
                cwasap:'',
                email:'',
                departamento: '',
                selectedCiudades:'',
                ciudad:'',
                direccion:'',
                tvivienda :'',
                estrato :'',
                cuantodebes :'0',
                cupototal : '0',
                tartienes : '',
                ctasbancarias : '',
                sdatacre :0,
                sdatacresi : 'no',
                reportn : '',
                tdeudas :'0',
                tpatrim : '0',
                drenta : 0,
                arut : '0',
                rut : 0,
                nestudio:'',
                actsoy :'',
                imensual : '',
                gtomensual : '',
                tase : '',
                active: false,
                option : false,
                remember: false,
                meuser:'',
                disabled: '',
                erro: 'ocurrio un error',
            }
        },

                components: {
                    ModelSelect
                },
                methods: {
               
                            reset () {
                                this.item = {}
                            },
                            selectFromParentComponent1 () {
                                // select option from parent component
                                this.item = this.options[0]
                            },

                  async editlaboral() {
                    try {
                        const metoken =  window.localStorage.getItem('jwt')
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')
                        alert('entra')
                        let res = await this.$axios.put("perfils/" + meid, {
                          
                            nestudio : this.nestudio,
                            actsoy : this.actsoy,
                            imensual : this.imensual,
                            gtomensual : this.gtomensual,
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
                        text: `Actualizo su perfil con exito`
                    })
                    },
                openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Ocurrio un error al Actualizar el perfil`
                    })
                    },


               onChange(event) {
                     alert(event.target.value)
                },

                nivest : ()=>{
                    var nivestudio = [

                        "Basica Primaria","Bachiller","Tecnico","Tecnologo","Profesional"
                    ]
                    return nivestudio;
                    
                },

                actualmentes : ()=>{
                    var actualmente = [

                        "Estudiante","Empleado","Independiente","Desempleado","Pensionado"
                    ]
                    return actualmente;
                    
                },

                ingmensual : ()=>{
                    var ingmensuales = [

                        "Menos de 500.000","de 500.000 a 1.000.000","de 1.000.000  a 1.500.000",
                        "de 1.500.000  a 2.000.000","de 2.000.000  a 2.500.000","de 2.500.000  a 3.000.000",
                        "de 3.000.000  a 3.500.000"
                    ]
                    return ingmensuales;
                    
                },

                gmensual : ()=>{
                    var ingmensuales = [

                        "Menos de 500.000","de 500.000 a 1.000.000","de 1.000.000  a 1.500.000",
                        "de 1.500.000  a 2.000.000","de 2.000.000  a 2.500.000","de 2.500.000  a 3.000.000",
                        "de 3.000.000  a 3.500.000"
                    ]
                    return ingmensuales;
                },
                }
            }
  </script>
