<template>
  <div class="resi" style="margin-top=30px;">
    <div>
      <h2 class="form-title">Información en las centrales de riesgo</h2>
      <p style="margin-bottom:30px;">Actualize la información de las centrales de riesgo</p>
    </div>
              <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Tienes suscripción en Datacrédito o TransUnion?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Si / No"
                  v-model="sdatacre"
                >
                  <vs-option label="Si" :value=1>
                    Si
                  </vs-option>
                  <vs-option label="No" :value="0">
                    No
                  </vs-option>
                </vs-select>
              </div>
            </div>
            <div v-if="sdatacre" style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Le gustaría que uno de nuestros asesores lo consulte en las centrales de riesgo para brindarle una información mas completa?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Nº de cuentas bancarias"
                  v-model="sdatacresi"
                >
                  <vs-option v-for="(sds, index) in datacreds()" :key="index" :label="sds" :value="sds">
                    {{sds}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Estas reportado negativamente?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Esta Reportado negativamente?"
                  v-model="reportn"
                >
                  <vs-option v-for="(rp, index) in rportneg()" :key="index" :label="rp" :value="rp">
                    {{rp}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
    </div>
</template>
<script>
export default {
        data(){
            return{
              sdatacre :'',
              sdatacresi : '',
              reportn : '',

            }
        },
                methods: {
               
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
