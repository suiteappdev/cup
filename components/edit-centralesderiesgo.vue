<template>
<vs-row>
<vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
      <div style="float: left; margin-top:10px;padding-left: 10px;">  
        <label for=""  style="font-size:12px;">¿Tienes suscripción en Datacrédito o TransUnion?</label>
          <div class="form-control">
              <vs-select
              filter
              placeholder=""
              v-model="sdatacre"
              >
              <vs-option label="Si" :value= 1>
                  Si
              </vs-option>
              <vs-option label="No" :value= 0>
                  No
              </vs-option>
              <template v-if="sdatacre" #message-success>
                  ok
              </template>
              </vs-select>
              
          </div>
      </div>
      <div v-if="sdatacre" style="float: left; margin-top:10px;padding-left: 10px;">  
        <label for=""  style="font-size:12px;">¿Le gustaría que uno de nuestros asesores lo consulte en las centrales de riesgo para brindarle una información mas completa?</label>
          <div class="form-control">
            <vs-select
            filter
            placeholder="Asesoria"
            v-model="sdatacresi"
            >
            <vs-option v-for="(sds, index) in datacreds()" :key="index" :label="sds" :value="sds">
                {{sds}}
            </vs-option>
            <template v-if="sdatacresi == ''" #message-warn>
                campo es requerido
            </template>
            </vs-select>
          </div>
      </div>
  <div style="float: left; margin-top:10px;padding-left: 10px;">  
      <label for=""  style="font-size:12px;">¿Estas reportado negativamente?</label>
      <div class="form-control">
          <vs-select
          filter
          placeholder="Reportado?"
          v-model="reportn"
          >
          <vs-option v-for="(rp, index) in rportneg()" :key="index" :label="rp" :value="rp">
              {{rp}}
          </vs-option>
          <template v-if="!reportn" #message-warn>
              campo requerido
          </template>
          </vs-select>
      </div>
      </div>
</vs-col>      
</vs-row>
</template>
<script>

export default {
middleware:'silogin',    
        async mounted(){
                
                let meuser = window.localStorage.getItem('username')
                const metoken =  window.localStorage.getItem('jwt')
                this.username = meuser
                this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                let res = await this.$axios.get("/perfil/username/" + this.username);
                let medata = res.data[0]
                window.localStorage.setItem('id', medata.id)
                let axsdatacre = medata.sdatacre
                this.sdatacre = axsdatacre
                let axsdatacresi = medata.sdatacresi
                this.sdatacresi = axsdatacresi
                let axreportn = medata.sdatacre
                this.reportn = axreportn
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

        methods: {

          async editcentrales() {
              try {
                  const metoken =  window.localStorage.getItem('jwt')
                  this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                  const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')
                  let res = await this.$axios.put("perfils/" + meid, {
                    
                      sdatacre : this.sdatacre,
                      sdatacresi : this.sdatacresi,
                      reportn : this.reportn,
                  });

                  this.success = this.openSuccess('top-center','success')
                  this.go('/profile')
              } catch(error) {
                  this.error = this.openError('top-center', 'danger')
                  this.$router.go('/asesoriag')
                  this.pregunta = this.pregunta
              }
          },

            reset () {
                this.item = {}
            },
            selectFromParentComponent1 () {
                // select option from parent component
                this.item = this.options[0]
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