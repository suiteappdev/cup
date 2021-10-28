<template>
<div>
<div class="form-control" style="margin-top:10px;">
    <label   for="">Teléfono celular de llamada</label>
    <vs-input 
        style="margin-top:10px;" 
        v-model="cllamadas" 
        placeholder="Celular" 
        shadow 
    >
        <template #icon>
            <i class='bx bx-phone' ></i>
        </template>
    </vs-input>
    </div>
    <div class="form-control" style="margin-top:10px;">
        <label   for="">Teléfono celular de WhatsApp</label>
        <vs-input 
            style="margin-top:10px;" 
            v-model="cwasap" 
            placeholder="Celular" 
            shadow>
            <template #icon>
                <i class='bx bxl-whatsapp' ></i>
            </template>
        </vs-input>
    </div>
        <div class="form-control" style="margin-top:10px;">
        <label   for="">Correo electronico</label>
        <vs-input 
            style="margin-top:10px;" 
            v-model="email" 
            placeholder="Email" 
            shadow>
            <template #icon>
                <i class='bx bx-mail-send' ></i>
            </template>
        </vs-input>
    </div>
</div>    
</template>
<script>
export default {
    data() {
        return{
            cllamadas:'',
            cwasap:'',
            email:''
            }
        
    },

    methods: {
        acceptNumber() {
            var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    }
}
</script>