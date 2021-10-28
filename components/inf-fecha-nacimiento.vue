<template>
    <div class="form-control" style="margin-top:15px">
        <label  style="margin-bottom:10px;" for="">Fecha de nacimiento</label>
        <div style="display:flex;margin-top:10px;
        ">
        <vs-select style="padding-left: 10px;"
            placeholder="Año"
            v-model="ano"
        >
        <vs-option v-for="(a, index) in years()" :key="index" :label="a" :value="a">
            {{a}}
        </vs-option>
        </vs-select>
        <vs-select  style="padding-left: 10px;"
            placeholder="Mes"
            v-model="mes"
        >
        <vs-option v-for="(m, index) in months()" :key="index" :label="m" :value="m">
            {{m}}
        </vs-option>
        </vs-select>
        <vs-select style="padding-left: 10px;"
            placeholder="Dia"
            v-model="dia"
        >
        <vs-option v-for="(d, index) in days()" :key="index" :label="d" :value="d">
            {{d}}
        </vs-option>
        </vs-select>
    </div>
    </div>
</template>
<script>
 export default {
        data(){
            return{
                ano: '',
                mes: '',
                dia: '',
                picked : false,
                option : false,
                active: false,
            }
        },
                methods: {
                years  : (startYear)=> {
                    var currentYear = new Date().getFullYear(), years = [];
                    startYear = startYear || 1980;  

                    while ( startYear <= currentYear ) {
                        years.push(startYear++);
                    }

                    return years;
                },
                months  : ()=> {

                    var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                                        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" 
                                     ];
                                     
                    return monthNames;    

                    },
                days  : ()=> {
                    var currentDays = [
                        "1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15",
                        "16","17","18","19","20","21","22","23","24","25","26","27","28","29",
                        "30","31"
                    ]

                    return currentDays;
                },
                }
            }
  </script>
