<template>
  <div class="resi" style="margin-top=30px;">
    <div>
      <h2 class="form-title">Información bancaria</h2>
      <p style="margin-bottom:30px;">Actualize la información bancaria</p>
    </div>
            <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Cuantas cuentas bancarias tienes?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Nº de cuentas bancarias"
                  v-model="ctasbancarias"
                >
                  <vs-option v-for="(cb, index) in ncuentas()" :key="index" :label="cb" :value="cb">
                    {{cb}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Cuantas tarjetas de crédito tienes?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Nº de tarjetas de credito"
                  v-model="tartienes"
                >
                  <vs-option v-for="(tc, index) in tcredito()" :key="index" :label="tc" :value="tc">
                    {{tc}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
              <div class="form-control">
                <label  style="margin-bottom:10px;" for="">Cupo actual en todos tus productos financieros</label>
                <vs-input style="margin-top:10px;" v-model="cupototal" placeholder="Cupo total" shadow>
                    <template #icon>
                        <i class='bx bx-money'></i>
                    </template>
                </vs-input>
              </div>
            </div>
            <div style="float: left; margin-top:10px;padding-left: 10px;">  
              <div class="form-control">
                <label  style="margin-bottom:10px;" for="">Cupo utilizado</label>
                <vs-input style="margin-top:10px;" v-model="cuantodebes" placeholder="Cuanto debes" shadow>
                    <template #icon>
                        <i class='bx bx-money'></i>
                    </template>
                </vs-input>
              </div>
            </div>
    </div>
</template>
<script>
export default {
        data(){
            return{
              cuantodebes :'0',
              cupototal : '0',
              tartienes : '',
              ctasbancarias : ''

            }
        },
                methods: {
               
                ncuentas : ()=>{
                    var ncuenta = [

                        "1","2","3","4 o mas"
                    ]
                    return ncuenta;
                    
                },

                tcredito : ()=>{
                    var tcreditos = [

                        "1","2","3","4 o mas"
                    ]
                    return tcreditos;
                    
                },

                }
            }
  </script>
