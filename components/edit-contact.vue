<template>
<vs-row>
                    <div class="form-control" style="margin-top:10px;">
                      <label for=""  style="font-size:12px;">Teléfono celular de WhatsApp</label>
                      <vs-input 
                          style="margin-top:10px;" 
                          v-model="cwasap" 
                          placeholder="Celular" 
                          shadow>
                          <template #icon>
                              <i class='bx bxl-whatsapp' ></i>
                          </template>
                      <template v-if="cwasap == ''" #message-warn>
                          Dia es requerido
                      </template>
                      <template v-if="cwasap" #message-success>
                          ok
                      </template>
                      </vs-input>
                    </div>
                  <template>
                    <div class="form-control" style="margin-top:10px;">
                        <label for=""  style="font-size:12px;">Celular de llamada</label>
                            <vs-input 
                                style="margin-top:10px;" 
                                v-model="cllamadas" 
                                placeholder="Celular" 
                                shadow 
                            >
                            <template #icon>
                                <i class='bx bx-phone' ></i>
                            </template>
                            <template v-if="cllamadas == ''" #message-warn>
                                campo requerido
                            </template>
                        </vs-input>
                      </div>
                </template>
                  <template>
                    <div class="form-control" style="margin-top:10px;">
                      <label for=""  style="font-size:12px;">Correo electronico</label>
                      <vs-input 
                          style="margin-top:10px;" 
                          v-model="correo" 
                          placeholder="Email" 
                          shadow>
                          <template #icon>
                              <i class='bx bx-mail-send' ></i>
                          </template>
                      </vs-input> 
                    </div>
                  </template>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="footer-dialog">
                            <vs-button block @click="editcontacto()">
                            Actualizar
                            </vs-button>
                        </div>
                    </vs-col>
</vs-row>
</template>
<script>
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
                    let medata = res.data[0]
                    window.localStorage.setItem('id', medata.id)
                    let axcorreo = medata.email
                    this.correo = axcorreo
                    let axcllamadas = medata.cllamadas
                    this.cllamadas = axcllamadas
                    let axcwasap = medata.cwasap
                    this.cwasap = axcwasap

                },

   data(){
        return{
                    nombrec:'',
                    name : '', 
                    image :`${require(`~/assets/images/foto5.png`)}`, 
                    correo :'',
                    username : '',
                    fnacimiento : '',
                    cllamadas : '',
                    cwasap : '',
                    sexo:'',
                    estadocivil:'',
                    cedula : '',
                    fexpedicion: '',
                    ciudadexp:'',
                    departamento: '',
                    ciudad:'',
                    direccion:'',
                    tvivienda:'',
                    estrato:'',
                    nestudio:'',
                    actsoy:'',
                    imensual:'',
                    gtomensual:'',
                    tartienes:'',
                    cuantodebes:'',
                    ctasbancarias:'',
                    cupototal:'',
                    sdatacre:'',
                    sdatacresi:'',
                    reportn:'',
                    rut:'',
                    arut:'',
                    drenta:'',
                    tpatrim:'',
                    tdeudas:'',
                    text: '',
                    active:false,
                    active2:false,
                    active3:false,
                    active4:false,
                    active5: false,
                    progress: 0,
                    imgperfil:''
        }
    },

    methods:{



                async editcontacto() {
                    try {
                        const metoken =  window.localStorage.getItem('jwt')
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')
                        let res = await this.$axios.put("perfils/" + meid, {
                          
                                email: this.correo,
                                cllamadas: this.cllamadas,
                                cwasap: this.cwasap
                        });

                        this.success = this.openSuccess('top-center','success')
                        this.go('/profile')
                        
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')

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

    },
}
</script>