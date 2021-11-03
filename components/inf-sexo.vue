<template>
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
</template>
<script>
export default {
        data(){
            return{
                sexo: '',
            }
        },
    methods: {
        sex : ()=>{
            var sexo = [

                "Masculino@","Femenino"
            ]
            return sexo;
        },
        }
            }
  </script>