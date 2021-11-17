<template>
<div class="resi" style="margin-top=30px;">
    <div style="float: left; margin-top:10px;padding-left: 10px;">  
        <label  style="margin-bottom:10px;" for="">Departamento</label>
        <div class="form-control">
            <vs-select
            placeholder="Departamento"
            v-model="departamento"
            >
            <vs-option v-for="(d, index) in dpto()" :key="index" :label="d.departamento" :value="d.id">
                {{d.departamento}}
            </vs-option>
            <template v-if="departamento == ''" #message-warn>
                Departamento es requerido
            </template>
                <template v-if="departamento" #message-success>
                ok
            </template> 
            </vs-select>

        </div>
        </div>
        <div style="float: left; margin-top:10px;padding-left: 10px;">  
        <label  style="margin-bottom:10px;" for="">Ciudad</label>
        <div class="form-control">
            <vs-select
            placeholder="Ciudad"
            v-model="ciudad"
            >
            <vs-option v-for="(c, index) in selectedCiudades" :key="index" :label="c.select" :value="c">
                {{c}}
            </vs-option>
            <template v-if="ciudad == ''" #message-warn>
                Departamento es requerido
            </template>
                <template v-if="ciudad" #message-success>
                ok
            </template> 
            </vs-select>
        </div>
        </div>
        <div class="form-control" style="margin-top:10px;">
        <label   for="">Direccion</label>
        <vs-input 
            style="margin-top:10px;" 
            v-model="direccion" 
            placeholder="Direccion" 
            shadow>
            <template v-if="direccion == ''" #message-warn>
                Direccion es requerido
            </template>
                <template v-if="direccion" #message-success>
                ok
        </template>
        </vs-input>
        </div>
    <div style="float: left; margin-top:10px;padding-left: 10px;">  
        <label  style="margin-bottom:10px;" for="">Tipo de vivienda</label>
        <div class="form-control">
            <vs-select
            placeholder="Tipo de vivienda"
            v-model="tvivienda"
            >
            <vs-option v-for="(v, index) in tvienda()" :key="index" :label="v" :value="v">
                {{v}}
            </vs-option>
            <template v-if="tvivienda == ''" #message-warn>
                Tipo de vivienda es requerido
            </template>
                <template v-if="tvivienda" #message-success>
                ok
            </template> 
            </vs-select>
        </div>
        </div>
        <div style="float: left; margin-top:10px;padding-left: 10px;">  
        <label  style="margin-bottom:10px;" for="">Estrato</label>
        <div class="form-control">
            <vs-select
            placeholder="Estrato"
            v-model="estrato"
            >
            <vs-option v-for="(e, index) in est()" :key="index" :label="e" :value="e">
                {{e}}
            </vs-option>
            <template v-if="estrato == ''" #message-warn>
                Estrato es requerido
            </template>
                <template v-if="estrato" #message-success>
                ok
            </template> 
            </vs-select>
        </div>
        </div>
        <div class="footer-dialog">
            <vs-button block @click="editresidencial()">
            Actualizar
            </vs-button>
        </div>
</div>
</template>
<script>
import { ModelSelect } from 'vue-search-select'

export default {

       async mounted(){

        const metoken =  window.localStorage.getItem('jwt')
        let meuser = window.localStorage.getItem('username')
        this.username = meuser
        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
        let res = await this.$axios.get("/perfil/username/" + this.username);
        let medata = res.data[0]
        let axdepartamento = medata.departamento
        this.departamento = axdepartamento
        let axciudad = medata.ciudad
        this.ciudad = axciudad
        let axtvivienda = medata.tvivienda
        this.tvivienda = axtvivienda
        let axestrato = medata.estrato
        this.estrato = axestrato
        let axdireccion = medata.direccion
        this.direccion = axdireccion

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
                erro: 'ocurrio un error',
                options: [
  {
    code_dpto:'5',
    value:'5001',
    text:'MEDELLÍN'
  },
  {
    code_dpto:'5',
    value:'5002',
    text:'ABEJORRAL'
  },
  {
    code_dpto:'5',
    value:'5004',
    text:'ABRIAQUÍ'
  },
  {
    code_dpto:'5',
    value:'5021',
    text:'ALEJANDRÍA'
  },
  {
    code_dpto:'5',
    value:'5030',
    text:'AMAGÁ'
  },
  {
    code_dpto:'5',
    value:'5031',
    text:'AMALFI'
  },
  {
    code_dpto:'5',
    value:'5034',
    text:'ANDES'
  },
  {
    code_dpto:'5',
    value:'5036',
    text:'ANGELÓPOLIS'
  },
  {
    code_dpto:'5',
    value:'5038',
    text:'ANGOSTURA'
  },
  {
    code_dpto:'5',
    value:'5040',
    text:'ANORÍ'
  },
  {
    code_dpto:'5',
    value:'5042',
    text:'SANTAFÉ DE ANTIOQUIA'
  },
  {
    code_dpto:'5',
    value:'5044',
    text:'ANZA'
  },
  {
    code_dpto:'5',
    value:'5045',
    text:'APARTADÓ'
  },
  {
    code_dpto:'5',
    value:'5051',
    text:'ARBOLETES'
  },
  {
    code_dpto:'5',
    value:'5055',
    text:'ARGELIA'
  },
  {
    code_dpto:'5',
    value:'5059',
    text:'ARMENIA'
  },
  {
    code_dpto:'5',
    value:'5079',
    text:'BARBOSA'
  },
  {
    code_dpto:'5',
    value:'5086',
    text:'BELMIRA'
  },
  {
    code_dpto:'5',
    value:'5088',
    text:'BELLO'
  },
  {
    code_dpto:'5',
    value:'5091',
    text:'BETANIA'
  },
  {
    code_dpto:'5',
    value:'5093',
    text:'BETULIA'
  },
  {
    code_dpto:'5',
    value:'5101',
    text:'CIUDAD BOLÍVAR'
  },
  {
    code_dpto:'5',
    value:'5107',
    text:'BRICEÑO'
  },
  {
    code_dpto:'5',
    value:'5113',
    text:'BURITICÁ'
  },
  {
    code_dpto:'5',
    value:'5120',
    text:'CÁCERES'
  },
  {
    code_dpto:'5',
    value:'5125',
    text:'CAICEDO'
  },
  {
    code_dpto:'5',
    value:'5129',
    text:'CALDAS'
  },
  {
    code_dpto:'5',
    value:'5134',
    text:'CAMPAMENTO'
  },
  {
    code_dpto:'5',
    value:'5138',
    text:'CAÑASGORDAS'
  },
  {
    code_dpto:'5',
    value:'5142',
    text:'CARACOLÍ'
  },
  {
    code_dpto:'5',
    value:'5145',
    text:'CARAMANTA'
  },
  {
    code_dpto:'5',
    value:'5147',
    text:'CAREPA'
  },
  {
    code_dpto:'5',
    value:'5148',
    text:'EL CARMEN DE VIBORAL'
  },
  {
    code_dpto:'5',
    value:'5150',
    text:'CAROLINA'
  },
  {
    code_dpto:'5',
    value:'5154',
    text:'CAUCASIA'
  },
  {
    code_dpto:'5',
    value:'5172',
    text:'CHIGORODÓ'
  },
  {
    code_dpto:'5',
    value:'5190',
    text:'CISNEROS'
  },
  {
    code_dpto:'5',
    value:'5197',
    text:'COCORNÁ'
  },
  {
    code_dpto:'5',
    value:'5206',
    text:'CONCEPCIÓN'
  },
  {
    code_dpto:'5',
    value:'5209',
    text:'CONCORDIA'
  },
  {
    code_dpto:'5',
    value:'5212',
    text:'COPACABANA'
  },
  {
    code_dpto:'5',
    value:'5234',
    text:'DABEIBA'
  },
  {
    code_dpto:'5',
    value:'5237',
    text:'DON MATÍAS'
  },
  {
    code_dpto:'5',
    value:'5240',
    text:'EBÉJICO'
  },
  {
    code_dpto:'5',
    value:'5250',
    text:'EL BAGRE'
  },
  {
    code_dpto:'5',
    value:'5264',
    text:'ENTRERRIOS'
  },
  {
    code_dpto:'5',
    value:'5266',
    text:'ENVIGADO'
  },
  {
    code_dpto:'5',
    value:'5282',
    text:'FREDONIA'
  },
  {
    code_dpto:'5',
    value:'5284',
    text:'FRONTINO'
  },
  {
    code_dpto:'5',
    value:'5306',
    text:'GIRALDO'
  },
  {
    code_dpto:'5',
    value:'5308',
    text:'GIRARDOTA'
  },
  {
    code_dpto:'5',
    value:'5310',
    text:'GÓMEZ PLATA'
  },
  {
    code_dpto:'5',
    value:'5313',
    text:'GRANADA'
  },
  {
    code_dpto:'5',
    value:'5315',
    text:'GUADALUPE'
  },
  {
    code_dpto:'5',
    value:'5318',
    text:'GUARNE'
  },
  {
    code_dpto:'5',
    value:'5321',
    text:'GUATAPE'
  },
  {
    code_dpto:'5',
    value:'5347',
    text:'HELICONIA'
  },
  {
    code_dpto:'5',
    value:'5353',
    text:'HISPANIA'
  },
  {
    code_dpto:'5',
    value:'5360',
    text:'ITAGUI'
  },
  {
    code_dpto:'5',
    value:'5361',
    text:'ITUANGO'
  },
  {
    code_dpto:'5',
    value:'5364',
    text:'JARDÍN'
  },
  {
    code_dpto:'5',
    value:'5368',
    text:'JERICÓ'
  },
  {
    code_dpto:'5',
    value:'5376',
    text:'LA CEJA'
  },
  {
    code_dpto:'5',
    value:'5380',
    text:'LA ESTRELLA'
  },
  {
    code_dpto:'5',
    value:'5390',
    text:'LA PINTADA'
  },
  {
    code_dpto:'5',
    value:'5400',
    text:'LA UNIÓN'
  },
  {
    code_dpto:'5',
    value:'5411',
    text:'LIBORINA'
  },
  {
    code_dpto:'5',
    value:'5425',
    text:'MACEO'
  },
  {
    code_dpto:'5',
    value:'5440',
    text:'MARINILLA'
  },
  {
    code_dpto:'5',
    value:'5467',
    text:'MONTEBELLO'
  },
  {
    code_dpto:'5',
    value:'5475',
    text:'MURINDÓ'
  },
  {
    code_dpto:'5',
    value:'5480',
    text:'MUTATÁ'
  },
  {
    code_dpto:'5',
    value:'5483',
    text:'NARIÑO'
  },
  {
    code_dpto:'5',
    value:'5490',
    text:'NECOCLÍ'
  },
  {
    code_dpto:'5',
    value:'5495',
    text:'NECHÍ'
  },
  {
    code_dpto:'5',
    value:'5501',
    text:'OLAYA'
  },
  {
    code_dpto:'5',
    value:'5541',
    text:'PEÑOL'
  },
  {
    code_dpto:'5',
    value:'5543',
    text:'PEQUE'
  },
  {
    code_dpto:'5',
    value:'5576',
    text:'PUEBLORRICO'
  },
  {
    code_dpto:'5',
    value:'5579',
    text:'PUERTO BERRÍO'
  },
  {
    code_dpto:'5',
    value:'5585',
    text:'PUERTO NARE'
  },
  {
    code_dpto:'5',
    value:'5591',
    text:'PUERTO TRIUNFO'
  },
  {
    code_dpto:'5',
    value:'5604',
    text:'REMEDIOS'
  },
  {
    code_dpto:'5',
    value:'5607',
    text:'RETIRO'
  },
  {
    code_dpto:'5',
    value:'5615',
    text:'RIONEGRO'
  },
  {
    code_dpto:'5',
    value:'5628',
    text:'SABANALARGA'
  },
  {
    code_dpto:'5',
    value:'5631',
    text:'SABANETA'
  },
  {
    code_dpto:'5',
    value:'5642',
    text:'SALGAR'
  },
  {
    code_dpto:'5',
    value:'5647',
    text:'SAN ANDRÉS DE CUERQUÍA'
  },
  {
    code_dpto:'5',
    value:'5649',
    text:'SAN CARLOS'
  },
  {
    code_dpto:'5',
    value:'5652',
    text:'SAN FRANCISCO'
  },
  {
    code_dpto:'5',
    value:'5656',
    text:'SAN JERÓNIMO'
  },
  {
    code_dpto:'5',
    value:'5658',
    text:'SAN JOSÉ DE LA MONTAÑA'
  },
  {
    code_dpto:'5',
    value:'5659',
    text:'SAN JUAN DE URABÁ'
  },
  {
    code_dpto:'5',
    value:'5660',
    text:'SAN LUIS'
  },
  {
    code_dpto:'5',
    value:'5664',
    text:'SAN PEDRO'
  },
  {
    code_dpto:'5',
    value:'5665',
    text:'SAN PEDRO DE URABA'
  },
  {
    code_dpto:'5',
    value:'5667',
    text:'SAN RAFAEL'
  },
  {
    code_dpto:'5',
    value:'5670',
    text:'SAN ROQUE'
  },
  {
    code_dpto:'5',
    value:'5674',
    text:'SAN VICENTE'
  },
  {
    code_dpto:'5',
    value:'5679',
    text:'SANTA BÁRBARA'
  },
  {
    code_dpto:'5',
    value:'5686',
    text:'SANTA ROSA DE OSOS'
  },
  {
    code_dpto:'5',
    value:'5690',
    text:'SANTO DOMINGO'
  },
  {
    code_dpto:'5',
    value:'5697',
    text:'EL SANTUARIO'
  },
  {
    code_dpto:'5',
    value:'5736',
    text:'SEGOVIA'
  },
  {
    code_dpto:'5',
    value:'5756',
    text:'SONSON'
  },
  {
    code_dpto:'5',
    value:'5761',
    text:'SOPETRÁN'
  },
  {
    code_dpto:'5',
    value:'5789',
    text:'TÁMESIS'
  },
  {
    code_dpto:'5',
    value:'5790',
    text:'TARAZÁ'
  },
  {
    code_dpto:'5',
    value:'5792',
    text:'TARSO'
  },
  {
    code_dpto:'5',
    value:'5809',
    text:'TITIRIBÍ'
  },
  {
    code_dpto:'5',
    value:'5819',
    text:'TOLEDO'
  },
  {
    code_dpto:'5',
    value:'5837',
    text:'TURBO'
  },
  {
    code_dpto:'5',
    value:'5842',
    text:'URAMITA'
  },
  {
    code_dpto:'5',
    value:'5847',
    text:'URRAO'
  },
  {
    code_dpto:'5',
    value:'5854',
    text:'VALDIVIA'
  },
  {
    code_dpto:'5',
    value:'5856',
    text:'VALPARAÍSO'
  },
  {
    code_dpto:'5',
    value:'5858',
    text:'VEGACHÍ'
  },
  {
    code_dpto:'5',
    value:'5861',
    text:'VENECIA'
  },
  {
    code_dpto:'5',
    value:'5873',
    text:'VIGÍA DEL FUERTE'
  },
  {
    code_dpto:'5',
    value:'5885',
    text:'YALÍ'
  },
  {
    code_dpto:'5',
    value:'5887',
    text:'YARUMAL'
  },
  {
    code_dpto:'5',
    value:'5890',
    text:'YOLOMBÓ'
  },
  {
    code_dpto:'5',
    value:'5893',
    text:'YONDÓ'
  },
  {
    code_dpto:'5',
    value:'5895',
    text:'ZARAGOZA'
  },
  {
    code_dpto:'8',
    value:'8001',
    text:'BARRANQUILLA'
  },
  {
    code_dpto:'8',
    value:'8078',
    text:'BARANOA'
  },
  {
    code_dpto:'8',
    value:'8137',
    text:'CAMPO DE LA CRUZ'
  },
  {
    code_dpto:'8',
    value:'8141',
    text:'CANDELARIA'
  },
  {
    code_dpto:'8',
    value:'8296',
    text:'GALAPA'
  },
  {
    code_dpto:'8',
    value:'8372',
    text:'JUAN DE ACOSTA'
  },
  {
    code_dpto:'8',
    value:'8421',
    text:'LURUACO'
  },
  {
    code_dpto:'8',
    value:'8433',
    text:'MALAMBO'
  },
  {
    code_dpto:'8',
    value:'8436',
    text:'MANATÍ'
  },
  {
    code_dpto:'8',
    value:'8520',
    text:'PALMAR DE VARELA'
  },
  {
    code_dpto:'8',
    value:'8549',
    text:'PIOJÓ'
  },
  {
    code_dpto:'8',
    value:'8558',
    text:'POLONUEVO'
  },
  {
    code_dpto:'8',
    value:'8560',
    text:'PONEDERA'
  },
  {
    code_dpto:'8',
    value:'8573',
    text:'PUERTO COLOMBIA'
  },
  {
    code_dpto:'8',
    value:'8606',
    text:'REPELÓN'
  },
  {
    code_dpto:'8',
    value:'8634',
    text:'SABANAGRANDE'
  },
  {
    code_dpto:'8',
    value:'8638',
    text:'SABANALARGA'
  },
  {
    code_dpto:'8',
    value:'8675',
    text:'SANTA LUCÍA'
  },
  {
    code_dpto:'8',
    value:'8685',
    text:'SANTO TOMÁS'
  },
  {
    code_dpto:'8',
    value:'8758',
    text:'SOLEDAD'
  },
  {
    code_dpto:'8',
    value:'8770',
    text:'SUAN'
  },
  {
    code_dpto:'8',
    value:'8832',
    text:'TUBARÁ'
  },
  {
    code_dpto:'8',
    value:'8849',
    text:'USIACURÍ'
  },
  {
    code_dpto:'11',
    value:'11001',
    text:'BOGOTÁ'
  },
  {
    code_dpto:'13',
    value:'13001',
    text:'CARTAGENA'
  },
  {
    code_dpto:'13',
    value:'13006',
    text:'ACHÍ'
  },
  {
    code_dpto:'13',
    value:'13030',
    text:'ALTOS DEL ROSARIO'
  },
  {
    code_dpto:'13',
    value:'13042',
    text:'ARENAL'
  },
  {
    code_dpto:'13',
    value:'13052',
    text:'ARJONA'
  },
  {
    code_dpto:'13',
    value:'13062',
    text:'ARROYOHONDO'
  },
  {
    code_dpto:'13',
    value:'13074',
    text:'BARRANCO DE LOBA'
  },
  {
    code_dpto:'13',
    value:'13140',
    text:'CALAMAR'
  },
  {
    code_dpto:'13',
    value:'13160',
    text:'CANTAGALLO'
  },
  {
    code_dpto:'13',
    value:'13188',
    text:'CICUCO'
  },
  {
    code_dpto:'13',
    value:'13212',
    text:'CÓRDOBA'
  },
  {
    code_dpto:'13',
    value:'13222',
    text:'CLEMENCIA'
  },
  {
    code_dpto:'13',
    value:'13244',
    text:'EL CARMEN DE BOLÍVAR'
  },
  {
    code_dpto:'13',
    value:'13248',
    text:'EL GUAMO'
  },
  {
    code_dpto:'13',
    value:'13268',
    text:'EL PEÑÓN'
  },
  {
    code_dpto:'13',
    value:'13300',
    text:'HATILLO DE LOBA'
  },
  {
    code_dpto:'13',
    value:'13430',
    text:'MAGANGUÉ'
  },
  {
    code_dpto:'13',
    value:'13433',
    text:'MAHATES'
  },
  {
    code_dpto:'13',
    value:'13440',
    text:'MARGARITA'
  },
  {
    code_dpto:'13',
    value:'13442',
    text:'MARÍA LA BAJA'
  },
  {
    code_dpto:'13',
    value:'13458',
    text:'MONTECRISTO'
  },
  {
    code_dpto:'13',
    value:'13468',
    text:'MOMPÓS'
  },
  {
    code_dpto:'13',
    value:'13473',
    text:'MORALES'
  },
  {
    code_dpto:'13',
    value:'13549',
    text:'PINILLOS'
  },
  {
    code_dpto:'13',
    value:'13580',
    text:'REGIDOR'
  },
  {
    code_dpto:'13',
    value:'13600',
    text:'RÍO VIEJO'
  },
  {
    code_dpto:'13',
    value:'13620',
    text:'SAN CRISTÓBAL'
  },
  {
    code_dpto:'13',
    value:'13647',
    text:'SAN ESTANISLAO'
  },
  {
    code_dpto:'13',
    value:'13650',
    text:'SAN FERNANDO'
  },
  {
    code_dpto:'13',
    value:'13654',
    text:'SAN JACINTO'
  },
  {
    code_dpto:'13',
    value:'13655',
    text:'SAN JACINTO DEL CAUCA'
  },
  {
    code_dpto:'13',
    value:'13657',
    text:'SAN JUAN NEPOMUCENO'
  },
  {
    code_dpto:'13',
    value:'13667',
    text:'SAN MARTÍN DE LOBA'
  },
  {
    code_dpto:'13',
    value:'13670',
    text:'SAN PABLO'
  },
  {
    code_dpto:'13',
    value:'13673',
    text:'SANTA CATALINA'
  },
  {
    code_dpto:'13',
    value:'13683',
    text:'SANTA ROSA'
  },
  {
    code_dpto:'13',
    value:'13688',
    text:'SANTA ROSA DEL SUR'
  },
  {
    code_dpto:'13',
    value:'13744',
    text:'SIMITÍ'
  },
  {
    code_dpto:'13',
    value:'13760',
    text:'SOPLAVIENTO'
  },
  {
    code_dpto:'13',
    value:'13780',
    text:'TALAIGUA NUEVO'
  },
  {
    code_dpto:'13',
    value:'13810',
    text:'TIQUISIO'
  },
  {
    code_dpto:'13',
    value:'13836',
    text:'TURBACO'
  },
  {
    code_dpto:'13',
    value:'13838',
    text:'TURBANÁ'
  },
  {
    code_dpto:'13',
    value:'13873',
    text:'VILLANUEVA'
  },
  {
    code_dpto:'13',
    value:'13894',
    text:'ZAMBRANO'
  },
  {
    code_dpto:'15',
    value:'15001',
    text:'TUNJA'
  },
  {
    code_dpto:'15',
    value:'15022',
    text:'ALMEIDA'
  },
  {
    code_dpto:'15',
    value:'15047',
    text:'AQUITANIA'
  },
  {
    code_dpto:'15',
    value:'15051',
    text:'ARCABUCO'
  },
  {
    code_dpto:'15',
    value:'15087',
    text:'BELÉN'
  },
  {
    code_dpto:'15',
    value:'15090',
    text:'BERBEO'
  },
  {
    code_dpto:'15',
    value:'15092',
    text:'BETÉITIVA'
  },
  {
    code_dpto:'15',
    value:'15097',
    text:'BOAVITA'
  },
  {
    code_dpto:'15',
    value:'15104',
    text:'BOYACÁ'
  },
  {
    code_dpto:'15',
    value:'15106',
    text:'BRICEÑO'
  },
  {
    code_dpto:'15',
    value:'15109',
    text:'BUENAVISTA'
  },
  {
    code_dpto:'15',
    value:'15114',
    text:'BUSBANZÁ'
  },
  {
    code_dpto:'15',
    value:'15131',
    text:'CALDAS'
  },
  {
    code_dpto:'15',
    value:'15135',
    text:'CAMPOHERMOSO'
  },
  {
    code_dpto:'15',
    value:'15162',
    text:'CERINZA'
  },
  {
    code_dpto:'15',
    value:'15172',
    text:'CHINAVITA'
  },
  {
    code_dpto:'15',
    value:'15176',
    text:'CHIQUINQUIRÁ'
  },
  {
    code_dpto:'15',
    value:'15180',
    text:'CHISCAS'
  },
  {
    code_dpto:'15',
    value:'15183',
    text:'CHITA'
  },
  {
    code_dpto:'15',
    value:'15185',
    text:'CHITARAQUE'
  },
  {
    code_dpto:'15',
    value:'15187',
    text:'CHIVATÁ'
  },
  {
    code_dpto:'15',
    value:'15189',
    text:'CIÉNEGA'
  },
  {
    code_dpto:'15',
    value:'15204',
    text:'CÓMBITA'
  },
  {
    code_dpto:'15',
    value:'15212',
    text:'COPER'
  },
  {
    code_dpto:'15',
    value:'15215',
    text:'CORRALES'
  },
  {
    code_dpto:'15',
    value:'15218',
    text:'COVARACHÍA'
  },
  {
    code_dpto:'15',
    value:'15223',
    text:'CUBARÁ'
  },
  {
    code_dpto:'15',
    value:'15224',
    text:'CUCAITA'
  },
  {
    code_dpto:'15',
    value:'15226',
    text:'CUÍTIVA'
  },
  {
    code_dpto:'15',
    value:'15232',
    text:'CHÍQUIZA'
  },
  {
    code_dpto:'15',
    value:'15236',
    text:'CHIVOR'
  },
  {
    code_dpto:'15',
    value:'15238',
    text:'DUITAMA'
  },
  {
    code_dpto:'15',
    value:'15244',
    text:'EL COCUY'
  },
  {
    code_dpto:'15',
    value:'15248',
    text:'EL ESPINO'
  },
  {
    code_dpto:'15',
    value:'15272',
    text:'FIRAVITOBA'
  },
  {
    code_dpto:'15',
    value:'15276',
    text:'FLORESTA'
  },
  {
    code_dpto:'15',
    value:'15293',
    text:'GACHANTIVÁ'
  },
  {
    code_dpto:'15',
    value:'15296',
    text:'GAMEZA'
  },
  {
    code_dpto:'15',
    value:'15299',
    text:'GARAGOA'
  },
  {
    code_dpto:'15',
    value:'15317',
    text:'GUACAMAYAS'
  },
  {
    code_dpto:'15',
    value:'15322',
    text:'GUATEQUE'
  },
  {
    code_dpto:'15',
    value:'15325',
    text:'GUAYATÁ'
  },
  {
    code_dpto:'15',
    value:'15332',
    text:'GÜICÁN'
  },
  {
    code_dpto:'15',
    value:'15362',
    text:'IZA'
  },
  {
    code_dpto:'15',
    value:'15367',
    text:'JENESANO'
  },
  {
    code_dpto:'15',
    value:'15368',
    text:'JERICÓ'
  },
  {
    code_dpto:'15',
    value:'15377',
    text:'LABRANZAGRANDE'
  },
  {
    code_dpto:'15',
    value:'15380',
    text:'LA CAPILLA'
  },
  {
    code_dpto:'15',
    value:'15401',
    text:'LA VICTORIA'
  },
  {
    code_dpto:'15',
    value:'15403',
    text:'LA UVITA'
  },
  {
    code_dpto:'15',
    value:'15407',
    text:'VILLA DE LEYVA'
  },
  {
    code_dpto:'15',
    value:'15425',
    text:'MACANAL'
  },
  {
    code_dpto:'15',
    value:'15442',
    text:'MARIPÍ'
  },
  {
    code_dpto:'15',
    value:'15455',
    text:'MIRAFLORES'
  },
  {
    code_dpto:'15',
    value:'15464',
    text:'MONGUA'
  },
  {
    code_dpto:'15',
    value:'15466',
    text:'MONGUÍ'
  },
  {
    code_dpto:'15',
    value:'15469',
    text:'MONIQUIRÁ'
  },
  {
    code_dpto:'15',
    value:'15476',
    text:'MOTAVITA'
  },
  {
    code_dpto:'15',
    value:'15480',
    text:'MUZO'
  },
  {
    code_dpto:'15',
    value:'15491',
    text:'NOBSA'
  },
  {
    code_dpto:'15',
    value:'15494',
    text:'NUEVO COLÓN'
  },
  {
    code_dpto:'15',
    value:'15500',
    text:'OICATÁ'
  },
  {
    code_dpto:'15',
    value:'15507',
    text:'OTANCHE'
  },
  {
    code_dpto:'15',
    value:'15511',
    text:'PACHAVITA'
  },
  {
    code_dpto:'15',
    value:'15514',
    text:'PÁEZ'
  },
  {
    code_dpto:'15',
    value:'15516',
    text:'PAIPA'
  },
  {
    code_dpto:'15',
    value:'15518',
    text:'PAJARITO'
  },
  {
    code_dpto:'15',
    value:'15522',
    text:'PANQUEBA'
  },
  {
    code_dpto:'15',
    value:'15531',
    text:'PAUNA'
  },
  {
    code_dpto:'15',
    value:'15533',
    text:'PAYA'
  },
  {
    code_dpto:'15',
    value:'15537',
    text:'PAZ DE RÍO'
  },
  {
    code_dpto:'15',
    value:'15542',
    text:'PESCA'
  },
  {
    code_dpto:'15',
    value:'15550',
    text:'PISBA'
  },
  {
    code_dpto:'15',
    value:'15572',
    text:'PUERTO BOYACÁ'
  },
  {
    code_dpto:'15',
    value:'15580',
    text:'QUÍPAMA'
  },
  {
    code_dpto:'15',
    value:'15599',
    text:'RAMIRIQUÍ'
  },
  {
    code_dpto:'15',
    value:'15600',
    text:'RÁQUIRA'
  },
  {
    code_dpto:'15',
    value:'15621',
    text:'RONDÓN'
  },
  {
    code_dpto:'15',
    value:'15632',
    text:'SABOYÁ'
  },
  {
    code_dpto:'15',
    value:'15638',
    text:'SÁCHICA'
  },
  {
    code_dpto:'15',
    value:'15646',
    text:'SAMACÁ'
  },
  {
    code_dpto:'15',
    value:'15660',
    text:'SAN EDUARDO'
  },
  {
    code_dpto:'15',
    value:'15664',
    text:'SAN JOSÉ DE PARE'
  },
  {
    code_dpto:'15',
    value:'15667',
    text:'SAN LUIS DE GACENO'
  },
  {
    code_dpto:'15',
    value:'15673',
    text:'SAN MATEO'
  },
  {
    code_dpto:'15',
    value:'15676',
    text:'SAN MIGUEL DE SEMA'
  },
  {
    code_dpto:'15',
    value:'15681',
    text:'SAN PABLO DE BORBUR'
  },
  {
    code_dpto:'15',
    value:'15686',
    text:'SANTANA'
  },
  {
    code_dpto:'15',
    value:'15690',
    text:'SANTA MARÍA'
  },
  {
    code_dpto:'15',
    value:'15693',
    text:'SANTA ROSA DE VITERBO'
  },
  {
    code_dpto:'15',
    value:'15696',
    text:'SANTA SOFÍA'
  },
  {
    code_dpto:'15',
    value:'15720',
    text:'SATIVANORTE'
  },
  {
    code_dpto:'15',
    value:'15723',
    text:'SATIVASUR'
  },
  {
    code_dpto:'15',
    value:'15740',
    text:'SIACHOQUE'
  },
  {
    code_dpto:'15',
    value:'15753',
    text:'SOATÁ'
  },
  {
    code_dpto:'15',
    value:'15755',
    text:'SOCOTÁ'
  },
  {
    code_dpto:'15',
    value:'15757',
    text:'SOCHA'
  },
  {
    code_dpto:'15',
    value:'15759',
    text:'SOGAMOSO'
  },
  {
    code_dpto:'15',
    value:'15761',
    text:'SOMONDOCO'
  },
  {
    code_dpto:'15',
    value:'15762',
    text:'SORA'
  },
  {
    code_dpto:'15',
    value:'15763',
    text:'SOTAQUIRÁ'
  },
  {
    code_dpto:'15',
    value:'15764',
    text:'SORACÁ'
  },
  {
    code_dpto:'15',
    value:'15774',
    text:'SUSACÓN'
  },
  {
    code_dpto:'15',
    value:'15776',
    text:'SUTAMARCHÁN'
  },
  {
    code_dpto:'15',
    value:'15778',
    text:'SUTATENZA'
  },
  {
    code_dpto:'15',
    value:'15790',
    text:'TASCO'
  },
  {
    code_dpto:'15',
    value:'15798',
    text:'TENZA'
  },
  {
    code_dpto:'15',
    value:'15804',
    text:'TIBANÁ'
  },
  {
    code_dpto:'15',
    value:'15806',
    text:'TIBASOSA'
  },
  {
    code_dpto:'15',
    value:'15808',
    text:'TINJACÁ'
  },
  {
    code_dpto:'15',
    value:'15810',
    text:'TIPACOQUE'
  },
  {
    code_dpto:'15',
    value:'15814',
    text:'TOCA'
  },
  {
    code_dpto:'15',
    value:'15816',
    text:'TOGÜÍ'
  },
  {
    code_dpto:'15',
    value:'15820',
    text:'TÓPAGA'
  },
  {
    code_dpto:'15',
    value:'15822',
    text:'TOTA'
  },
  {
    code_dpto:'15',
    value:'15832',
    text:'TUNUNGUÁ'
  },
  {
    code_dpto:'15',
    value:'15835',
    text:'TURMEQUÉ'
  },
  {
    code_dpto:'15',
    value:'15837',
    text:'TUTA'
  },
  {
    code_dpto:'15',
    value:'15839',
    text:'TUTAZÁ'
  },
  {
    code_dpto:'15',
    value:'15842',
    text:'UMBITA'
  },
  {
    code_dpto:'15',
    value:'15861',
    text:'VENTAQUEMADA'
  },
  {
    code_dpto:'15',
    value:'15879',
    text:'VIRACACHÁ'
  },
  {
    code_dpto:'15',
    value:'15897',
    text:'ZETAQUIRA'
  },
  {
    code_dpto:'17',
    value:'17001',
    text:'MANIZALES'
  },
  {
    code_dpto:'17',
    value:'17013',
    text:'AGUADAS'
  },
  {
    code_dpto:'17',
    value:'17042',
    text:'ANSERMA'
  },
  {
    code_dpto:'17',
    value:'17050',
    text:'ARANZAZU'
  },
  {
    code_dpto:'17',
    value:'17088',
    text:'BELALCÁZAR'
  },
  {
    code_dpto:'17',
    value:'17174',
    text:'CHINCHINÁ'
  },
  {
    code_dpto:'17',
    value:'17272',
    text:'FILADELFIA'
  },
  {
    code_dpto:'17',
    value:'17380',
    text:'LA DORADA'
  },
  {
    code_dpto:'17',
    value:'17388',
    text:'LA MERCED'
  },
  {
    code_dpto:'17',
    value:'17433',
    text:'MANZANARES'
  },
  {
    code_dpto:'17',
    value:'17442',
    text:'MARMATO'
  },
  {
    code_dpto:'17',
    value:'17444',
    text:'MARQUETALIA'
  },
  {
    code_dpto:'17',
    value:'17446',
    text:'MARULANDA'
  },
  {
    code_dpto:'17',
    value:'17486',
    text:'NEIRA'
  },
  {
    code_dpto:'17',
    value:'17495',
    text:'NORCASIA'
  },
  {
    code_dpto:'17',
    value:'17513',
    text:'PÁCORA'
  },
  {
    code_dpto:'17',
    value:'17524',
    text:'PALESTINA'
  },
  {
    code_dpto:'17',
    value:'17541',
    text:'PENSILVANIA'
  },
  {
    code_dpto:'17',
    value:'17614',
    text:'RIOSUCIO'
  },
  {
    code_dpto:'17',
    value:'17616',
    text:'RISARALDA'
  },
  {
    code_dpto:'17',
    value:'17653',
    text:'SALAMINA'
  },
  {
    code_dpto:'17',
    value:'17662',
    text:'SAMANÁ'
  },
  {
    code_dpto:'17',
    value:'17665',
    text:'SAN JOSÉ'
  },
  {
    code_dpto:'17',
    value:'17777',
    text:'SUPÍA'
  },
  {
    code_dpto:'17',
    value:'17867',
    text:'VICTORIA'
  },
  {
    code_dpto:'17',
    value:'17873',
    text:'VILLAMARÍA'
  },
  {
    code_dpto:'17',
    value:'17877',
    text:'VITERBO'
  },
  {
    code_dpto:'18',
    value:'18001',
    text:'FLORENCIA'
  },
  {
    code_dpto:'18',
    value:'18029',
    text:'ALBANIA'
  },
  {
    code_dpto:'18',
    value:'18094',
    text:'BELÉN DE LOS ANDAQUIES'
  },
  {
    code_dpto:'18',
    value:'18150',
    text:'CARTAGENA DEL CHAIRÁ'
  },
  {
    code_dpto:'18',
    value:'18205',
    text:'CURILLO'
  },
  {
    code_dpto:'18',
    value:'18247',
    text:'EL DONCELLO'
  },
  {
    code_dpto:'18',
    value:'18256',
    text:'EL PAUJIL'
  },
  {
    code_dpto:'18',
    value:'18410',
    text:'LA MONTAÑITA'
  },
  {
    code_dpto:'18',
    value:'18460',
    text:'MILÁN'
  },
  {
    code_dpto:'18',
    value:'18479',
    text:'MORELIA'
  },
  {
    code_dpto:'18',
    value:'18592',
    text:'PUERTO RICO'
  },
  {
    code_dpto:'18',
    value:'18610',
    text:'SAN JOSÉ DEL FRAGUA'
  },
  {
    code_dpto:'18',
    value:'18753',
    text:'SAN VICENTE DEL CAGUÁN'
  },
  {
    code_dpto:'18',
    value:'18756',
    text:'SOLANO'
  },
  {
    code_dpto:'18',
    value:'18785',
    text:'SOLITA'
  },
  {
    code_dpto:'18',
    value:'18860',
    text:'VALPARAÍSO'
  },
  {
    code_dpto:'19',
    value:'19001',
    text:'POPAYÁN'
  },
  {
    code_dpto:'19',
    value:'19022',
    text:'ALMAGUER'
  },
  {
    code_dpto:'19',
    value:'19050',
    text:'ARGELIA'
  },
  {
    code_dpto:'19',
    value:'19075',
    text:'BALBOA'
  },
  {
    code_dpto:'19',
    value:'19100',
    text:'BOLÍVAR'
  },
  {
    code_dpto:'19',
    value:'19110',
    text:'BUENOS AIRES'
  },
  {
    code_dpto:'19',
    value:'19130',
    text:'CAJIBÍO'
  },
  {
    code_dpto:'19',
    value:'19137',
    text:'CALDONO'
  },
  {
    code_dpto:'19',
    value:'19142',
    text:'CALOTO'
  },
  {
    code_dpto:'19',
    value:'19212',
    text:'CORINTO'
  },
  {
    code_dpto:'19',
    value:'19256',
    text:'EL TAMBO'
  },
  {
    code_dpto:'19',
    value:'19290',
    text:'FLORENCIA'
  },
  {
    code_dpto:'19',
    value:'19318',
    text:'GUAPI'
  },
  {
    code_dpto:'19',
    value:'19355',
    text:'INZÁ'
  },
  {
    code_dpto:'19',
    value:'19364',
    text:'JAMBALÓ'
  },
  {
    code_dpto:'19',
    value:'19392',
    text:'LA SIERRA'
  },
  {
    code_dpto:'19',
    value:'19397',
    text:'LA VEGA'
  },
  {
    code_dpto:'19',
    value:'19418',
    text:'LÓPEZ'
  },
  {
    code_dpto:'19',
    value:'19450',
    text:'MERCADERES'
  },
  {
    code_dpto:'19',
    value:'19455',
    text:'MIRANDA'
  },
  {
    code_dpto:'19',
    value:'19473',
    text:'MORALES'
  },
  {
    code_dpto:'19',
    value:'19513',
    text:'PADILLA'
  },
  {
    code_dpto:'19',
    value:'19517',
    text:'PAEZ'
  },
  {
    code_dpto:'19',
    value:'19532',
    text:'PATÍA'
  },
  {
    code_dpto:'19',
    value:'19533',
    text:'PIAMONTE'
  },
  {
    code_dpto:'19',
    value:'19548',
    text:'PIENDAMÓ'
  },
  {
    code_dpto:'19',
    value:'19573',
    text:'PUERTO TEJADA'
  },
  {
    code_dpto:'19',
    value:'19585',
    text:'PURACÉ'
  },
  {
    code_dpto:'19',
    value:'19622',
    text:'ROSAS'
  },
  {
    code_dpto:'19',
    value:'19693',
    text:'SAN SEBASTIÁN'
  },
  {
    code_dpto:'19',
    value:'19698',
    text:'SANTANDER DE QUILICHAO'
  },
  {
    code_dpto:'19',
    value:'19701',
    text:'SANTA ROSA'
  },
  {
    code_dpto:'19',
    value:'19743',
    text:'SILVIA'
  },
  {
    code_dpto:'19',
    value:'19760',
    text:'SOTARA'
  },
  {
    code_dpto:'19',
    value:'19780',
    text:'SUÁREZ'
  },
  {
    code_dpto:'19',
    value:'19785',
    text:'SUCRE'
  },
  {
    code_dpto:'19',
    value:'19807',
    text:'TIMBÍO'
  },
  {
    code_dpto:'19',
    value:'19809',
    text:'TIMBIQUÍ'
  },
  {
    code_dpto:'19',
    value:'19821',
    text:'TORIBIO'
  },
  {
    code_dpto:'19',
    value:'19824',
    text:'TOTORÓ'
  },
  {
    code_dpto:'19',
    value:'19845',
    text:'VILLA RICA'
  },
  {
    code_dpto:'20',
    value:'20001',
    text:'VALLEDUPAR'
  },
  {
    code_dpto:'20',
    value:'20011',
    text:'AGUACHICA'
  },
  {
    code_dpto:'20',
    value:'20013',
    text:'AGUSTÍN CODAZZI'
  },
  {
    code_dpto:'20',
    value:'20032',
    text:'ASTREA'
  },
  {
    code_dpto:'20',
    value:'20045',
    text:'BECERRIL'
  },
  {
    code_dpto:'20',
    value:'20060',
    text:'BOSCONIA'
  },
  {
    code_dpto:'20',
    value:'20175',
    text:'CHIMICHAGUA'
  },
  {
    code_dpto:'20',
    value:'20178',
    text:'CHIRIGUANÁ'
  },
  {
    code_dpto:'20',
    value:'20228',
    text:'CURUMANÍ'
  },
  {
    code_dpto:'20',
    value:'20238',
    text:'EL COPEY'
  },
  {
    code_dpto:'20',
    value:'20250',
    text:'EL PASO'
  },
  {
    code_dpto:'20',
    value:'20295',
    text:'GAMARRA'
  },
  {
    code_dpto:'20',
    value:'20310',
    text:'GONZÁLEZ'
  },
  {
    code_dpto:'20',
    value:'20383',
    text:'LA GLORIA'
  },
  {
    code_dpto:'20',
    value:'20400',
    text:'LA JAGUA DE IBIRICO'
  },
  {
    code_dpto:'20',
    value:'20443',
    text:'MANAURE'
  },
  {
    code_dpto:'20',
    value:'20517',
    text:'PAILITAS'
  },
  {
    code_dpto:'20',
    value:'20550',
    text:'PELAYA'
  },
  {
    code_dpto:'20',
    value:'20570',
    text:'PUEBLO BELLO'
  },
  {
    code_dpto:'20',
    value:'20614',
    text:'RÍO DE ORO'
  },
  {
    code_dpto:'20',
    value:'20621',
    text:'LA PAZ'
  },
  {
    code_dpto:'20',
    value:'20710',
    text:'SAN ALBERTO'
  },
  {
    code_dpto:'20',
    value:'20750',
    text:'SAN DIEGO'
  },
  {
    code_dpto:'20',
    value:'20770',
    text:'SAN MARTÍN'
  },
  {
    code_dpto:'20',
    value:'20787',
    text:'TAMALAMEQUE'
  },
  {
    code_dpto:'23',
    value:'23001',
    text:'MONTERÍA'
  },
  {
    code_dpto:'23',
    value:'23068',
    text:'AYAPEL'
  },
  {
    code_dpto:'23',
    value:'23079',
    text:'BUENAVISTA'
  },
  {
    code_dpto:'23',
    value:'23090',
    text:'CANALETE'
  },
  {
    code_dpto:'23',
    value:'23162',
    text:'CERETÉ'
  },
  {
    code_dpto:'23',
    value:'23168',
    text:'CHIMÁ'
  },
  {
    code_dpto:'23',
    value:'23182',
    text:'CHINÚ'
  },
  {
    code_dpto:'23',
    value:'23189',
    text:'CIÉNAGA DE ORO'
  },
  {
    code_dpto:'23',
    value:'23300',
    text:'COTORRA'
  },
  {
    code_dpto:'23',
    value:'23350',
    text:'LA APARTADA'
  },
  {
    code_dpto:'23',
    value:'23417',
    text:'LORICA'
  },
  {
    code_dpto:'23',
    value:'23419',
    text:'LOS CÓRDOBAS'
  },
  {
    code_dpto:'23',
    value:'23464',
    text:'MOMIL'
  },
  {
    code_dpto:'23',
    value:'23466',
    text:'MONTELÍBANO'
  },
  {
    code_dpto:'23',
    value:'23500',
    text:'MOÑITOS'
  },
  {
    code_dpto:'23',
    value:'23555',
    text:'PLANETA RICA'
  },
  {
    code_dpto:'23',
    value:'23570',
    text:'PUEBLO NUEVO'
  },
  {
    code_dpto:'23',
    value:'23574',
    text:'PUERTO ESCONDIDO'
  },
  {
    code_dpto:'23',
    value:'23580',
    text:'PUERTO LIBERTADOR'
  },
  {
    code_dpto:'23',
    value:'23586',
    text:'PURÍSIMA'
  },
  {
    code_dpto:'23',
    value:'23660',
    text:'SAHAGÚN'
  },
  {
    code_dpto:'23',
    value:'23670',
    text:'SAN ANDRÉS SOTAVENTO'
  },
  {
    code_dpto:'23',
    value:'23672',
    text:'SAN ANTERO'
  },
  {
    code_dpto:'23',
    value:'23675',
    text:'SAN BERNARDO DEL VIENTO'
  },
  {
    code_dpto:'23',
    value:'23678',
    text:'SAN CARLOS'
  },
  {
    code_dpto:'23',
    value:'23686',
    text:'SAN PELAYO'
  },
  {
    code_dpto:'23',
    value:'23807',
    text:'TIERRALTA'
  },
  {
    code_dpto:'23',
    value:'23855',
    text:'VALENCIA'
  },
  {
    code_dpto:'25',
    value:'25001',
    text:'AGUA DE DIOS'
  },
  {
    code_dpto:'25',
    value:'25019',
    text:'ALBÁN'
  },
  {
    code_dpto:'25',
    value:'25035',
    text:'ANAPOIMA'
  },
  {
    code_dpto:'25',
    value:'25040',
    text:'ANOLAIMA'
  },
  {
    code_dpto:'25',
    value:'25053',
    text:'ARBELÁEZ'
  },
  {
    code_dpto:'25',
    value:'25086',
    text:'BELTRÁN'
  },
  {
    code_dpto:'25',
    value:'25095',
    text:'BITUIMA'
  },
  {
    code_dpto:'25',
    value:'25099',
    text:'BOJACÁ'
  },
  {
    code_dpto:'25',
    value:'25120',
    text:'CABRERA'
  },
  {
    code_dpto:'25',
    value:'25123',
    text:'CACHIPAY'
  },
  {
    code_dpto:'25',
    value:'25126',
    text:'CAJICÁ'
  },
  {
    code_dpto:'25',
    value:'25148',
    text:'CAPARRAPÍ'
  },
  {
    code_dpto:'25',
    value:'25151',
    text:'CAQUEZA'
  },
  {
    code_dpto:'25',
    value:'25154',
    text:'CARMEN DE CARUPA'
  },
  {
    code_dpto:'25',
    value:'25168',
    text:'CHAGUANÍ'
  },
  {
    code_dpto:'25',
    value:'25175',
    text:'CHÍA'
  },
  {
    code_dpto:'25',
    value:'25178',
    text:'CHIPAQUE'
  },
  {
    code_dpto:'25',
    value:'25181',
    text:'CHOACHÍ'
  },
  {
    code_dpto:'25',
    value:'25183',
    text:'CHOCONTÁ'
  },
  {
    code_dpto:'25',
    value:'25200',
    text:'COGUA'
  },
  {
    code_dpto:'25',
    value:'25214',
    text:'COTA'
  },
  {
    code_dpto:'25',
    value:'25224',
    text:'CUCUNUBÁ'
  },
  {
    code_dpto:'25',
    value:'25245',
    text:'EL COLEGIO'
  },
  {
    code_dpto:'25',
    value:'25258',
    text:'EL PEÑÓN'
  },
  {
    code_dpto:'25',
    value:'25260',
    text:'EL ROSAL'
  },
  {
    code_dpto:'25',
    value:'25269',
    text:'FACATATIVÁ'
  },
  {
    code_dpto:'25',
    value:'25279',
    text:'FOMEQUE'
  },
  {
    code_dpto:'25',
    value:'25281',
    text:'FOSCA'
  },
  {
    code_dpto:'25',
    value:'25286',
    text:'FUNZA'
  },
  {
    code_dpto:'25',
    value:'25288',
    text:'FÚQUENE'
  },
  {
    code_dpto:'25',
    value:'25290',
    text:'FUSAGASUGÁ'
  },
  {
    code_dpto:'25',
    value:'25293',
    text:'GACHALA'
  },
  {
    code_dpto:'25',
    value:'25295',
    text:'GACHANCIPÁ'
  },
  {
    code_dpto:'25',
    value:'25297',
    text:'GACHETÁ'
  },
  {
    code_dpto:'25',
    value:'25299',
    text:'GAMA'
  },
  {
    code_dpto:'25',
    value:'25307',
    text:'GIRARDOT'
  },
  {
    code_dpto:'25',
    value:'25312',
    text:'GRANADA'
  },
  {
    code_dpto:'25',
    value:'25317',
    text:'GUACHETÁ'
  },
  {
    code_dpto:'25',
    value:'25320',
    text:'GUADUAS'
  },
  {
    code_dpto:'25',
    value:'25322',
    text:'GUASCA'
  },
  {
    code_dpto:'25',
    value:'25324',
    text:'GUATAQUÍ'
  },
  {
    code_dpto:'25',
    value:'25326',
    text:'GUATAVITA'
  },
  {
    code_dpto:'25',
    value:'25328',
    text:'GUAYABAL DE SIQUIMA'
  },
  {
    code_dpto:'25',
    value:'25335',
    text:'GUAYABETAL'
  },
  {
    code_dpto:'25',
    value:'25339',
    text:'GUTIÉRREZ'
  },
  {
    code_dpto:'25',
    value:'25368',
    text:'JERUSALÉN'
  },
  {
    code_dpto:'25',
    value:'25372',
    text:'JUNÍN'
  },
  {
    code_dpto:'25',
    value:'25377',
    text:'LA CALERA'
  },
  {
    code_dpto:'25',
    value:'25386',
    text:'LA MESA'
  },
  {
    code_dpto:'25',
    value:'25394',
    text:'LA PALMA'
  },
  {
    code_dpto:'25',
    value:'25398',
    text:'LA PEÑA'
  },
  {
    code_dpto:'25',
    value:'25402',
    text:'LA VEGA'
  },
  {
    code_dpto:'25',
    value:'25407',
    text:'LENGUAZAQUE'
  },
  {
    code_dpto:'25',
    value:'25426',
    text:'MACHETA'
  },
  {
    code_dpto:'25',
    value:'25430',
    text:'MADRID'
  },
  {
    code_dpto:'25',
    value:'25436',
    text:'MANTA'
  },
  {
    code_dpto:'25',
    value:'25438',
    text:'MEDINA'
  },
  {
    code_dpto:'25',
    value:'25473',
    text:'MOSQUERA'
  },
  {
    code_dpto:'25',
    value:'25483',
    text:'NARIÑO'
  },
  {
    code_dpto:'25',
    value:'25486',
    text:'NEMOCÓN'
  },
  {
    code_dpto:'25',
    value:'25488',
    text:'NILO'
  },
  {
    code_dpto:'25',
    value:'25489',
    text:'NIMAIMA'
  },
  {
    code_dpto:'25',
    value:'25491',
    text:'NOCAIMA'
  },
  {
    code_dpto:'25',
    value:'25506',
    text:'VENECIA'
  },
  {
    code_dpto:'25',
    value:'25513',
    text:'PACHO'
  },
  {
    code_dpto:'25',
    value:'25518',
    text:'PAIME'
  },
  {
    code_dpto:'25',
    value:'25524',
    text:'PANDI'
  },
  {
    code_dpto:'25',
    value:'25530',
    text:'PARATEBUENO'
  },
  {
    code_dpto:'25',
    value:'25535',
    text:'PASCA'
  },
  {
    code_dpto:'25',
    value:'25572',
    text:'PUERTO SALGAR'
  },
  {
    code_dpto:'25',
    value:'25580',
    text:'PULÍ'
  },
  {
    code_dpto:'25',
    value:'25592',
    text:'QUEBRADANEGRA'
  },
  {
    code_dpto:'25',
    value:'25594',
    text:'QUETAME'
  },
  {
    code_dpto:'25',
    value:'25596',
    text:'QUIPILE'
  },
  {
    code_dpto:'25',
    value:'25599',
    text:'APULO'
  },
  {
    code_dpto:'25',
    value:'25612',
    text:'RICAURTE'
  },
  {
    code_dpto:'25',
    value:'25645',
    text:'SAN ANTONIO DEL TEQUENDAMA'
  },
  {
    code_dpto:'25',
    value:'25649',
    text:'SAN BERNARDO'
  },
  {
    code_dpto:'25',
    value:'25653',
    text:'SAN CAYETANO'
  },
  {
    code_dpto:'25',
    value:'25658',
    text:'SAN FRANCISCO'
  },
  {
    code_dpto:'25',
    value:'25662',
    text:'SAN JUAN DE RÍO SECO'
  },
  {
    code_dpto:'25',
    value:'25718',
    text:'SASAIMA'
  },
  {
    code_dpto:'25',
    value:'25736',
    text:'SESQUILÉ'
  },
  {
    code_dpto:'25',
    value:'25740',
    text:'SIBATÉ'
  },
  {
    code_dpto:'25',
    value:'25743',
    text:'SILVANIA'
  },
  {
    code_dpto:'25',
    value:'25745',
    text:'SIMIJACA'
  },
  {
    code_dpto:'25',
    value:'25754',
    text:'SOACHA'
  },
  {
    code_dpto:'25',
    value:'25758',
    text:'SOPÓ'
  },
  {
    code_dpto:'25',
    value:'25769',
    text:'SUBACHOQUE'
  },
  {
    code_dpto:'25',
    value:'25772',
    text:'SUESCA'
  },
  {
    code_dpto:'25',
    value:'25777',
    text:'SUPATÁ'
  },
  {
    code_dpto:'25',
    value:'25779',
    text:'SUSA'
  },
  {
    code_dpto:'25',
    value:'25781',
    text:'SUTATAUSA'
  },
  {
    code_dpto:'25',
    value:'25785',
    text:'TABIO'
  },
  {
    code_dpto:'25',
    value:'25793',
    text:'TAUSA'
  },
  {
    code_dpto:'25',
    value:'25797',
    text:'TENA'
  },
  {
    code_dpto:'25',
    value:'25799',
    text:'TENJO'
  },
  {
    code_dpto:'25',
    value:'25805',
    text:'TIBACUY'
  },
  {
    code_dpto:'25',
    value:'25807',
    text:'TIBIRITA'
  },
  {
    code_dpto:'25',
    value:'25815',
    text:'TOCAIMA'
  },
  {
    code_dpto:'25',
    value:'25817',
    text:'TOCANCIPÁ'
  },
  {
    code_dpto:'25',
    value:'25823',
    text:'TOPAIPÍ'
  },
  {
    code_dpto:'25',
    value:'25839',
    text:'UBALÁ'
  },
  {
    code_dpto:'25',
    value:'25841',
    text:'UBAQUE'
  },
  {
    code_dpto:'25',
    value:'25843',
    text:'VILLA DE SAN DIEGO DE UBATE'
  },
  {
    code_dpto:'25',
    value:'25845',
    text:'UNE'
  },
  {
    code_dpto:'25',
    value:'25851',
    text:'ÚTICA'
  },
  {
    code_dpto:'25',
    value:'25862',
    text:'VERGARA'
  },
  {
    code_dpto:'25',
    value:'25867',
    text:'VIANÍ'
  },
  {
    code_dpto:'25',
    value:'25871',
    text:'VILLAGÓMEZ'
  },
  {
    code_dpto:'25',
    value:'25873',
    text:'VILLAPINZÓN'
  },
  {
    code_dpto:'25',
    value:'25875',
    text:'VILLETA'
  },
  {
    code_dpto:'25',
    value:'25878',
    text:'VIOTÁ'
  },
  {
    code_dpto:'25',
    value:'25885',
    text:'YACOPÍ'
  },
  {
    code_dpto:'25',
    value:'25898',
    text:'ZIPACÓN'
  },
  {
    code_dpto:'25',
    value:'25899',
    text:'ZIPAQUIRÁ'
  },
  {
    code_dpto:'27',
    value:'27001',
    text:'QUIBDÓ'
  },
  {
    code_dpto:'27',
    value:'27006',
    text:'ACANDÍ'
  },
  {
    code_dpto:'27',
    value:'27025',
    text:'ALTO BAUDO'
  },
  {
    code_dpto:'27',
    value:'27050',
    text:'ATRATO'
  },
  {
    code_dpto:'27',
    value:'27073',
    text:'BAGADÓ'
  },
  {
    code_dpto:'27',
    value:'27075',
    text:'BAHÍA SOLANO'
  },
  {
    code_dpto:'27',
    value:'27077',
    text:'BAJO BAUDÓ'
  },
  {
    code_dpto:'27',
    value:'27086',
    text:'BELÉN DE BAJIRÁ'
  },
  {
    code_dpto:'27',
    value:'27099',
    text:'BOJAYA'
  },
  {
    code_dpto:'27',
    value:'27135',
    text:'EL CANTÓN DEL SAN PABLO'
  },
  {
    code_dpto:'27',
    value:'27150',
    text:'CARMEN DEL DARIEN'
  },
  {
    code_dpto:'27',
    value:'27160',
    text:'CÉRTEGUI'
  },
  {
    code_dpto:'27',
    value:'27205',
    text:'CONDOTO'
  },
  {
    code_dpto:'27',
    value:'27245',
    text:'EL CARMEN DE ATRATO'
  },
  {
    code_dpto:'27',
    value:'27250',
    text:'EL LITORAL DEL SAN JUAN'
  },
  {
    code_dpto:'27',
    value:'27361',
    text:'ISTMINA'
  },
  {
    code_dpto:'27',
    value:'27372',
    text:'JURADÓ'
  },
  {
    code_dpto:'27',
    value:'27413',
    text:'LLORÓ'
  },
  {
    code_dpto:'27',
    value:'27425',
    text:'MEDIO ATRATO'
  },
  {
    code_dpto:'27',
    value:'27430',
    text:'MEDIO BAUDÓ'
  },
  {
    code_dpto:'27',
    value:'27450',
    text:'MEDIO SAN JUAN'
  },
  {
    code_dpto:'27',
    value:'27491',
    text:'NÓVITA'
  },
  {
    code_dpto:'27',
    value:'27495',
    text:'NUQUÍ'
  },
  {
    code_dpto:'27',
    value:'27580',
    text:'RÍO IRO'
  },
  {
    code_dpto:'27',
    value:'27600',
    text:'RÍO QUITO'
  },
  {
    code_dpto:'27',
    value:'27615',
    text:'RIOSUCIO'
  },
  {
    code_dpto:'27',
    value:'27660',
    text:'SAN JOSÉ DEL PALMAR'
  },
  {
    code_dpto:'27',
    value:'27745',
    text:'SIPÍ'
  },
  {
    code_dpto:'27',
    value:'27787',
    text:'TADÓ'
  },
  {
    code_dpto:'27',
    value:'27800',
    text:'UNGUÍA'
  },
  {
    code_dpto:'27',
    value:'27810',
    text:'UNIÓN PAtextRICANA'
  },
  {
    code_dpto:'41',
    value:'41001',
    text:'NEIVA'
  },
  {
    code_dpto:'41',
    value:'41006',
    text:'ACEVEDO'
  },
  {
    code_dpto:'41',
    value:'41013',
    text:'AGRADO'
  },
  {
    code_dpto:'41',
    value:'41016',
    text:'AIPE'
  },
  {
    code_dpto:'41',
    value:'41020',
    text:'ALGECIRAS'
  },
  {
    code_dpto:'41',
    value:'41026',
    text:'ALTAMIRA'
  },
  {
    code_dpto:'41',
    value:'41078',
    text:'BARAYA'
  },
  {
    code_dpto:'41',
    value:'41132',
    text:'CAMPOALEGRE'
  },
  {
    code_dpto:'41',
    value:'41206',
    text:'COLOMBIA'
  },
  {
    code_dpto:'41',
    value:'41244',
    text:'ELÍAS'
  },
  {
    code_dpto:'41',
    value:'41298',
    text:'GARZÓN'
  },
  {
    code_dpto:'41',
    value:'41306',
    text:'GIGANTE'
  },
  {
    code_dpto:'41',
    value:'41319',
    text:'GUADALUPE'
  },
  {
    code_dpto:'41',
    value:'41349',
    text:'HOBO'
  },
  {
    code_dpto:'41',
    value:'41357',
    text:'IQUIRA'
  },
  {
    code_dpto:'41',
    value:'41359',
    text:'ISNOS'
  },
  {
    code_dpto:'41',
    value:'41378',
    text:'LA ARGENTINA'
  },
  {
    code_dpto:'41',
    value:'41396',
    text:'LA PLATA'
  },
  {
    code_dpto:'41',
    value:'41483',
    text:'NÁTAGA'
  },
  {
    code_dpto:'41',
    value:'41503',
    text:'OPORAPA'
  },
  {
    code_dpto:'41',
    value:'41518',
    text:'PAICOL'
  },
  {
    code_dpto:'41',
    value:'41524',
    text:'PALERMO'
  },
  {
    code_dpto:'41',
    value:'41530',
    text:'PALESTINA'
  },
  {
    code_dpto:'41',
    value:'41548',
    text:'PITAL'
  },
  {
    code_dpto:'41',
    value:'41551',
    text:'PITALITO'
  },
  {
    code_dpto:'41',
    value:'41615',
    text:'RIVERA'
  },
  {
    code_dpto:'41',
    value:'41660',
    text:'SALADOBLANCO'
  },
  {
    code_dpto:'41',
    value:'41668',
    text:'SAN AGUSTÍN'
  },
  {
    code_dpto:'41',
    value:'41676',
    text:'SANTA MARÍA'
  },
  {
    code_dpto:'41',
    value:'41770',
    text:'SUAZA'
  },
  {
    code_dpto:'41',
    value:'41791',
    text:'TARQUI'
  },
  {
    code_dpto:'41',
    value:'41797',
    text:'TESALIA'
  },
  {
    code_dpto:'41',
    value:'41799',
    text:'TELLO'
  },
  {
    code_dpto:'41',
    value:'41801',
    text:'TERUEL'
  },
  {
    code_dpto:'41',
    value:'41807',
    text:'TIMANÁ'
  },
  {
    code_dpto:'41',
    value:'41872',
    text:'VILLAVIEJA'
  },
  {
    code_dpto:'41',
    value:'41885',
    text:'YAGUARÁ'
  },
  {
    code_dpto:'44',
    value:'44001',
    text:'RIOHACHA'
  },
  {
    code_dpto:'44',
    value:'44035',
    text:'ALBANIA'
  },
  {
    code_dpto:'44',
    value:'44078',
    text:'BARRANCAS'
  },
  {
    code_dpto:'44',
    value:'44090',
    text:'DIBULLA'
  },
  {
    code_dpto:'44',
    value:'44098',
    text:'DISTRACCIÓN'
  },
  {
    code_dpto:'44',
    value:'44110',
    text:'EL MOLINO'
  },
  {
    code_dpto:'44',
    value:'44279',
    text:'FONSECA'
  },
  {
    code_dpto:'44',
    value:'44378',
    text:'HATONUEVO'
  },
  {
    code_dpto:'44',
    value:'44420',
    text:'LA JAGUA DEL PILAR'
  },
  {
    code_dpto:'44',
    value:'44430',
    text:'MAICAO'
  },
  {
    code_dpto:'44',
    value:'44560',
    text:'MANAURE'
  },
  {
    code_dpto:'44',
    value:'44650',
    text:'SAN JUAN DEL CESAR'
  },
  {
    code_dpto:'44',
    value:'44847',
    text:'URIBIA'
  },
  {
    code_dpto:'44',
    value:'44855',
    text:'URUMITA'
  },
  {
    code_dpto:'44',
    value:'44874',
    text:'VILLANUEVA'
  },
  {
    code_dpto:'47',
    value:'47001',
    text:'SANTA MARTA'
  },
  {
    code_dpto:'47',
    value:'47030',
    text:'ALGARROBO'
  },
  {
    code_dpto:'47',
    value:'47053',
    text:'ARACATACA'
  },
  {
    code_dpto:'47',
    value:'47058',
    text:'ARIGUANÍ'
  },
  {
    code_dpto:'47',
    value:'47161',
    text:'CERRO SAN ANTONIO'
  },
  {
    code_dpto:'47',
    value:'47170',
    text:'CHIBOLO'
  },
  {
    code_dpto:'47',
    value:'47189',
    text:'CIÉNAGA'
  },
  {
    code_dpto:'47',
    value:'47205',
    text:'CONCORDIA'
  },
  {
    code_dpto:'47',
    value:'47245',
    text:'EL BANCO'
  },
  {
    code_dpto:'47',
    value:'47258',
    text:'EL PIÑON'
  },
  {
    code_dpto:'47',
    value:'47268',
    text:'EL RETÉN'
  },
  {
    code_dpto:'47',
    value:'47288',
    text:'FUNDACIÓN'
  },
  {
    code_dpto:'47',
    value:'47318',
    text:'GUAMAL'
  },
  {
    code_dpto:'47',
    value:'47460',
    text:'NUEVA GRANADA'
  },
  {
    code_dpto:'47',
    value:'47541',
    text:'PEDRAZA'
  },
  {
    code_dpto:'47',
    value:'47545',
    text:'PIJIÑO DEL CARMEN'
  },
  {
    code_dpto:'47',
    value:'47551',
    text:'PIVIJAY'
  },
  {
    code_dpto:'47',
    value:'47555',
    text:'PLATO'
  },
  {
    code_dpto:'47',
    value:'47570',
    text:'PUEBLOVIEJO'
  },
  {
    code_dpto:'47',
    value:'47605',
    text:'REMOLINO'
  },
  {
    code_dpto:'47',
    value:'47660',
    text:'SABANAS DE SAN ANGEL'
  },
  {
    code_dpto:'47',
    value:'47675',
    text:'SALAMINA'
  },
  {
    code_dpto:'47',
    value:'47692',
    text:'SAN SEBASTIÁN DE BUENAVISTA'
  },
  {
    code_dpto:'47',
    value:'47703',
    text:'SAN ZENÓN'
  },
  {
    code_dpto:'47',
    value:'47707',
    text:'SANTA ANA'
  },
  {
    code_dpto:'47',
    value:'47720',
    text:'SANTA BÁRBARA DE PINTO'
  },
  {
    code_dpto:'47',
    value:'47745',
    text:'SITIONUEVO'
  },
  {
    code_dpto:'47',
    value:'47798',
    text:'TENERIFE'
  },
  {
    code_dpto:'47',
    value:'47960',
    text:'ZAPAYÁN'
  },
  {
    code_dpto:'47',
    value:'47980',
    text:'ZONA BANANERA'
  },
  {
    code_dpto:'50',
    value:'50001',
    text:'VILLAVICENCIO'
  },
  {
    code_dpto:'50',
    value:'50006',
    text:'ACACÍAS'
  },
  {
    code_dpto:'50',
    value:'50110',
    text:'BARRANCA DE UPÍA'
  },
  {
    code_dpto:'50',
    value:'50124',
    text:'CABUYARO'
  },
  {
    code_dpto:'50',
    value:'50150',
    text:'CASTILLA LA NUEVA'
  },
  {
    code_dpto:'50',
    value:'50223',
    text:'CUBARRAL'
  },
  {
    code_dpto:'50',
    value:'50226',
    text:'CUMARAL'
  },
  {
    code_dpto:'50',
    value:'50245',
    text:'EL CALVARIO'
  },
  {
    code_dpto:'50',
    value:'50251',
    text:'EL CASTILLO'
  },
  {
    code_dpto:'50',
    value:'50270',
    text:'EL DORADO'
  },
  {
    code_dpto:'50',
    value:'50287',
    text:'FUENTE DE ORO'
  },
  {
    code_dpto:'50',
    value:'50313',
    text:'GRANADA'
  },
  {
    code_dpto:'50',
    value:'50318',
    text:'GUAMAL'
  },
  {
    code_dpto:'50',
    value:'50325',
    text:'MAPIRIPÁN'
  },
  {
    code_dpto:'50',
    value:'50330',
    text:'MESETAS'
  },
  {
    code_dpto:'50',
    value:'50350',
    text:'LA MACARENA'
  },
  {
    code_dpto:'50',
    value:'50370',
    text:'URIBE'
  },
  {
    code_dpto:'50',
    value:'50400',
    text:'LEJANÍAS'
  },
  {
    code_dpto:'50',
    value:'50450',
    text:'PUERTO CONCORDIA'
  },
  {
    code_dpto:'50',
    value:'50568',
    text:'PUERTO GAITÁN'
  },
  {
    code_dpto:'50',
    value:'50573',
    text:'PUERTO LÓPEZ'
  },
  {
    code_dpto:'50',
    value:'50577',
    text:'PUERTO LLERAS'
  },
  {
    code_dpto:'50',
    value:'50590',
    text:'PUERTO RICO'
  },
  {
    code_dpto:'50',
    value:'50606',
    text:'RESTREPO'
  },
  {
    code_dpto:'50',
    value:'50680',
    text:'SAN CARLOS DE GUAROA'
  },
  {
    code_dpto:'50',
    value:'50683',
    text:'SAN JUAN DE ARAMA'
  },
  {
    code_dpto:'50',
    value:'50686',
    text:'SAN JUANITO'
  },
  {
    code_dpto:'50',
    value:'50689',
    text:'SAN MARTÍN'
  },
  {
    code_dpto:'50',
    value:'50711',
    text:'VISTAHERMOSA'
  },
  {
    code_dpto:'52',
    value:'52001',
    text:'PASTO'
  },
  {
    code_dpto:'52',
    value:'52019',
    text:'ALBÁN'
  },
  {
    code_dpto:'52',
    value:'52022',
    text:'ALDANA'
  },
  {
    code_dpto:'52',
    value:'52036',
    text:'ANCUYÁ'
  },
  {
    code_dpto:'52',
    value:'52051',
    text:'ARBOLEDA'
  },
  {
    code_dpto:'52',
    value:'52079',
    text:'BARBACOAS'
  },
  {
    code_dpto:'52',
    value:'52083',
    text:'BELÉN'
  },
  {
    code_dpto:'52',
    value:'52110',
    text:'BUESACO'
  },
  {
    code_dpto:'52',
    value:'52203',
    text:'COLÓN'
  },
  {
    code_dpto:'52',
    value:'52207',
    text:'CONSACA'
  },
  {
    code_dpto:'52',
    value:'52210',
    text:'CONTADERO'
  },
  {
    code_dpto:'52',
    value:'52215',
    text:'CÓRDOBA'
  },
  {
    code_dpto:'52',
    value:'52224',
    text:'CUASPUD'
  },
  {
    code_dpto:'52',
    value:'52227',
    text:'CUMBAL'
  },
  {
    code_dpto:'52',
    value:'52233',
    text:'CUMBITARA'
  },
  {
    code_dpto:'52',
    value:'52240',
    text:'CHACHAGÜÍ'
  },
  {
    code_dpto:'52',
    value:'52250',
    text:'EL CHARCO'
  },
  {
    code_dpto:'52',
    value:'52254',
    text:'EL PEÑOL'
  },
  {
    code_dpto:'52',
    value:'52256',
    text:'EL ROSARIO'
  },
  {
    code_dpto:'52',
    value:'52258',
    text:'EL TABLÓN DE GÓMEZ'
  },
  {
    code_dpto:'52',
    value:'52260',
    text:'EL TAMBO'
  },
  {
    code_dpto:'52',
    value:'52287',
    text:'FUNES'
  },
  {
    code_dpto:'52',
    value:'52317',
    text:'GUACHUCAL'
  },
  {
    code_dpto:'52',
    value:'52320',
    text:'GUAITARILLA'
  },
  {
    code_dpto:'52',
    value:'52323',
    text:'GUALMATÁN'
  },
  {
    code_dpto:'52',
    value:'52352',
    text:'ILES'
  },
  {
    code_dpto:'52',
    value:'52354',
    text:'IMUÉS'
  },
  {
    code_dpto:'52',
    value:'52356',
    text:'IPIALES'
  },
  {
    code_dpto:'52',
    value:'52378',
    text:'LA CRUZ'
  },
  {
    code_dpto:'52',
    value:'52381',
    text:'LA FLORIDA'
  },
  {
    code_dpto:'52',
    value:'52385',
    text:'LA LLANADA'
  },
  {
    code_dpto:'52',
    value:'52390',
    text:'LA TOLA'
  },
  {
    code_dpto:'52',
    value:'52399',
    text:'LA UNIÓN'
  },
  {
    code_dpto:'52',
    value:'52405',
    text:'LEIVA'
  },
  {
    code_dpto:'52',
    value:'52411',
    text:'LINARES'
  },
  {
    code_dpto:'52',
    value:'52418',
    text:'LOS ANDES'
  },
  {
    code_dpto:'52',
    value:'52427',
    text:'MAGÜI'
  },
  {
    code_dpto:'52',
    value:'52435',
    text:'MALLAMA'
  },
  {
    code_dpto:'52',
    value:'52473',
    text:'MOSQUERA'
  },
  {
    code_dpto:'52',
    value:'52480',
    text:'NARIÑO'
  },
  {
    code_dpto:'52',
    value:'52490',
    text:'OLAYA HERRERA'
  },
  {
    code_dpto:'52',
    value:'52506',
    text:'OSPINA'
  },
  {
    code_dpto:'52',
    value:'52520',
    text:'FRANCISCO PIZARRO'
  },
  {
    code_dpto:'52',
    value:'52540',
    text:'POLICARPA'
  },
  {
    code_dpto:'52',
    value:'52560',
    text:'POTOSÍ'
  },
  {
    code_dpto:'52',
    value:'52565',
    text:'PROVIDENCIA'
  },
  {
    code_dpto:'52',
    value:'52573',
    text:'PUERRES'
  },
  {
    code_dpto:'52',
    value:'52585',
    text:'PUPIALES'
  },
  {
    code_dpto:'52',
    value:'52612',
    text:'RICAURTE'
  },
  {
    code_dpto:'52',
    value:'52621',
    text:'ROBERTO PAYÁN'
  },
  {
    code_dpto:'52',
    value:'52678',
    text:'SAMANIEGO'
  },
  {
    code_dpto:'52',
    value:'52683',
    text:'SANDONÁ'
  },
  {
    code_dpto:'52',
    value:'52685',
    text:'SAN BERNARDO'
  },
  {
    code_dpto:'52',
    value:'52687',
    text:'SAN LORENZO'
  },
  {
    code_dpto:'52',
    value:'52693',
    text:'SAN PABLO'
  },
  {
    code_dpto:'52',
    value:'52694',
    text:'SAN PEDRO DE CARTAGO'
  },
  {
    code_dpto:'52',
    value:'52696',
    text:'SANTA BÁRBARA'
  },
  {
    code_dpto:'52',
    value:'52699',
    text:'SANTACRUZ'
  },
  {
    code_dpto:'52',
    value:'52720',
    text:'SAPUYES'
  },
  {
    code_dpto:'52',
    value:'52786',
    text:'TAMINANGO'
  },
  {
    code_dpto:'52',
    value:'52788',
    text:'TANGUA'
  },
  {
    code_dpto:'52',
    value:'52835',
    text:'TUMACO'
  },
  {
    code_dpto:'52',
    value:'52838',
    text:'TÚQUERRES'
  },
  {
    code_dpto:'52',
    value:'52885',
    text:'YACUANQUER'
  },
  {
    code_dpto:'54',
    value:'54001',
    text:'CÚCUTA'
  },
  {
    code_dpto:'54',
    value:'54003',
    text:'ABREGO'
  },
  {
    code_dpto:'54',
    value:'54051',
    text:'ARBOLEDAS'
  },
  {
    code_dpto:'54',
    value:'54099',
    text:'BOCHALEMA'
  },
  {
    code_dpto:'54',
    value:'54109',
    text:'BUCARASICA'
  },
  {
    code_dpto:'54',
    value:'54125',
    text:'CÁCOTA'
  },
  {
    code_dpto:'54',
    value:'54128',
    text:'CACHIRÁ'
  },
  {
    code_dpto:'54',
    value:'54172',
    text:'CHINÁCOTA'
  },
  {
    code_dpto:'54',
    value:'54174',
    text:'CHITAGÁ'
  },
  {
    code_dpto:'54',
    value:'54206',
    text:'CONVENCIÓN'
  },
  {
    code_dpto:'54',
    value:'54223',
    text:'CUCUTILLA'
  },
  {
    code_dpto:'54',
    value:'54239',
    text:'DURANIA'
  },
  {
    code_dpto:'54',
    value:'54245',
    text:'EL CARMEN'
  },
  {
    code_dpto:'54',
    value:'54250',
    text:'EL TARRA'
  },
  {
    code_dpto:'54',
    value:'54261',
    text:'EL ZULIA'
  },
  {
    code_dpto:'54',
    value:'54313',
    text:'GRAMALOTE'
  },
  {
    code_dpto:'54',
    value:'54344',
    text:'HACARÍ'
  },
  {
    code_dpto:'54',
    value:'54347',
    text:'HERRÁN'
  },
  {
    code_dpto:'54',
    value:'54377',
    text:'LABATECA'
  },
  {
    code_dpto:'54',
    value:'54385',
    text:'LA ESPERANZA'
  },
  {
    code_dpto:'54',
    value:'54398',
    text:'LA PLAYA'
  },
  {
    code_dpto:'54',
    value:'54405',
    text:'LOS PATIOS'
  },
  {
    code_dpto:'54',
    value:'54418',
    text:'LOURDES'
  },
  {
    code_dpto:'54',
    value:'54480',
    text:'MUTISCUA'
  },
  {
    code_dpto:'54',
    value:'54498',
    text:'OCAÑA'
  },
  {
    code_dpto:'54',
    value:'54518',
    text:'PAMPLONA'
  },
  {
    code_dpto:'54',
    value:'54520',
    text:'PAMPLONITA'
  },
  {
    code_dpto:'54',
    value:'54553',
    text:'PUERTO SANTANDER'
  },
  {
    code_dpto:'54',
    value:'54599',
    text:'RAGONVALIA'
  },
  {
    code_dpto:'54',
    value:'54660',
    text:'SALAZAR'
  },
  {
    code_dpto:'54',
    value:'54670',
    text:'SAN CALIXTO'
  },
  {
    code_dpto:'54',
    value:'54673',
    text:'SAN CAYETANO'
  },
  {
    code_dpto:'54',
    value:'54680',
    text:'SANTIAGO'
  },
  {
    code_dpto:'54',
    value:'54720',
    text:'SARDINATA'
  },
  {
    code_dpto:'54',
    value:'54743',
    text:'SILOS'
  },
  {
    code_dpto:'54',
    value:'54800',
    text:'TEORAMA'
  },
  {
    code_dpto:'54',
    value:'54810',
    text:'TIBÚ'
  },
  {
    code_dpto:'54',
    value:'54820',
    text:'TOLEDO'
  },
  {
    code_dpto:'54',
    value:'54871',
    text:'VILLA CARO'
  },
  {
    code_dpto:'54',
    value:'54874',
    text:'VILLA DEL ROSARIO'
  },
  {
    code_dpto:'63',
    value:'63001',
    text:'ARMENIA'
  },
  {
    code_dpto:'63',
    value:'63111',
    text:'BUENAVISTA'
  },
  {
    code_dpto:'63',
    value:'63130',
    text:'CALARCA'
  },
  {
    code_dpto:'63',
    value:'63190',
    text:'CIRCASIA'
  },
  {
    code_dpto:'63',
    value:'63212',
    text:'CÓRDOBA'
  },
  {
    code_dpto:'63',
    value:'63272',
    text:'FILANDIA'
  },
  {
    code_dpto:'63',
    value:'63302',
    text:'GÉNOVA'
  },
  {
    code_dpto:'63',
    value:'63401',
    text:'LA TEBAIDA'
  },
  {
    code_dpto:'63',
    value:'63470',
    text:'MONTENEGRO'
  },
  {
    code_dpto:'63',
    value:'63548',
    text:'PIJAO'
  },
  {
    code_dpto:'63',
    value:'63594',
    text:'QUIMBAYA'
  },
  {
    code_dpto:'63',
    value:'63690',
    text:'SALENTO'
  },
  {
    code_dpto:'66',
    value:'66001',
    text:'PEREIRA'
  },
  {
    code_dpto:'66',
    value:'66045',
    text:'APÍA'
  },
  {
    code_dpto:'66',
    value:'66075',
    text:'BALBOA'
  },
  {
    code_dpto:'66',
    value:'66088',
    text:'BELÉN DE UMBRÍA'
  },
  {
    code_dpto:'66',
    value:'66170',
    text:'DOSQUEBRADAS'
  },
  {
    code_dpto:'66',
    value:'66318',
    text:'GUÁTICA'
  },
  {
    code_dpto:'66',
    value:'66383',
    text:'LA CELIA'
  },
  {
    code_dpto:'66',
    value:'66400',
    text:'LA VIRGINIA'
  },
  {
    code_dpto:'66',
    value:'66440',
    text:'MARSELLA'
  },
  {
    code_dpto:'66',
    value:'66456',
    text:'MISTRATÓ'
  },
  {
    code_dpto:'66',
    value:'66572',
    text:'PUEBLO RICO'
  },
  {
    code_dpto:'66',
    value:'66594',
    text:'QUINCHÍA'
  },
  {
    code_dpto:'66',
    value:'66682',
    text:'SANTA ROSA DE CABAL'
  },
  {
    code_dpto:'66',
    value:'66687',
    text:'SANTUARIO'
  },
  {
    code_dpto:'68',
    value:'68001',
    text:'BUCARAMANGA'
  },
  {
    code_dpto:'68',
    value:'68013',
    text:'AGUADA'
  },
  {
    code_dpto:'68',
    value:'68020',
    text:'ALBANIA'
  },
  {
    code_dpto:'68',
    value:'68051',
    text:'ARATOCA'
  },
  {
    code_dpto:'68',
    value:'68077',
    text:'BARBOSA'
  },
  {
    code_dpto:'68',
    value:'68079',
    text:'BARICHARA'
  },
  {
    code_dpto:'68',
    value:'68081',
    text:'BARRANCABERMEJA'
  },
  {
    code_dpto:'68',
    value:'68092',
    text:'BETULIA'
  },
  {
    code_dpto:'68',
    value:'68101',
    text:'BOLÍVAR'
  },
  {
    code_dpto:'68',
    value:'68121',
    text:'CABRERA'
  },
  {
    code_dpto:'68',
    value:'68132',
    text:'CALIFORNIA'
  },
  {
    code_dpto:'68',
    value:'68147',
    text:'CAPITANEJO'
  },
  {
    code_dpto:'68',
    value:'68152',
    text:'CARCASÍ'
  },
  {
    code_dpto:'68',
    value:'68160',
    text:'CEPITÁ'
  },
  {
    code_dpto:'68',
    value:'68162',
    text:'CERRITO'
  },
  {
    code_dpto:'68',
    value:'68167',
    text:'CHARALÁ'
  },
  {
    code_dpto:'68',
    value:'68169',
    text:'CHARTA'
  },
  {
    code_dpto:'68',
    value:'68176',
    text:'CHIMA'
  },
  {
    code_dpto:'68',
    value:'68179',
    text:'CHIPATÁ'
  },
  {
    code_dpto:'68',
    value:'68190',
    text:'CIMITARRA'
  },
  {
    code_dpto:'68',
    value:'68207',
    text:'CONCEPCIÓN'
  },
  {
    code_dpto:'68',
    value:'68209',
    text:'CONFINES'
  },
  {
    code_dpto:'68',
    value:'68211',
    text:'CONTRATACIÓN'
  },
  {
    code_dpto:'68',
    value:'68217',
    text:'COROMORO'
  },
  {
    code_dpto:'68',
    value:'68229',
    text:'CURITÍ'
  },
  {
    code_dpto:'68',
    value:'68235',
    text:'EL CARMEN DE CHUCURÍ'
  },
  {
    code_dpto:'68',
    value:'68245',
    text:'EL GUACAMAYO'
  },
  {
    code_dpto:'68',
    value:'68250',
    text:'EL PEÑÓN'
  },
  {
    code_dpto:'68',
    value:'68255',
    text:'EL PLAYÓN'
  },
  {
    code_dpto:'68',
    value:'68264',
    text:'ENCINO'
  },
  {
    code_dpto:'68',
    value:'68266',
    text:'ENCISO'
  },
  {
    code_dpto:'68',
    value:'68271',
    text:'FLORIÁN'
  },
  {
    code_dpto:'68',
    value:'68276',
    text:'FLORIDABLANCA'
  },
  {
    code_dpto:'68',
    value:'68296',
    text:'GALÁN'
  },
  {
    code_dpto:'68',
    value:'68298',
    text:'GAMBITA'
  },
  {
    code_dpto:'68',
    value:'68307',
    text:'GIRÓN'
  },
  {
    code_dpto:'68',
    value:'68318',
    text:'GUACA'
  },
  {
    code_dpto:'68',
    value:'68320',
    text:'GUADALUPE'
  },
  {
    code_dpto:'68',
    value:'68322',
    text:'GUAPOTÁ'
  },
  {
    code_dpto:'68',
    value:'68324',
    text:'GUAVATÁ'
  },
  {
    code_dpto:'68',
    value:'68327',
    text:'GÜEPSA'
  },
  {
    code_dpto:'68',
    value:'68344',
    text:'HATO'
  },
  {
    code_dpto:'68',
    value:'68368',
    text:'JESÚS MARÍA'
  },
  {
    code_dpto:'68',
    value:'68370',
    text:'JORDÁN'
  },
  {
    code_dpto:'68',
    value:'68377',
    text:'LA BELLEZA'
  },
  {
    code_dpto:'68',
    value:'68385',
    text:'LANDÁZURI'
  },
  {
    code_dpto:'68',
    value:'68397',
    text:'LA PAZ'
  },
  {
    code_dpto:'68',
    value:'68406',
    text:'LEBRÍJA'
  },
  {
    code_dpto:'68',
    value:'68418',
    text:'LOS SANTOS'
  },
  {
    code_dpto:'68',
    value:'68425',
    text:'MACARAVITA'
  },
  {
    code_dpto:'68',
    value:'68432',
    text:'MÁLAGA'
  },
  {
    code_dpto:'68',
    value:'68444',
    text:'MATANZA'
  },
  {
    code_dpto:'68',
    value:'68464',
    text:'MOGOTES'
  },
  {
    code_dpto:'68',
    value:'68468',
    text:'MOLAGAVITA'
  },
  {
    code_dpto:'68',
    value:'68498',
    text:'OCAMONTE'
  },
  {
    code_dpto:'68',
    value:'68500',
    text:'OIBA'
  },
  {
    code_dpto:'68',
    value:'68502',
    text:'ONZAGA'
  },
  {
    code_dpto:'68',
    value:'68522',
    text:'PALMAR'
  },
  {
    code_dpto:'68',
    value:'68524',
    text:'PALMAS DEL SOCORRO'
  },
  {
    code_dpto:'68',
    value:'68533',
    text:'PÁRAMO'
  },
  {
    code_dpto:'68',
    value:'68547',
    text:'PIEDECUESTA'
  },
  {
    code_dpto:'68',
    value:'68549',
    text:'PINCHOTE'
  },
  {
    code_dpto:'68',
    value:'68572',
    text:'PUENTE NACIONAL'
  },
  {
    code_dpto:'68',
    value:'68573',
    text:'PUERTO PARRA'
  },
  {
    code_dpto:'68',
    value:'68575',
    text:'PUERTO WILCHES'
  },
  {
    code_dpto:'68',
    value:'68615',
    text:'RIONEGRO'
  },
  {
    code_dpto:'68',
    value:'68655',
    text:'SABANA DE TORRES'
  },
  {
    code_dpto:'68',
    value:'68669',
    text:'SAN ANDRÉS'
  },
  {
    code_dpto:'68',
    value:'68673',
    text:'SAN BENITO'
  },
  {
    code_dpto:'68',
    value:'68679',
    text:'SAN GIL'
  },
  {
    code_dpto:'68',
    value:'68682',
    text:'SAN JOAQUÍN'
  },
  {
    code_dpto:'68',
    value:'68684',
    text:'SAN JOSÉ DE MIRANDA'
  },
  {
    code_dpto:'68',
    value:'68686',
    text:'SAN MIGUEL'
  },
  {
    code_dpto:'68',
    value:'68689',
    text:'SAN VICENTE DE CHUCURÍ'
  },
  {
    code_dpto:'68',
    value:'68705',
    text:'SANTA BÁRBARA'
  },
  {
    code_dpto:'68',
    value:'68720',
    text:'SANTA HELENA DEL OPÓN'
  },
  {
    code_dpto:'68',
    value:'68745',
    text:'SIMACOTA'
  },
  {
    code_dpto:'68',
    value:'68755',
    text:'SOCORRO'
  },
  {
    code_dpto:'68',
    value:'68770',
    text:'SUAITA'
  },
  {
    code_dpto:'68',
    value:'68773',
    text:'SUCRE'
  },
  {
    code_dpto:'68',
    value:'68780',
    text:'SURATÁ'
  },
  {
    code_dpto:'68',
    value:'68820',
    text:'TONA'
  },
  {
    code_dpto:'68',
    value:'68855',
    text:'VALLE DE SAN JOSÉ'
  },
  {
    code_dpto:'68',
    value:'68861',
    text:'VÉLEZ'
  },
  {
    code_dpto:'68',
    value:'68867',
    text:'VETAS'
  },
  {
    code_dpto:'68',
    value:'68872',
    text:'VILLANUEVA'
  },
  {
    code_dpto:'68',
    value:'68895',
    text:'ZAPATOCA'
  },
  {
    code_dpto:'70',
    value:'70001',
    text:'SINCELEJO'
  },
  {
    code_dpto:'70',
    value:'70110',
    text:'BUENAVISTA'
  },
  {
    code_dpto:'70',
    value:'70124',
    text:'CAIMITO'
  },
  {
    code_dpto:'70',
    value:'70204',
    text:'COLOSO'
  },
  {
    code_dpto:'70',
    value:'70215',
    text:'COROZAL'
  },
  {
    code_dpto:'70',
    value:'70221',
    text:'COVEÑAS'
  },
  {
    code_dpto:'70',
    value:'70230',
    text:'CHALÁN'
  },
  {
    code_dpto:'70',
    value:'70233',
    text:'EL ROBLE'
  },
  {
    code_dpto:'70',
    value:'70235',
    text:'GALERAS'
  },
  {
    code_dpto:'70',
    value:'70265',
    text:'GUARANDA'
  },
  {
    code_dpto:'70',
    value:'70400',
    text:'LA UNIÓN'
  },
  {
    code_dpto:'70',
    value:'70418',
    text:'LOS PALMITOS'
  },
  {
    code_dpto:'70',
    value:'70429',
    text:'MAJAGUAL'
  },
  {
    code_dpto:'70',
    value:'70473',
    text:'MORROA'
  },
  {
    code_dpto:'70',
    value:'70508',
    text:'OVEJAS'
  },
  {
    code_dpto:'70',
    value:'70523',
    text:'PALMITO'
  },
  {
    code_dpto:'70',
    value:'70670',
    text:'SAMPUÉS'
  },
  {
    code_dpto:'70',
    value:'70678',
    text:'SAN BENITO ABAD'
  },
  {
    code_dpto:'70',
    value:'70702',
    text:'SAN JUAN DE BETULIA'
  },
  {
    code_dpto:'70',
    value:'70708',
    text:'SAN MARCOS'
  },
  {
    code_dpto:'70',
    value:'70713',
    text:'SAN ONOFRE'
  },
  {
    code_dpto:'70',
    value:'70717',
    text:'SAN PEDRO'
  },
  {
    code_dpto:'70',
    value:'70742',
    text:'SAN LUIS DE SINCÉ'
  },
  {
    code_dpto:'70',
    value:'70771',
    text:'SUCRE'
  },
  {
    code_dpto:'70',
    value:'70820',
    text:'SANTIAGO DE TOLÚ'
  },
  {
    code_dpto:'70',
    value:'70823',
    text:'TOLÚ VIEJO'
  },
  {
    code_dpto:'73',
    value:'73001',
    text:'IBAGUÉ'
  },
  {
    code_dpto:'73',
    value:'73024',
    text:'ALPUJARRA'
  },
  {
    code_dpto:'73',
    value:'73026',
    text:'ALVARADO'
  },
  {
    code_dpto:'73',
    value:'73030',
    text:'AMBALEMA'
  },
  {
    code_dpto:'73',
    value:'73043',
    text:'ANZOÁTEGUI'
  },
  {
    code_dpto:'73',
    value:'73055',
    text:'ARMERO'
  },
  {
    code_dpto:'73',
    value:'73067',
    text:'ATACO'
  },
  {
    code_dpto:'73',
    value:'73124',
    text:'CAJAMARCA'
  },
  {
    code_dpto:'73',
    value:'73148',
    text:'CARMEN DE APICALÁ'
  },
  {
    code_dpto:'73',
    value:'73152',
    text:'CASABIANCA'
  },
  {
    code_dpto:'73',
    value:'73168',
    text:'CHAPARRAL'
  },
  {
    code_dpto:'73',
    value:'73200',
    text:'COELLO'
  },
  {
    code_dpto:'73',
    value:'73217',
    text:'COYAIMA'
  },
  {
    code_dpto:'73',
    value:'73226',
    text:'CUNDAY'
  },
  {
    code_dpto:'73',
    value:'73236',
    text:'DOLORES'
  },
  {
    code_dpto:'73',
    value:'73268',
    text:'ESPINAL'
  },
  {
    code_dpto:'73',
    value:'73270',
    text:'FALAN'
  },
  {
    code_dpto:'73',
    value:'73275',
    text:'FLANDES'
  },
  {
    code_dpto:'73',
    value:'73283',
    text:'FRESNO'
  },
  {
    code_dpto:'73',
    value:'73319',
    text:'GUAMO'
  },
  {
    code_dpto:'73',
    value:'73347',
    text:'HERVEO'
  },
  {
    code_dpto:'73',
    value:'73349',
    text:'HONDA'
  },
  {
    code_dpto:'73',
    value:'73352',
    text:'ICONONZO'
  },
  {
    code_dpto:'73',
    value:'73408',
    text:'LÉRIDA'
  },
  {
    code_dpto:'73',
    value:'73411',
    text:'LÍBANO'
  },
  {
    code_dpto:'73',
    value:'73443',
    text:'MARIQUITA'
  },
  {
    code_dpto:'73',
    value:'73449',
    text:'MELGAR'
  },
  {
    code_dpto:'73',
    value:'73461',
    text:'MURILLO'
  },
  {
    code_dpto:'73',
    value:'73483',
    text:'NATAGAIMA'
  },
  {
    code_dpto:'73',
    value:'73504',
    text:'ORTEGA'
  },
  {
    code_dpto:'73',
    value:'73520',
    text:'PALOCABILDO'
  },
  {
    code_dpto:'73',
    value:'73547',
    text:'PIEDRAS'
  },
  {
    code_dpto:'73',
    value:'73555',
    text:'PLANADAS'
  },
  {
    code_dpto:'73',
    value:'73563',
    text:'PRADO'
  },
  {
    code_dpto:'73',
    value:'73585',
    text:'PURIFICACIÓN'
  },
  {
    code_dpto:'73',
    value:'73616',
    text:'RIOBLANCO'
  },
  {
    code_dpto:'73',
    value:'73622',
    text:'RONCESVALLES'
  },
  {
    code_dpto:'73',
    value:'73624',
    text:'ROVIRA'
  },
  {
    code_dpto:'73',
    value:'73671',
    text:'SALDAÑA'
  },
  {
    code_dpto:'73',
    value:'73675',
    text:'SAN ANTONIO'
  },
  {
    code_dpto:'73',
    value:'73678',
    text:'SAN LUIS'
  },
  {
    code_dpto:'73',
    value:'73686',
    text:'SANTA ISABEL'
  },
  {
    code_dpto:'73',
    value:'73770',
    text:'SUÁREZ'
  },
  {
    code_dpto:'73',
    value:'73854',
    text:'VALLE DE SAN JUAN'
  },
  {
    code_dpto:'73',
    value:'73861',
    text:'VENADILLO'
  },
  {
    code_dpto:'73',
    value:'73870',
    text:'VILLAHERMOSA'
  },
  {
    code_dpto:'73',
    value:'73873',
    text:'VILLARRICA'
  },
  {
    code_dpto:'76',
    value:'76001',
    text:'CALI'
  },
  {
    code_dpto:'76',
    value:'76020',
    text:'ALCALÁ'
  },
  {
    code_dpto:'76',
    value:'76036',
    text:'ANDALUCÍA'
  },
  {
    code_dpto:'76',
    value:'76041',
    text:'ANSERMANUEVO'
  },
  {
    code_dpto:'76',
    value:'76054',
    text:'ARGELIA'
  },
  {
    code_dpto:'76',
    value:'76100',
    text:'BOLÍVAR'
  },
  {
    code_dpto:'76',
    value:'76109',
    text:'BUENAVENTURA'
  },
  {
    code_dpto:'76',
    value:'76111',
    text:'GUADALAJARA DE BUGA'
  },
  {
    code_dpto:'76',
    value:'76113',
    text:'BUGALAGRANDE'
  },
  {
    code_dpto:'76',
    value:'76122',
    text:'CAICEDONIA'
  },
  {
    code_dpto:'76',
    value:'76126',
    text:'CALIMA'
  },
  {
    code_dpto:'76',
    value:'76130',
    text:'CANDELARIA'
  },
  {
    code_dpto:'76',
    value:'76147',
    text:'CARTAGO'
  },
  {
    code_dpto:'76',
    value:'76233',
    text:'DAGUA'
  },
  {
    code_dpto:'76',
    value:'76243',
    text:'EL ÁGUILA'
  },
  {
    code_dpto:'76',
    value:'76246',
    text:'EL CAIRO'
  },
  {
    code_dpto:'76',
    value:'76248',
    text:'EL CERRITO'
  },
  {
    code_dpto:'76',
    value:'76250',
    text:'EL DOVIO'
  },
  {
    code_dpto:'76',
    value:'76275',
    text:'FLORIDA'
  },
  {
    code_dpto:'76',
    value:'76306',
    text:'GINEBRA'
  },
  {
    code_dpto:'76',
    value:'76318',
    text:'GUACARÍ'
  },
  {
    code_dpto:'76',
    value:'76364',
    text:'JAMUNDÍ'
  },
  {
    code_dpto:'76',
    value:'76377',
    text:'LA CUMBRE'
  },
  {
    code_dpto:'76',
    value:'76400',
    text:'LA UNIÓN'
  },
  {
    code_dpto:'76',
    value:'76403',
    text:'LA VICTORIA'
  },
  {
    code_dpto:'76',
    value:'76497',
    text:'OBANDO'
  },
  {
    code_dpto:'76',
    value:'76520',
    text:'PALMIRA'
  },
  {
    code_dpto:'76',
    value:'76563',
    text:'PRADERA'
  },
  {
    code_dpto:'76',
    value:'76606',
    text:'RESTREPO'
  },
  {
    code_dpto:'76',
    value:'76616',
    text:'RIOFRÍO'
  },
  {
    code_dpto:'76',
    value:'76622',
    text:'ROLDANILLO'
  },
  {
    code_dpto:'76',
    value:'76670',
    text:'SAN PEDRO'
  },
  {
    code_dpto:'76',
    value:'76736',
    text:'SEVILLA'
  },
  {
    code_dpto:'76',
    value:'76823',
    text:'TORO'
  },
  {
    code_dpto:'76',
    value:'76828',
    text:'TRUJILLO'
  },
  {
    code_dpto:'76',
    value:'76834',
    text:'TULUÁ'
  },
  {
    code_dpto:'76',
    value:'76845',
    text:'ULLOA'
  },
  {
    code_dpto:'76',
    value:'76863',
    text:'VERSALLES'
  },
  {
    code_dpto:'76',
    value:'76869',
    text:'VIJES'
  },
  {
    code_dpto:'76',
    value:'76890',
    text:'YOTOCO'
  },
  {
    code_dpto:'76',
    value:'76892',
    text:'YUMBO'
  },
  {
    code_dpto:'76',
    value:'76895',
    text:'ZARZAL'
  },
  {
    code_dpto:'81',
    value:'81001',
    text:'ARAUCA'
  },
  {
    code_dpto:'81',
    value:'81065',
    text:'ARAUQUITA'
  },
  {
    code_dpto:'81',
    value:'81220',
    text:'CRAVO NORTE'
  },
  {
    code_dpto:'81',
    value:'81300',
    text:'FORTUL'
  },
  {
    code_dpto:'81',
    value:'81591',
    text:'PUERTO RONDÓN'
  },
  {
    code_dpto:'81',
    value:'81736',
    text:'SARAVENA'
  },
  {
    code_dpto:'81',
    value:'81794',
    text:'TAME'
  },
  {
    code_dpto:'85',
    value:'85001',
    text:'YOPAL'
  },
  {
    code_dpto:'85',
    value:'85010',
    text:'AGUAZUL'
  },
  {
    code_dpto:'85',
    value:'85015',
    text:'CHAMEZA'
  },
  {
    code_dpto:'85',
    value:'85125',
    text:'HATO COROZAL'
  },
  {
    code_dpto:'85',
    value:'85136',
    text:'LA SALINA'
  },
  {
    code_dpto:'85',
    value:'85139',
    text:'MANÍ'
  },
  {
    code_dpto:'85',
    value:'85162',
    text:'MONTERREY'
  },
  {
    code_dpto:'85',
    value:'85225',
    text:'NUNCHÍA'
  },
  {
    code_dpto:'85',
    value:'85230',
    text:'OROCUÉ'
  },
  {
    code_dpto:'85',
    value:'85250',
    text:'PAZ DE ARIPORO'
  },
  {
    code_dpto:'85',
    value:'85263',
    text:'PORE'
  },
  {
    code_dpto:'85',
    value:'85279',
    text:'RECETOR'
  },
  {
    code_dpto:'85',
    value:'85300',
    text:'SABANALARGA'
  },
  {
    code_dpto:'85',
    value:'85315',
    text:'SÁCAMA'
  },
  {
    code_dpto:'85',
    value:'85325',
    text:'SAN LUIS DE PALENQUE'
  },
  {
    code_dpto:'85',
    value:'85400',
    text:'TÁMARA'
  },
  {
    code_dpto:'85',
    value:'85410',
    text:'TAURAMENA'
  },
  {
    code_dpto:'85',
    value:'85430',
    text:'TRINIDAD'
  },
  {
    code_dpto:'85',
    value:'85440',
    text:'VILLANUEVA'
  },
  {
    code_dpto:'86',
    value:'86001',
    text:'MOCOA'
  },
  {
    code_dpto:'86',
    value:'86219',
    text:'COLÓN'
  },
  {
    code_dpto:'86',
    value:'86320',
    text:'ORITO'
  },
  {
    code_dpto:'86',
    value:'86568',
    text:'PUERTO ASÍS'
  },
  {
    code_dpto:'86',
    value:'86569',
    text:'PUERTO CAICEDO'
  },
  {
    code_dpto:'86',
    value:'86571',
    text:'PUERTO GUZMÁN'
  },
  {
    code_dpto:'86',
    value:'86573',
    text:'LEGUÍZAMO'
  },
  {
    code_dpto:'86',
    value:'86749',
    text:'SIBUNDOY'
  },
  {
    code_dpto:'86',
    value:'86755',
    text:'SAN FRANCISCO'
  },
  {
    code_dpto:'86',
    value:'86757',
    text:'SAN MIGUEL'
  },
  {
    code_dpto:'86',
    value:'86760',
    text:'SANTIAGO'
  },
  {
    code_dpto:'86',
    value:'86865',
    text:'VALLE DEL GUAMUEZ'
  },
  {
    code_dpto:'86',
    value:'86885',
    text:'VILLAGARZÓN'
  },
  {
    code_dpto:'88',
    value:'88001',
    text:'SAN ANDRÉS'
  },
  {
    code_dpto:'88',
    value:'88564',
    text:'PROVIDENCIA'
  },
  {
    code_dpto:'91',
    value:'91001',
    text:'LETICIA'
  },
  {
    code_dpto:'91',
    value:'91263',
    text:'EL ENCANTO'
  },
  {
    code_dpto:'91',
    value:'91405',
    text:'LA CHORRERA'
  },
  {
    code_dpto:'91',
    value:'91407',
    text:'LA PEDRERA'
  },
  {
    code_dpto:'91',
    value:'91430',
    text:'LA VICTORIA'
  },
  {
    code_dpto:'91',
    value:'91460',
    text:'MIRITI - PARANÁ'
  },
  {
    code_dpto:'91',
    value:'91530',
    text:'PUERTO ALEGRÍA'
  },
  {
    code_dpto:'91',
    value:'91536',
    text:'PUERTO ARICA'
  },
  {
    code_dpto:'91',
    value:'91540',
    text:'PUERTO NARIÑO'
  },
  {
    code_dpto:'91',
    value:'91669',
    text:'PUERTO SANTANDER'
  },
  {
    code_dpto:'91',
    value:'91798',
    text:'TARAPACÁ'
  },
  {
    code_dpto:'94',
    value:'94001',
    text:'INÍRIDA'
  },
  {
    code_dpto:'94',
    value:'94343',
    text:'BARRANCO MINAS'
  },
  {
    code_dpto:'94',
    value:'94663',
    text:'MAPIRIPANA'
  },
  {
    code_dpto:'94',
    value:'94883',
    text:'SAN FELIPE'
  },
  {
    code_dpto:'94',
    value:'94884',
    text:'PUERTO COLOMBIA'
  },
  {
    code_dpto:'94',
    value:'94885',
    text:'LA GUADALUPE'
  },
  {
    code_dpto:'94',
    value:'94886',
    text:'CACAHUAL'
  },
  {
    code_dpto:'94',
    value:'94887',
    text:'PANA PANA'
  },
  {
    code_dpto:'94',
    value:'94888',
    text:'MORICHAL'
  },
  {
    code_dpto:'95',
    value:'95001',
    text:'SAN JOSÉ DEL GUAVIARE'
  },
  {
    code_dpto:'95',
    value:'95015',
    text:'CALAMAR'
  },
  {
    code_dpto:'95',
    value:'95025',
    text:'EL RETORNO'
  },
  {
    code_dpto:'95',
    value:'95200',
    text:'MIRAFLORES'
  },
  {
    code_dpto:'97',
    value:'97001',
    text:'MITÚ'
  },
  {
    code_dpto:'97',
    value:'97161',
    text:'CARURU'
  },
  {
    code_dpto:'97',
    value:'97511',
    text:'PACOA'
  },
  {
    code_dpto:'97',
    value:'97666',
    text:'TARAIRA'
  },
  {
    code_dpto:'97',
    value:'97777',
    text:'PAPUNAUA'
  },
  {
    code_dpto:'97',
    value:'97889',
    text:'YAVARATÉ'
  },
  {
    code_dpto:'99',
    value:'99001',
    text:'PUERTO CARREÑO'
  },
  {
    code_dpto:'99',
    value:'99524',
    text:'LA PRIMAVERA'
  },
  {
    code_dpto:'99',
    value:'99624',
    text:'SANTA ROSALÍA'
  },
  {
    code_dpto:'99',
    value:'99773',
    text:'CUMARIBO'
  }
                    ],
                    ciudadexp: {
                    value: '',
                    text: ''
                    },
            }
        },


                watch: {
                          departamento(nuevoValor, valorAnterior){
                            this.selectedCiudades = this.dpto().filter((e)=>{return e.id == nuevoValor})[0].ciudades;
                        },
                },
                components: {
                    ModelSelect
                },
                methods: {


                  async editresidencial() {
                    try {
                        const metoken =  window.localStorage.getItem('jwt')
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const meid = window.localStorage.getItem('id').replace(/['"]+/g, '')
                        let res = await this.$axios.put("perfils/" + meid, {
                          
                            departamento: this.departamento,
                            ciudad:this.ciudad,
                            direccion: this.direccion,
                            tvivienda :this.tvivienda,
                            estrato :this.estrato,
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

                    years  : (startYear)=> {
                    var currentYear = new Date().getFullYear(), years = [];
                    startYear = startYear || 1980;  

                    while ( startYear <= currentYear ) {
                        years.push(startYear++);
                    }

                    return years;
                },
                    months  : ()=> {

                    var monthNames = [ 
                                        {mes: 'Enero', id: 0},
                                        {mes: 'Febrero', id: 1},
                                        {mes: 'Marzo', id: 2},
                                        {mes: 'Abril', id: 3},
                                        {mes: 'Mayo', id: 4},
                                        {mes: 'Junio', id: 5},
                                        {mes: 'Julio', id: 6},
                                        {mes: 'Agosto', id: 7},
                                        {mes: 'Septiembre', id: 8},
                                        {mes: 'Octubre', id: 9},
                                        {mes: 'Noviembre', id: 10},
                                        {mes: 'Diciembre', id: 11},
                                     ];
                                     
                    return monthNames;    

                    },

                    days  : ()=> {
                    var currentDays = [
                        1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,
                        16,17,18,19,20,21,22,23,24,25,26,27,28,29,
                        30,31
                    ]

                    return currentDays;
                },
                
                tvienda : ()=>{
                    var tipovivienda = [

                        "Propia","Familiar","Arrendada"
                    ]
                    return tipovivienda;
                },

               onChange(event) {
                     alert(event.target.value)
                },

                est : ()=>{
                    var es = [

                        "1","2","3","4","5 o mas"
                    ]
                    return es;
                },

                dpto : ()=>{
                    var dto = [  
                                  {  
                                      "id":0,
                                      "departamento":"Amazonas",
                                      "ciudades":[  
                                          "Leticia",
                                          "Puerto Nari\u00f1o"
                                      ]
                                  },
                                  {  
                                      "id":1,
                                      "departamento":"Antioquia",
                                      "ciudades":[  
                                          "Abejorral",
                                          "Abriaqu\u00ed",
                                          "Alejandr\u00eda",
                                          "Amag\u00e1",
                                          "Amalfi",
                                          "Andes",
                                          "Angel\u00f3polis",
                                          "Angostura",
                                          "Anor\u00ed",
                                          "Anz\u00e1",
                                          "Apartad\u00f3",
                                          "Arboletes",
                                          "Argelia",
                                          "Armenia",
                                          "Barbosa",
                                          "Bello",
                                          "Belmira",
                                          "Betania",
                                          "Betulia",
                                          "Brice\u00f1o",
                                          "Buritic\u00e1",
                                          "C\u00e1ceres",
                                          "Caicedo",
                                          "Caldas",
                                          "Campamento",
                                          "Ca\u00f1asgordas",
                                          "Caracol\u00ed",
                                          "Caramanta",
                                          "Carepa",
                                          "Carolina del Pr\u00edncipe",
                                          "Caucasia",
                                          "Chigorod\u00f3",
                                          "Cisneros",
                                          "Ciudad Bol\u00edvar",
                                          "Cocorn\u00e1",
                                          "Concepci\u00f3n",
                                          "Concordia",
                                          "Copacabana",
                                          "Dabeiba",
                                          "Donmat\u00edas",
                                          "Eb\u00e9jico",
                                          "El Bagre",
                                          "El Carmen de Viboral",
                                          "El Pe\u00f1ol",
                                          "El Retiro",
                                          "El Santuario",
                                          "Entrerr\u00edos",
                                          "Envigado",
                                          "Fredonia",
                                          "Frontino",
                                          "Giraldo",
                                          "Girardota",
                                          "G\u00f3mez Plata",
                                          "Granada",
                                          "Guadalupe",
                                          "Guarne",
                                          "Guatap\u00e9",
                                          "Heliconia",
                                          "Hispania",
                                          "Itag\u00fc\u00ed",
                                          "Ituango",
                                          "Jard\u00edn",
                                          "Jeric\u00f3",
                                          "La Ceja",
                                          "La Estrella",
                                          "La Pintada",
                                          "La Uni\u00f3n",
                                          "Liborina",
                                          "Maceo",
                                          "Marinilla",
                                          "Medell\u00edn",
                                          "Montebello",
                                          "Murind\u00f3",
                                          "Mutat\u00e1",
                                          "Nari\u00f1o",
                                          "Nech\u00ed",
                                          "Necocl\u00ed",
                                          "Olaya",
                                          "Peque",
                                          "Pueblorrico",
                                          "Puerto Berr\u00edo",
                                          "Puerto Nare",
                                          "Puerto Triunfo",
                                          "Remedios",
                                          "Rionegro",
                                          "Sabanalarga",
                                          "Sabaneta",
                                          "Salgar",
                                          "San Andr\u00e9s de Cuerquia",
                                          "San Carlos",
                                          "San Francisco",
                                          "San Jer\u00f3nimo",
                                          "San Jos\u00e9 de la Monta\u00f1a",
                                          "San Juan de Urab\u00e1",
                                          "San Luis",
                                          "San Pedro de Urab\u00e1",
                                          "San Pedro de los Milagros",
                                          "San Rafael",
                                          "San Roque",
                                          "San Vicente",
                                          "Santa B\u00e1rbara",
                                          "Santa Fe de Antioquia",
                                          "Santa Rosa de Osos",
                                          "Santo Domingo",
                                          "Segovia",
                                          "Sons\u00f3n",
                                          "Sopetr\u00e1n",
                                          "T\u00e1mesis",
                                          "Taraz\u00e1",
                                          "Tarso",
                                          "Titirib\u00ed",
                                          "Toledo",
                                          "Turbo",
                                          "Uramita",
                                          "Urrao",
                                          "Valdivia",
                                          "Valpara\u00edso",
                                          "Vegach\u00ed",
                                          "Venecia",
                                          "Vig\u00eda del Fuerte",
                                          "Yal\u00ed",
                                          "Yarumal",
                                          "Yolomb\u00f3",
                                          "Yond\u00f3",
                                          "Zaragoza"
                                      ]
                                  },
                                  {  
                                      "id":2,
                                      "departamento":"Arauca",
                                      "ciudades":[  
                                          "Arauca",
                                          "Arauquita",
                                          "Cravo Norte",
                                          "Fortul",
                                          "Puerto Rond\u00f3n",
                                          "Saravena",
                                          "Tame"
                                      ]
                                  },
                                  {  
                                      "id":3,
                                      "departamento":"Atl\u00e1ntico",
                                      "ciudades":[  
                                          "Baranoa",
                                          "Barranquilla",
                                          "Campo de la Cruz",
                                          "Candelaria",
                                          "Galapa",
                                          "Juan de Acosta",
                                          "Luruaco",
                                          "Malambo",
                                          "Manat\u00ed",
                                          "Palmar de Varela",
                                          "Pioj\u00f3",
                                          "Polonuevo",
                                          "Ponedera",
                                          "Puerto Colombia",
                                          "Repel\u00f3n",
                                          "Sabanagrande",
                                          "Sabanalarga",
                                          "Santa Luc\u00eda",
                                          "Santo Tom\u00e1s",
                                          "Soledad",
                                          "Su\u00e1n",
                                          "Tubar\u00e1",
                                          "Usiacur\u00ed"
                                      ]
                                  },
                                  {  
                                      "id":4,
                                      "departamento":"Bol\u00edvar",
                                      "ciudades":[  
                                          "Ach\u00ed",
                                          "Altos del Rosario",
                                          "Arenal",
                                          "Arjona",
                                          "Arroyohondo",
                                          "Barranco de Loba",
                                          "Brazuelo de Papayal",
                                          "Calamar",
                                          "Cantagallo",
                                          "Cartagena de Indias",
                                          "Cicuco",
                                          "Clemencia",
                                          "C\u00f3rdoba",
                                          "El Carmen de Bol\u00edvar",
                                          "El Guamo",
                                          "El Pe\u00f1\u00f3n",
                                          "Hatillo de Loba",
                                          "Magangu\u00e9",
                                          "Mahates",
                                          "Margarita",
                                          "Mar\u00eda la Baja",
                                          "Momp\u00f3s",
                                          "Montecristo",
                                          "Morales",
                                          "Noros\u00ed",
                                          "Pinillos",
                                          "Regidor",
                                          "R\u00edo Viejo",
                                          "San Crist\u00f3bal",
                                          "San Estanislao",
                                          "San Fernando",
                                          "San Jacinto del Cauca",
                                          "San Jacinto",
                                          "San Juan Nepomuceno",
                                          "San Mart\u00edn de Loba",
                                          "San Pablo",
                                          "Santa Catalina",
                                          "Santa Rosa",
                                          "Santa Rosa del Sur",
                                          "Simit\u00ed",
                                          "Soplaviento",
                                          "Talaigua Nuevo",
                                          "Tiquisio",
                                          "Turbaco",
                                          "Turban\u00e1",
                                          "Villanueva",
                                          "Zambrano"
                                      ]
                                  },
                                  {  
                                      "id":5,
                                      "departamento":"Boyac\u00e1",
                                      "ciudades":[  
                                          "Almeida",
                                          "Aquitania",
                                          "Arcabuco",
                                          "Bel\u00e9n",
                                          "Berbeo",
                                          "Bet\u00e9itiva",
                                          "Boavita",
                                          "Boyac\u00e1",
                                          "Brice\u00f1o",
                                          "Buenavista",
                                          "Busbanz\u00e1",
                                          "Caldas",
                                          "Campohermoso",
                                          "Cerinza",
                                          "Chinavita",
                                          "Chiquinquir\u00e1",
                                          "Ch\u00edquiza",
                                          "Chiscas",
                                          "Chita",
                                          "Chitaraque",
                                          "Chivat\u00e1",
                                          "Chivor",
                                          "Ci\u00e9nega",
                                          "C\u00f3mbita",
                                          "Coper",
                                          "Corrales",
                                          "Covarach\u00eda",
                                          "Cubar\u00e1",
                                          "Cucaita",
                                          "Cu\u00edtiva",
                                          "Duitama",
                                          "El Cocuy",
                                          "El Espino",
                                          "Firavitoba",
                                          "Floresta",
                                          "Gachantiv\u00e1",
                                          "G\u00e1meza",
                                          "Garagoa",
                                          "Guacamayas",
                                          "Guateque",
                                          "Guayat\u00e1",
                                          "G\u00fcic\u00e1n",
                                          "Iza",
                                          "Jenesano",
                                          "Jeric\u00f3",
                                          "La Capilla",
                                          "La Uvita",
                                          "La Victoria",
                                          "Labranzagrande",
                                          "Macanal",
                                          "Marip\u00ed",
                                          "Miraflores",
                                          "Mongua",
                                          "Mongu\u00ed",
                                          "Moniquir\u00e1",
                                          "Motavita",
                                          "Muzo",
                                          "Nobsa",
                                          "Nuevo Col\u00f3n",
                                          "Oicat\u00e1",
                                          "Otanche",
                                          "Pachavita",
                                          "P\u00e1ez",
                                          "Paipa",
                                          "Pajarito",
                                          "Panqueba",
                                          "Pauna",
                                          "Paya",
                                          "Paz del R\u00edo",
                                          "Pesca",
                                          "Pisba",
                                          "Puerto Boyac\u00e1",
                                          "Qu\u00edpama",
                                          "Ramiriqu\u00ed",
                                          "R\u00e1quira",
                                          "Rond\u00f3n",
                                          "Saboy\u00e1",
                                          "S\u00e1chica",
                                          "Samac\u00e1",
                                          "San Eduardo",
                                          "San Jos\u00e9 de Pare",
                                          "San Luis de Gaceno",
                                          "San Mateo",
                                          "San Miguel de Sema",
                                          "San Pablo de Borbur",
                                          "Santa Mar\u00eda",
                                          "Santa Rosa de Viterbo",
                                          "Santa Sof\u00eda",
                                          "Santana",
                                          "Sativanorte",
                                          "Sativasur",
                                          "Siachoque",
                                          "Soat\u00e1",
                                          "Socha",
                                          "Socot\u00e1",
                                          "Sogamoso",
                                          "Somondoco",
                                          "Sora",
                                          "Sorac\u00e1",
                                          "Sotaquir\u00e1",
                                          "Susac\u00f3n",
                                          "Sutamarch\u00e1n",
                                          "Sutatenza",
                                          "Tasco",
                                          "Tenza",
                                          "Tiban\u00e1",
                                          "Tibasosa",
                                          "Tinjac\u00e1",
                                          "Tipacoque",
                                          "Toca",
                                          "Tog\u00fc\u00ed",
                                          "T\u00f3paga",
                                          "Tota",
                                          "Tunja",
                                          "Tunungu\u00e1",
                                          "Turmequ\u00e9",
                                          "Tuta",
                                          "Tutaz\u00e1",
                                          "\u00dambita",
                                          "Ventaquemada",
                                          "Villa de Leyva",
                                          "Viracach\u00e1",
                                          "Zetaquira"
                                      ]
                                  },
                                  {  
                                      "id":6,
                                      "departamento":"Caldas",
                                      "ciudades":[  
                                          "Aguadas",
                                          "Anserma",
                                          "Aranzazu",
                                          "Belalc\u00e1zar",
                                          "Chinchin\u00e1",
                                          "Filadelfia",
                                          "La Dorada",
                                          "La Merced",
                                          "Manizales",
                                          "Manzanares",
                                          "Marmato",
                                          "Marquetalia",
                                          "Marulanda",
                                          "Neira",
                                          "Norcasia",
                                          "P\u00e1cora",
                                          "Palestina",
                                          "Pensilvania",
                                          "Riosucio",
                                          "Risaralda",
                                          "Salamina",
                                          "Saman\u00e1",
                                          "San Jos\u00e9",
                                          "Sup\u00eda",
                                          "Victoria",
                                          "Villamar\u00eda",
                                          "Viterbo"
                                      ]
                                  },
                                  {  
                                      "id":7,
                                      "departamento":"Caquet\u00e1",
                                      "ciudades":[  
                                          "Albania",
                                          "Bel\u00e9n de los Andaqu\u00edes",
                                          "Cartagena del Chair\u00e1",
                                          "Curillo",
                                          "El Doncello",
                                          "El Paujil",
                                          "Florencia",
                                          "La Monta\u00f1ita",
                                          "Mil\u00e1n",
                                          "Morelia",
                                          "Puerto Rico",
                                          "San Jos\u00e9 del Fragua",
                                          "San Vicente del Cagu\u00e1n",
                                          "Solano",
                                          "Solita",
                                          "Valpara\u00edso"
                                      ]
                                  },
                                  {  
                                      "id":8,
                                      "departamento":"Casanare",
                                      "ciudades":[  
                                          "Aguazul",
                                          "Ch\u00e1meza",
                                          "Hato Corozal",
                                          "La Salina",
                                          "Man\u00ed",
                                          "Monterrey",
                                          "Nunch\u00eda",
                                          "Orocu\u00e9",
                                          "Paz de Ariporo",
                                          "Pore",
                                          "Recetor",
                                          "Sabanalarga",
                                          "S\u00e1cama",
                                          "San Luis de Palenque",
                                          "T\u00e1mara",
                                          "Tauramena",
                                          "Trinidad",
                                          "Villanueva",
                                          "Yopal"
                                      ]
                                  },
                                  {  
                                      "id":9,
                                      "departamento":"Cauca",
                                      "ciudades":[  
                                          "Almaguer",
                                          "Argelia",
                                          "Balboa",
                                          "Bol\u00edvar",
                                          "Buenos Aires",
                                          "Cajib\u00edo",
                                          "Caldono",
                                          "Caloto",
                                          "Corinto",
                                          "El Tambo",
                                          "Florencia",
                                          "Guachen\u00e9",
                                          "Guap\u00ed",
                                          "Inz\u00e1",
                                          "Jambal\u00f3",
                                          "La Sierra",
                                          "La Vega",
                                          "L\u00f3pez de Micay",
                                          "Mercaderes",
                                          "Miranda",
                                          "Morales",
                                          "Padilla",
                                          "P\u00e1ez",
                                          "Pat\u00eda",
                                          "Piamonte",
                                          "Piendam\u00f3",
                                          "Popay\u00e1n",
                                          "Puerto Tejada",
                                          "Purac\u00e9",
                                          "Rosas",
                                          "San Sebasti\u00e1n",
                                          "Santa Rosa",
                                          "Santander de Quilichao",
                                          "Silvia",
                                          "Sotar\u00e1",
                                          "Su\u00e1rez",
                                          "Sucre",
                                          "Timb\u00edo",
                                          "Timbiqu\u00ed",
                                          "Torib\u00edo",
                                          "Totor\u00f3",
                                          "Villa Rica"
                                      ]
                                  },
                                  {  
                                      "id":10,
                                      "departamento":"Cesar",
                                      "ciudades":[  
                                          "Aguachica",
                                          "Agust\u00edn Codazzi",
                                          "Astrea",
                                          "Becerril",
                                          "Bosconia",
                                          "Chimichagua",
                                          "Chiriguan\u00e1",
                                          "Curuman\u00ed",
                                          "El Copey",
                                          "El Paso",
                                          "Gamarra",
                                          "Gonz\u00e1lez",
                                          "La Gloria (Cesar)",
                                          "La Jagua de Ibirico",
                                          "La Paz",
                                          "Manaure Balc\u00f3n del Cesar",
                                          "Pailitas",
                                          "Pelaya",
                                          "Pueblo Bello",
                                          "R\u00edo de Oro",
                                          "San Alberto",
                                          "San Diego",
                                          "San Mart\u00edn",
                                          "Tamalameque",
                                          "Valledupar"
                                      ]
                                  },
                                  {  
                                      "id":11,
                                      "departamento":"Choc\u00f3",
                                      "ciudades":[  
                                          "Acand\u00ed",
                                          "Alto Baud\u00f3",
                                          "Bagad\u00f3",
                                          "Bah\u00eda Solano",
                                          "Bajo Baud\u00f3",
                                          "Bojay\u00e1",
                                          "Cant\u00f3n de San Pablo",
                                          "C\u00e9rtegui",
                                          "Condoto",
                                          "El Atrato",
                                          "El Carmen de Atrato",
                                          "El Carmen del Dari\u00e9n",
                                          "Istmina",
                                          "Jurad\u00f3",
                                          "Litoral de San Juan",
                                          "Llor\u00f3",
                                          "Medio Atrato",
                                          "Medio Baud\u00f3",
                                          "Medio San Juan",
                                          "N\u00f3vita",
                                          "Nuqu\u00ed",
                                          "Quibd\u00f3",
                                          "R\u00edo Ir\u00f3",
                                          "R\u00edo Quito",
                                          "Riosucio",
                                          "San Jos\u00e9 del Palmar",
                                          "Sip\u00ed",
                                          "Tad\u00f3",
                                          "Uni\u00f3n Panamericana",
                                          "Ungu\u00eda"
                                      ]
                                  },
                                  {  
                                      "id":12,
                                      "departamento":"Cundinamarca",
                                      "ciudades":[  
                                          "Agua de Dios",
                                          "Alb\u00e1n",
                                          "Anapoima",
                                          "Anolaima",
                                          "Apulo",
                                          "Arbel\u00e1ez",
                                          "Beltr\u00e1n",
                                          "Bituima",
                                          "Bogot\u00e1",
                                          "Bojac\u00e1",
                                          "Cabrera",
                                          "Cachipay",
                                          "Cajic\u00e1",
                                          "Caparrap\u00ed",
                                          "C\u00e1queza",
                                          "Carmen de Carupa",
                                          "Chaguan\u00ed",
                                          "Ch\u00eda",
                                          "Chipaque",
                                          "Choach\u00ed",
                                          "Chocont\u00e1",
                                          "Cogua",
                                          "Cota",
                                          "Cucunub\u00e1",
                                          "El Colegio",
                                          "El Pe\u00f1\u00f3n",
                                          "El Rosal",
                                          "Facatativ\u00e1",
                                          "F\u00f3meque",
                                          "Fosca",
                                          "Funza",
                                          "F\u00faquene",
                                          "Fusagasug\u00e1",
                                          "Gachal\u00e1",
                                          "Gachancip\u00e1",
                                          "Gachet\u00e1",
                                          "Gama",
                                          "Girardot",
                                          "Granada",
                                          "Guachet\u00e1",
                                          "Guaduas",
                                          "Guasca",
                                          "Guataqu\u00ed",
                                          "Guatavita",
                                          "Guayabal de S\u00edquima",
                                          "Guayabetal",
                                          "Guti\u00e9rrez",
                                          "Jerusal\u00e9n",
                                          "Jun\u00edn",
                                          "La Calera",
                                          "La Mesa",
                                          "La Palma",
                                          "La Pe\u00f1a",
                                          "La Vega",
                                          "Lenguazaque",
                                          "Machet\u00e1",
                                          "Madrid",
                                          "Manta",
                                          "Medina",
                                          "Mosquera",
                                          "Nari\u00f1o",
                                          "Nemoc\u00f3n",
                                          "Nilo",
                                          "Nimaima",
                                          "Nocaima",
                                          "Pacho",
                                          "Paime",
                                          "Pandi",
                                          "Paratebueno",
                                          "Pasca",
                                          "Puerto Salgar",
                                          "Pul\u00ed",
                                          "Quebradanegra",
                                          "Quetame",
                                          "Quipile",
                                          "Ricaurte",
                                          "San Antonio del Tequendama",
                                          "San Bernardo",
                                          "San Cayetano",
                                          "San Francisco",
                                          "San Juan de Rioseco",
                                          "Sasaima",
                                          "Sesquil\u00e9",
                                          "Sibat\u00e9",
                                          "Silvania",
                                          "Simijaca",
                                          "Soacha",
                                          "Sop\u00f3",
                                          "Subachoque",
                                          "Suesca",
                                          "Supat\u00e1",
                                          "Susa",
                                          "Sutatausa",
                                          "Tabio",
                                          "Tausa",
                                          "Tena",
                                          "Tenjo",
                                          "Tibacuy",
                                          "Tibirita",
                                          "Tocaima",
                                          "Tocancip\u00e1",
                                          "Topaip\u00ed",
                                          "Ubal\u00e1",
                                          "Ubaque",
                                          "Ubat\u00e9",
                                          "Une",
                                          "\u00datica",
                                          "Venecia",
                                          "Vergara",
                                          "Vian\u00ed",
                                          "Villag\u00f3mez",
                                          "Villapinz\u00f3n",
                                          "Villeta",
                                          "Viot\u00e1",
                                          "Yacop\u00ed",
                                          "Zipac\u00f3n",
                                          "Zipaquir\u00e1"
                                      ]
                                  },
                                  {  
                                      "id":13,
                                      "departamento":"C\u00f3rdoba",
                                      "ciudades":[  
                                          "Ayapel",
                                          "Buenavista",
                                          "Canalete",
                                          "Ceret\u00e9",
                                          "Chim\u00e1",
                                          "Chin\u00fa",
                                          "Ci\u00e9naga de Oro",
                                          "Cotorra",
                                          "La Apartada",
                                          "Lorica",
                                          "Los C\u00f3rdobas",
                                          "Momil",
                                          "Montel\u00edbano",
                                          "Monter\u00eda",
                                          "Mo\u00f1itos",
                                          "Planeta Rica",
                                          "Pueblo Nuevo",
                                          "Puerto Escondido",
                                          "Puerto Libertador",
                                          "Pur\u00edsima",
                                          "Sahag\u00fan",
                                          "San Andr\u00e9s de Sotavento",
                                          "San Antero",
                                          "San Bernardo del Viento",
                                          "San Carlos",
                                          "San Jos\u00e9 de Ur\u00e9",
                                          "San Pelayo",
                                          "Tierralta",
                                          "Tuch\u00edn",
                                          "Valencia"
                                      ]
                                  },
                                  {  
                                      "id":14,
                                      "departamento":"Guain\u00eda",
                                      "ciudades":[  
                                          "In\u00edrida"
                                      ]
                                  },
                                  {  
                                      "id":15,
                                      "departamento":"Guaviare",
                                      "ciudades":[  
                                          "Calamar",
                                          "El Retorno",
                                          "Miraflores",
                                          "San Jos\u00e9 del Guaviare"
                                      ]
                                  },
                                  {  
                                      "id":16,
                                      "departamento":"Huila",
                                      "ciudades":[  
                                          "Acevedo",
                                          "Agrado",
                                          "Aipe",
                                          "Algeciras",
                                          "Altamira",
                                          "Baraya",
                                          "Campoalegre",
                                          "Colombia",
                                          "El Pital",
                                          "El\u00edas",
                                          "Garz\u00f3n",
                                          "Gigante",
                                          "Guadalupe",
                                          "Hobo",
                                          "\u00cdquira",
                                          "Isnos",
                                          "La Argentina",
                                          "La Plata",
                                          "N\u00e1taga",
                                          "Neiva",
                                          "Oporapa",
                                          "Paicol",
                                          "Palermo",
                                          "Palestina",
                                          "Pitalito",
                                          "Rivera",
                                          "Saladoblanco",
                                          "San Agust\u00edn",
                                          "Santa Mar\u00eda",
                                          "Suaza",
                                          "Tarqui",
                                          "Tello",
                                          "Teruel",
                                          "Tesalia",
                                          "Timan\u00e1",
                                          "Villavieja",
                                          "Yaguar\u00e1"
                                      ]
                                  },
                                  {  
                                      "id":17,
                                      "departamento":"La Guajira",
                                      "ciudades":[  
                                          "Albania",
                                          "Barrancas",
                                          "Dibulla",
                                          "Distracci\u00f3n",
                                          "El Molino",
                                          "Fonseca",
                                          "Hatonuevo",
                                          "La Jagua del Pilar",
                                          "Maicao",
                                          "Manaure",
                                          "Riohacha",
                                          "San Juan del Cesar",
                                          "Uribia",
                                          "Urumita",
                                          "Villanueva"
                                      ]
                                  },
                                  {  
                                      "id":18,
                                      "departamento":"Magdalena",
                                      "ciudades":[  
                                          "Algarrobo",
                                          "Aracataca",
                                          "Ariguan\u00ed",
                                          "Cerro de San Antonio",
                                          "Chibolo",
                                          "Chibolo",
                                          "Ci\u00e9naga",
                                          "Concordia",
                                          "El Banco",
                                          "El Pi\u00f1\u00f3n",
                                          "El Ret\u00e9n",
                                          "Fundaci\u00f3n",
                                          "Guamal",
                                          "Nueva Granada",
                                          "Pedraza",
                                          "Piji\u00f1o del Carmen",
                                          "Pivijay",
                                          "Plato",
                                          "Pueblo Viejo",
                                          "Remolino",
                                          "Sabanas de San \u00c1ngel",
                                          "Salamina",
                                          "San Sebasti\u00e1n de Buenavista",
                                          "San Zen\u00f3n",
                                          "Santa Ana",
                                          "Santa B\u00e1rbara de Pinto",
                                          "Santa Marta",
                                          "Sitionuevo",
                                          "Tenerife",
                                          "Zapay\u00e1n",
                                          "Zona Bananera"
                                      ]
                                  },
                                  {  
                                      "id":19,
                                      "departamento":"Meta",
                                      "ciudades":[  
                                          "Acac\u00edas",
                                          "Barranca de Up\u00eda",
                                          "Cabuyaro",
                                          "Castilla la Nueva",
                                          "Cubarral",
                                          "Cumaral",
                                          "El Calvario",
                                          "El Castillo",
                                          "El Dorado",
                                          "Fuente de Oro",
                                          "Granada",
                                          "Guamal",
                                          "La Macarena",
                                          "La Uribe",
                                          "Lejan\u00edas",
                                          "Mapirip\u00e1n",
                                          "Mesetas",
                                          "Puerto Concordia",
                                          "Puerto Gait\u00e1n",
                                          "Puerto Lleras",
                                          "Puerto L\u00f3pez",
                                          "Puerto Rico",
                                          "Restrepo",
                                          "San Carlos de Guaroa",
                                          "San Juan de Arama",
                                          "San Juanito",
                                          "San Mart\u00edn",
                                          "Villavicencio",
                                          "Vista Hermosa"
                                      ]
                                  },
                                  {  
                                      "id":20,
                                      "departamento":"Nari\u00f1o",
                                      "ciudades":[  
                                          "Aldana",
                                          "Ancuy\u00e1",
                                          "Arboleda",
                                          "Barbacoas",
                                          "Bel\u00e9n",
                                          "Buesaco",
                                          "Chachag\u00fc\u00ed",
                                          "Col\u00f3n",
                                          "Consac\u00e1",
                                          "Contadero",
                                          "C\u00f3rdoba",
                                          "Cuaspud",
                                          "Cumbal",
                                          "Cumbitara",
                                          "El Charco",
                                          "El Pe\u00f1ol",
                                          "El Rosario",
                                          "El Tabl\u00f3n",
                                          "El Tambo",
                                          "Francisco Pizarro",
                                          "Funes",
                                          "Guachucal",
                                          "Guaitarilla",
                                          "Gualmat\u00e1n",
                                          "Iles",
                                          "Imu\u00e9s",
                                          "Ipiales",
                                          "La Cruz",
                                          "La Florida",
                                          "La Llanada",
                                          "La Tola",
                                          "La Uni\u00f3n",
                                          "Leiva",
                                          "Linares",
                                          "Los Andes",
                                          "Mag\u00fc\u00ed Pay\u00e1n",
                                          "Mallama",
                                          "Mosquera",
                                          "Nari\u00f1o",
                                          "Olaya Herrera",
                                          "Ospina",
                                          "Pasto",
                                          "Policarpa",
                                          "Potos\u00ed",
                                          "Providencia",
                                          "Puerres",
                                          "Pupiales",
                                          "Ricaurte",
                                          "Roberto Pay\u00e1n",
                                          "Samaniego",
                                          "San Bernardo",
                                          "San Jos\u00e9 de Alb\u00e1n",
                                          "San Lorenzo",
                                          "San Pablo",
                                          "San Pedro de Cartago",
                                          "Sandon\u00e1",
                                          "Santa B\u00e1rbara",
                                          "Santacruz",
                                          "Sapuyes",
                                          "Taminango",
                                          "Tangua",
                                          "Tumaco",
                                          "T\u00faquerres",
                                          "Yacuanquer"
                                      ]
                                  },
                                  {  
                                      "id":21,
                                      "departamento":"Norte de Santander",
                                      "ciudades":[  
                                          "\u00c1brego",
                                          "Arboledas",
                                          "Bochalema",
                                          "Bucarasica",
                                          "C\u00e1chira",
                                          "C\u00e1cota",
                                          "Chin\u00e1cota",
                                          "Chitag\u00e1",
                                          "Convenci\u00f3n",
                                          "C\u00facuta",
                                          "Cucutilla",
                                          "Duran\u00eda",
                                          "El Carmen",
                                          "El Tarra",
                                          "El Zulia",
                                          "Gramalote",
                                          "Hacar\u00ed",
                                          "Herr\u00e1n",
                                          "La Esperanza",
                                          "La Playa de Bel\u00e9n",
                                          "Labateca",
                                          "Los Patios",
                                          "Lourdes",
                                          "Mutiscua",
                                          "Oca\u00f1a",
                                          "Pamplona",
                                          "Pamplonita",
                                          "Puerto Santander",
                                          "Ragonvalia",
                                          "Salazar de Las Palmas",
                                          "San Calixto",
                                          "San Cayetano",
                                          "Santiago",
                                          "Santo Domingo de Silos",
                                          "Sardinata",
                                          "Teorama",
                                          "Tib\u00fa",
                                          "Toledo",
                                          "Villa Caro",
                                          "Villa del Rosario"
                                      ]
                                  },
                                  {  
                                      "id":22,
                                      "departamento":"Putumayo",
                                      "ciudades":[  
                                          "Col\u00f3n",
                                          "Mocoa",
                                          "Orito",
                                          "Puerto As\u00eds",
                                          "Puerto Caicedo",
                                          "Puerto Guzm\u00e1n",
                                          "Puerto Legu\u00edzamo",
                                          "San Francisco",
                                          "San Miguel",
                                          "Santiago",
                                          "Sibundoy",
                                          "Valle del Guamuez",
                                          "Villagarz\u00f3n"
                                      ]
                                  },
                                  {  
                                      "id":23,
                                      "departamento":"Quind\u00edo",
                                      "ciudades":[  
                                          "Armenia",
                                          "Buenavista",
                                          "Calarc\u00e1",
                                          "Circasia",
                                          "C\u00f3rdoba",
                                          "Filandia",
                                          "G\u00e9nova",
                                          "La Tebaida",
                                          "Montenegro",
                                          "Pijao",
                                          "Quimbaya",
                                          "Salento"
                                      ]
                                  },
                                  {  
                                      "id":24,
                                      "departamento":"Risaralda",
                                      "ciudades":[  
                                          "Ap\u00eda",
                                          "Balboa",
                                          "Bel\u00e9n de Umbr\u00eda",
                                          "Dosquebradas",
                                          "Gu\u00e1tica",
                                          "La Celia",
                                          "La Virginia",
                                          "Marsella",
                                          "Mistrat\u00f3",
                                          "Pereira",
                                          "Pueblo Rico",
                                          "Quinch\u00eda",
                                          "Santa Rosa de Cabal",
                                          "Santuario"
                                      ]
                                  },
                                  {  
                                      "id":25,
                                      "departamento":"San Andr\u00e9s y Providencia",
                                      "ciudades":[  
                                          "Providencia y Santa Catalina Islas",
                                          "San Andr\u00e9s"
                                      ]
                                  },
                                  {  
                                      "id":26,
                                      "departamento":"Santander",
                                      "ciudades":[  
                                          "Aguada",
                                          "Albania",
                                          "Aratoca",
                                          "Barbosa",
                                          "Barichara",
                                          "Barrancabermeja",
                                          "Betulia",
                                          "Bol\u00edvar",
                                          "Bucaramanga",
                                          "Cabrera",
                                          "California",
                                          "Capitanejo",
                                          "Carcas\u00ed",
                                          "Cepit\u00e1",
                                          "Cerrito",
                                          "Charal\u00e1",
                                          "Charta",
                                          "Chima",
                                          "Chipat\u00e1",
                                          "Cimitarra",
                                          "Concepci\u00f3n",
                                          "Confines",
                                          "Contrataci\u00f3n",
                                          "Coromoro",
                                          "Curit\u00ed",
                                          "El Carmen de Chucur\u00ed",
                                          "El Guacamayo",
                                          "El Pe\u00f1\u00f3n",
                                          "El Play\u00f3n",
                                          "El Socorro",
                                          "Encino",
                                          "Enciso",
                                          "Flori\u00e1n",
                                          "Floridablanca",
                                          "Gal\u00e1n",
                                          "G\u00e1mbita",
                                          "Gir\u00f3n",
                                          "Guaca",
                                          "Guadalupe",
                                          "Guapot\u00e1",
                                          "Guavat\u00e1",
                                          "G\u00fcepsa",
                                          "Hato",
                                          "Jes\u00fas Mar\u00eda",
                                          "Jord\u00e1n",
                                          "La Belleza",
                                          "La Paz",
                                          "Land\u00e1zuri",
                                          "Lebrija",
                                          "Los Santos",
                                          "Macaravita",
                                          "M\u00e1laga",
                                          "Matanza",
                                          "Mogotes",
                                          "Molagavita",
                                          "Ocamonte",
                                          "Oiba",
                                          "Onzaga",
                                          "Palmar",
                                          "Palmas del Socorro",
                                          "P\u00e1ramo",
                                          "Piedecuesta",
                                          "Pinchote",
                                          "Puente Nacional",
                                          "Puerto Parra",
                                          "Puerto Wilches",
                                          "Rionegro",
                                          "Sabana de Torres",
                                          "San Andr\u00e9s",
                                          "San Benito",
                                          "San Gil",
                                          "San Joaqu\u00edn",
                                          "San Jos\u00e9 de Miranda",
                                          "San Miguel",
                                          "San Vicente de Chucur\u00ed",
                                          "Santa B\u00e1rbara",
                                          "Santa Helena del Op\u00f3n",
                                          "Simacota",
                                          "Suaita",
                                          "Sucre",
                                          "Surat\u00e1",
                                          "Tona",
                                          "Valle de San Jos\u00e9",
                                          "V\u00e9lez",
                                          "Vetas",
                                          "Villanueva",
                                          "Zapatoca"
                                      ]
                                  },
                                  {  
                                      "id":27,
                                      "departamento":"Sucre",
                                      "ciudades":[  
                                          "Buenavista",
                                          "Caimito",
                                          "Chal\u00e1n",
                                          "Colos\u00f3",
                                          "Corozal",
                                          "Cove\u00f1as",
                                          "El Roble",
                                          "Galeras",
                                          "Guaranda",
                                          "La Uni\u00f3n",
                                          "Los Palmitos",
                                          "Majagual",
                                          "Morroa",
                                          "Ovejas",
                                          "Sampu\u00e9s",
                                          "San Antonio de Palmito",
                                          "San Benito Abad",
                                          "San Juan de Betulia",
                                          "San Marcos",
                                          "San Onofre",
                                          "San Pedro",
                                          "Sinc\u00e9",
                                          "Sincelejo",
                                          "Sucre",
                                          "Tol\u00fa",
                                          "Tol\u00fa Viejo"
                                      ]
                                  },
                                  {  
                                      "id":28,
                                      "departamento":"Tolima",
                                      "ciudades":[  
                                          "Alpujarra",
                                          "Alvarado",
                                          "Ambalema",
                                          "Anzo\u00e1tegui",
                                          "Armero",
                                          "Ataco",
                                          "Cajamarca",
                                          "Carmen de Apical\u00e1",
                                          "Casabianca",
                                          "Chaparral",
                                          "Coello",
                                          "Coyaima",
                                          "Cunday",
                                          "Dolores",
                                          "El Espinal",
                                          "Fal\u00e1n",
                                          "Flandes",
                                          "Fresno",
                                          "Guamo",
                                          "Herveo",
                                          "Honda",
                                          "Ibagu\u00e9",
                                          "Icononzo",
                                          "L\u00e9rida",
                                          "L\u00edbano",
                                          "Mariquita",
                                          "Melgar",
                                          "Murillo",
                                          "Natagaima",
                                          "Ortega",
                                          "Palocabildo",
                                          "Piedras",
                                          "Planadas",
                                          "Prado",
                                          "Purificaci\u00f3n",
                                          "Rioblanco",
                                          "Roncesvalles",
                                          "Rovira",
                                          "Salda\u00f1a",
                                          "San Antonio",
                                          "San Luis",
                                          "Santa Isabel",
                                          "Su\u00e1rez",
                                          "Valle de San Juan",
                                          "Venadillo",
                                          "Villahermosa",
                                          "Villarrica"
                                      ]
                                  },
                                  {  
                                      "id":29,
                                      "departamento":"Valle del Cauca",
                                      "ciudades":[  
                                          "Alcal\u00e1",
                                          "Andaluc\u00eda",
                                          "Ansermanuevo",
                                          "Argelia",
                                          "Bol\u00edvar",
                                          "Buenaventura",
                                          "Buga",
                                          "Bugalagrande",
                                          "Caicedonia",
                                          "Cali",
                                          "Calima",
                                          "Candelaria",
                                          "Cartago",
                                          "Dagua",
                                          "El \u00c1guila",
                                          "El Cairo",
                                          "El Cerrito",
                                          "El Dovio",
                                          "Florida",
                                          "Ginebra",
                                          "Guacar\u00ed",
                                          "Jamund\u00ed",
                                          "La Cumbre",
                                          "La Uni\u00f3n",
                                          "La Victoria",
                                          "Obando",
                                          "Palmira",
                                          "Pradera",
                                          "Restrepo",
                                          "Riofr\u00edo",
                                          "Roldanillo",
                                          "San Pedro",
                                          "Sevilla",
                                          "Toro",
                                          "Trujillo",
                                          "Tulu\u00e1",
                                          "Ulloa",
                                          "Versalles",
                                          "Vijes",
                                          "Yotoco",
                                          "Yumbo",
                                          "Zarzal"
                                      ]
                                  },
                                  {  
                                      "id":30,
                                      "departamento":"Vaup\u00e9s",
                                      "ciudades":[  
                                          "Carur\u00fa",
                                          "Mit\u00fa",
                                          "Taraira"
                                      ]
                                  },
                                  {  
                                      "id":31,
                                      "departamento":"Vichada",
                                      "ciudades":[  
                                          "Cumaribo",
                                          "La Primavera",
                                          "Puerto Carre\u00f1o",
                                          "Santa Rosal\u00eda"
                                      ]
                                  }
                              ]
                    return dto;
                },
                }
            }
</script>
