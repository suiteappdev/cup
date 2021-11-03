<template>
  <div class="resi" style="margin-top=30px;">
    <div>
      <h2 class="form-title">Información laboral</h2>
      <p style="margin-bottom:30px;">Actualize la información laboral</p>
    </div>
              <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">Nivel de estudio</label>
              <div class="form-control">
                <vs-select
                  placeholder="Nivel de estudio"
                  v-model="nestudio"
                >
                  <vs-option v-for="(ne, index) in nivest()" :key="index" :label="ne" :value="ne">
                    {{ne}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">Actualmente soy</label>
              <div class="form-control">
                <vs-select
                  placeholder="Actualmente soy"
                  v-model="actsoy"
                >
                  <vs-option v-for="(as, index) in actualmentes()" :key="index" :label="as" :value="as">
                    {{as}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
          <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">Ingresos mensuales</label>
              <div class="form-control">
                <vs-select
                  placeholder="Ingresos mensuales"
                  v-model="imensual"
                >
                  <vs-option v-for="(im, index) in ingmensual()" :key="index" :label="im" :value="im">
                    {{im}}
                  </vs-option>
                </vs-select>
              </div>
            </div>
            <div style="float: left; margin-top:10px;padding-left: 10px;">  
            <label  style="margin-bottom:10px;" for="">Gastos mensuales</label>
              <div class="form-control">
                <vs-select
                  placeholder="Gastos mensuales"
                  v-model="gtomensual"
                >
                  <vs-option v-for="(gm, index) in gmensual()" :key="index" :label="gm" :value="gm">
                    {{gm}}
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
              nestudio:'',
              actsoy :'',
              imensual : '',
              gtomensual : '',
            }
        },
                methods: {
               
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
