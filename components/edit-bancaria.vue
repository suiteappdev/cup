<template>
  <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" sm="12" xs="12">
                <div style="float: left; margin-top:10px;padding-left: 10px;">  
                    <label for=""  style="font-size:12px;">¿Cuantas cuentas bancarias tienes?</label>
                    <div class="form-control">
                        <vs-select
                        filter
                        placeholder="Nº de cuentas bancarias"
                        v-model="ctasbancarias"
                        >
                        <vs-option v-for="(cb, index) in ncuentas()" :key="index" :label="cb" :value="cb">
                            {{cb}}
                        </vs-option>
                          <template v-if="!ctasbancarias" #message-warn>
                            campo requerido
                          </template>
                        </vs-select>
                    </div>
                    </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" sm="12" xs="12">
              <div style="float: left; margin-top:10px;padding-left: 10px;">  
                  <label for=""  style="font-size:12px;">¿Cuantas tarjetas de crédito tienes?</label>
                  <div class="form-control">
                      <vs-select
                      filter
                      placeholder="Nº de tarjetas de credito"
                      v-model="tartienes"
                      >
                      <vs-option v-for="(tc, index) in tcredito()" :key="index" :label="tc" :value="tc">
                          {{tc}}
                      </vs-option>
                      <template v-if="!tartienes" #message-warn>
                         campo requerido
                      </template>
                      </vs-select>
                  </div>
                </div>
            </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" sm="12" xs="12">
                  <div style="float: left; margin-top:10px;padding-left: 10px;">  
                        <div class="form-control">
                            <label for=""  style="font-size:12px;">Cupo actual en todos tus productos financieros</label>
                            <vs-input style="margin-top:10px;" v-model="cupototal" placeholder="Cupo total" shadow>
                                <template #icon>
                                    <i class='bx bx-money'></i>
                                </template>
                                <template v-if="!cupototal" #message-warn>
                                   campo requerido
                                </template>
                            </vs-input>
                            <div style="font-size:12px;">
                                {{cupototal | currency}}
                            </div>
                        </div>
                    </div>
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" sm="12" xs="12">
                <div style="float: left; margin-top:10px;padding-left: 10px;">  
                  <div class="form-control">
                      <label for=""  style="font-size:12px;">Cupo utilizado</label>
                      <vs-input style="margin-top:10px;" v-model="cuantodebes" placeholder="Cuanto debes" shadow>
                          <template #icon>
                              <i class='bx bx-money'></i>
                          </template>
                      <template v-if="!cuantodebes" #message-warn>
                          Cuanto debes es requerido
                      </template>
                      </vs-input>
                      <div style="font-size:12px;">
                          {{cuantodebes | currency}}
                      </div>
                  </div>
                  </div>
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                  <div class="footer-dialog">
                      <vs-button block @click="editbancaria()">
                      Actualizar
                      </vs-button>
                  </div>
              </vs-col>
        </vs-row>
</template>
<script>
import { ModelSelect } from 'vue-search-select'

export default {
middleware:'silogin',

                async mounted() {
                
                    let meuser = window.localStorage.getItem('username')
                    let actDatos = await this.$axios.get('/perfil/username/' + meuser)
                    let obj = JSON.stringify(actDatos.data)
                    const metoken =  window.localStorage.getItem('jwt')
                    this.username = meuser
                    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                    let res = await this.$axios.get("/perfil/username/" + this.username);
                    window.localStorage.setItem('id', medata.id)
                    let medata = res.data[0]
                    let nombrec = medata.nombrec
                    this.name = nombrec
                    let axctasbancarias = medata.ctasbancarias
                    this.ctasbancarias = axctasbancarias
                    let axtartienes = medata.tartienes
                    this.tartienes = axtartienes
                    let axcuantodebes = medata.cuantodebes
                    this.cuantodebes = axcuantodebes
                    let axcupototal = medata.cupototal
                    this.cupototal = axcupototal
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
                file:'',
                selectfile: null,
                percentrenta: 0,
                percentrut:0,
                imgrenta:'',
                imgrut:'',
                time:0,
                max: 100,
                erro: 'ocurrio un error',
            }
        },

                components: {
                    ModelSelect
                },
                methods: {

                async editbancaria() {
                    try {
                        const metoken =  window.localStorage.getItem('jwt')
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')
                        let res = await this.$axios.put("perfils/" + meid, {
                          
                          ctasbancarias : this.ctasbancarias,
                          tartienes : this.tartienes,
                          cuantodebes : this.cuantodebes,
                          cupototal : this.cupototal
                        });

                        this.success = this.openSuccess('top-center','success')
                        this.go('/profile')
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.go('/asesoriag')
                        this.pregunta = this.pregunta
                    }
                },


                  async selectuploadrut(event){
                      const formdata = new FormData();
                      Array.from(event.target.files).forEach(image => {
                          formdata.append('files', image);
                          console.log(event)
                      });
                      
                      if(formdata){
                          let responserut = await this.$axios.post('upload', formdata, {
                              onUploadProgress: progressEvent => {
                              console.log('subida de archivo', parseInt(Math.round((progressEvent.loaded / progressEvent.total)* 100)), '%')
                              const percentrut = parseInt(Math.round((progressEvent.loaded / progressEvent.total)* 100))
                              this.percentrut = percentrut
                              }
                            })
                            this.imgrut = responserut.data
                            console.log(responserut.data)
                            console.log(this.imgrut)
                      }
                      //delete this.$axios.defaults.headers.common["Authorization"];

                  },
                  removeimgrut(){
                    this.imgrut = '';
                    this.percentrut = '';
                  },

                  removeimgrenta(){
                    this.imgrenta = '';
                    this.percentrenta = '';
                  },

                  async selectuploadrenta(event){
                      const formdata = new FormData();
                      Array.from(event.target.files).forEach(image => {
                          formdata.append('files', image);
                          console.log(event)
                      });
                      
                      if(formdata){
                          let responserenta = await this.$axios.post('upload', formdata, {
                              onUploadProgress: progressEvent => {
                                console.log('subida de archivo renta', parseInt(Math.round((progressEvent.loaded / progressEvent.total)* 100)), '%')
                              const percentrenta = parseInt(Math.round((progressEvent.loaded / progressEvent.total)* 100))
                              this.percentrenta = percentrenta
                              }
                            })

                            this.imgrenta = responserenta.data
                            console.log(responserenta.data)
                            console.log(this.imgrenta)
                      }
                      //delete this.$axios.defaults.headers.common["Authorization"];
                  },

                  reset () {
                      this.item = {}
                  },
                  selectFromParentComponent1 () {
                      // select option from parent component
                      this.item = this.options[0]
                  },

                    async actperfil() {
                            var fnyears = this.fnano
                            var fnmonth = this.fnmes
                            var fnday = this.fndia 
                            var fndate = new Date(fnyears=this.fnano, fnmonth=this.fnmes, fnday=this.fndia)
                            var exyears = this.exano
                            var exmonth = this.exmes
                            var exday = this.exdia 
                            var exdate = new Date(exyears=this.exano, exmonth=this.exmes, exday=this.exdia)
                            const plan =  window.localStorage.getItem('plan')
                            const email =  window.localStorage.getItem('email')
                            const metoken =  window.localStorage.getItem('jwt')
                            const username = window.localStorage.getItem('username')
                            const usernameid = parseInt(username)
                        try {

                            this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken

                            
                            let res = await this.$axios.post("perfils", {
                            actDatos1:true,    
                            nombrec: this.nombrec,
                            fnacimiento: fndate,
                            sexo: this.sexo,
                            estadocivil:this.estadocivil,
                            username: username,
                            fexpedicion: exdate,
                            ciudadexp: this.ciudadexp.text,
                            cllamadas:this.cllamadas,
                            cwasap:this.cwasap,
                            email: email,
                            departamento: this.departamento,
                            ciudad:this.ciudad,
                            direccion: this.direccion,
                            tvivienda :this.tvivienda,
                            estrato :this.estrato,
                            cuantodebes :this.cuantodebes,
                            cupototal : this.cupototal,
                            tartienes : this.tartienes,
                            ctasbancarias : this.ctasbancarias,
                            sdatacre : this.sdatacre,
                            sdatacresi : this.sdatacresi,
                            reportn : this.reportn,
                            tdeudas :this.tdeudas,
                            tpatrim : this.tpatrim,
                            drenta : this.drenta,
                            arut : this.arut,
                            rut : this.rut,
                            nestudio : this.nestudio,
                            actsoy : this.actsoy,
                            imensual : this.imensual,
                            gtomensual : this.gtomensual,
                            tase : plan,
                            imgrut: this.imgrut,
                            imgrenta: this.imgrenta,

                            });

                            const perfil = res.data
                            console.log(perfil)
                            window.localStorage.setItem('id', perfil._id)
                            this.success = this.openSuccess('top-center','success')
                            
                                    this.go('/asesoriap')
                            
                        }   
                        catch(error) {
                           this.error = this.openError('top-center', 'danger')
                           this.$router.go('/actDatos1')
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

                    years  : (startYear)=> {
                    var currentYear = new Date().getFullYear(), years = [];
                    startYear = startYear || 1980;  

                    while ( startYear <= currentYear ) {
                        years.push(startYear++);
                    }

                    return years;
                },
                    months  : ()=> {

                    var monthNames = [ 
                                        {mes: 'Enero', id: 0},
                                        {mes: 'Febrero', id: 1},
                                        {mes: 'Marzo', id: 2},
                                        {mes: 'Abril', id: 3},
                                        {mes: 'Mayo', id: 4},
                                        {mes: 'Junio', id: 5},
                                        {mes: 'Julio', id: 6},
                                        {mes: 'Agosto', id: 7},
                                        {mes: 'Septiembre', id: 8},
                                        {mes: 'Octubre', id: 9},
                                        {mes: 'Noviembre', id: 10},
                                        {mes: 'Diciembre', id: 11},
                                     ];
                                     
                    return monthNames;    

                    },

                    days  : ()=> {
                    var currentDays = [
                        1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,
                        16,17,18,19,20,21,22,23,24,25,26,27,28,29,
                        30,31
                    ]

                    return currentDays;
                },
                
                    sex : ()=>{
                    var sexo = [

                        "Masculino","Femenino"
                    ]
                    return sexo;
                },

                    civilstatus : ()=>{
                    var estadocivil = [

                        "Solter@","Casad@","Comprometid@","Divorciad@"
                    ]
                    return estadocivil;
                },

                                tvienda : ()=>{
                    var tipovivienda = [

                        "Propia","Familiar","Arrendada"
                    ]
                    return tipovivienda;
                },

               onChange(event) {
                     alert(event.target.value)
                },

                est : ()=>{
                    var es = [

                        "1","2","3","4","5 o mas"
                    ]
                    return es;
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

                    ncuentas : ()=>{
                    var ncuenta = [

                        "0","1","2","3","4 o mas"
                    ]
                    return ncuenta;
                    
                },

                    tcredito : ()=>{
                    var tcreditos = [

                        "0","1","2","3","4 o mas"
                    ]
                    return tcreditos;
                    
                },

                    datacred : ()=>{
                    var susdatacred = [
                            
                        "Si","No"
                    ]
                    return susdatacred;
                    
                },

                    datacreds : ()=>{
                    var datacredis = [

                        "Si","No"
                    ]
                    return datacredis;
                    
                },

                    rportneg : ()=>{
                    var rportnega = [

                         "Si","No","No lo se"
                    ]
                    return rportnega;
                    
                },

                }
            }
  </script>