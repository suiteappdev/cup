<template>
    <div style="float: left; margin-top:10px;padding-left: 10px;">  
    <label  style="margin-bottom:10px;" for="">Estado civil</label>
    <div class="form-control">
        <vs-select
            placeholder="Estado civil"
            v-model="estadocivil"
        >
        <vs-option v-for="(e, index) in civilstatus()" :key="index" :label="e" :value="e">
            {{e}}
        </vs-option>
        </vs-select>
    </div>
    </div>
</template>
<script>
export default {
        data(){
            return{
                estadocivil:'',
            }
        },
                methods: {
               
                civilstatus : ()=>{
                    var estadocivil = [

                        "Solter@","Casada@","Comprometid@","Divorciad@"
                    ]
                    return estadocivil;
                },

                }
            }
  </script>