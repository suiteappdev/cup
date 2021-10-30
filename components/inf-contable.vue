<template>
  <div class="resi" style="margin-top=30px;">
    <div>
      <h2 class="form-title">Información contable</h2>
      <p style="margin-bottom:30px;">Actualize la información contable</p>
    </div>
            <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Tiene RUT?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Si / No"
                  v-model="rut"
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
            <div v-if="rut" style="float: left; margin-top:10px;padding-left: 10px;">  
              <div class="form-control">
                <label  style="margin-bottom:10px;" for=""> Actividad principal en el RUT (digite nombre de la actividad o código CIIU)</label>
                <vs-input style="margin-top:10px;" v-model="arut" placeholder="Actividad" shadow>
                    <template #icon>
                        <i class='bx bx-money'></i>
                    </template>
                </vs-input>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">¿Declara renta?</label>
              <div class="form-control">
                <vs-select
                  placeholder="Si / No"
                  v-model="drenta"
                >
                  <vs-option label="Si" :value= 1>
                    Si
                  </vs-option>
                  <vs-option label="No" :value= 0>
                    No
                  </vs-option>
                </vs-select>
              </div>
            </div>
            <div v-if="drenta" style="float: left; margin-top:10px;padding-left: 10px;">  
              <div class="form-control">
                <label  style="margin-bottom:10px;" for="">Total Patrimonio bruto</label>
                <vs-input style="margin-top:10px;" v-model="tpatrim" placeholder="Total patrimonio" shadow>
                    <template #icon>
                        <i class='bx bx-money'></i>
                    </template>
                </vs-input>
              </div>
            </div>
            <div v-if="drenta" style="float: left; margin-top:10px;padding-left: 10px;">  
              <div class="form-control">
                <label  style="margin-bottom:10px;" for="">Total deudas</label>
                <vs-input style="margin-top:10px;" v-model="tdeudas" placeholder="Total deudas" shadow>
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
              tdeudas :'',
              tpatrim : '',
              drenta : '',
              arut : '',
              rut : ''

            }
        },
            
               
               
            }
  </script>
