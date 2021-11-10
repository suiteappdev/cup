<template>
    <div class="center-grid">
        <vs-row style="margin-top: 100px;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8" style="padding: 0px 0px 0px 15px;">
                <template>
                <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-1 variant="info">Informacion Basica</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>Cedula:</vs-td><vs-td>{{username}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Fecha de expedicion:</vs-td><vs-td>{{fexpedicion}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ciudad de expedicion</vs-td> <vs-td>{{ciudadexp}}</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-2 variant="info">Información residencial</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>Departamento:</vs-td><vs-td>{{departamento}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ciudad:</vs-td><vs-td>{{ciudad}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Dirección residencial</vs-td><vs-td>{{direccion}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Tipo de vivienda</vs-td><vs-td>Familiar</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Estrato</vs-td><vs-td>2</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-3 variant="info">Información laboral</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>Nivel de estudio:</vs-td><vs-td>{{nestudio}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Actualmente soy:</vs-td><vs-td>{{actsoy}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ingresos mensuales</vs-td> <vs-td>{{imensual}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Gastos mensuales</vs-td> <vs-td>{{gtomensual}}</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-4 variant="info">Información bancaria</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>¿Cuantas cuentas bancarias tienes?:</vs-td><vs-td>{{ctasbancarias}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Cuantas tarjetas de crédito tienes?:</vs-td><vs-td>{{tartienes}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Cupo actual en todos tus productos financieros</vs-td> <vs-td>{{cupototal}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Cupo utilizado</vs-td> <vs-td>{{cuantodebes}}</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-5 variant="info">Información en las centrales de riesgo</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>¿Tienes suscripción en Datacrédito o TransUnion?:</vs-td><vs-td>{{sdatacre}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Estas reportado negativamente? (si, no, no se)</vs-td><vs-td>{{reportn}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Le gustaría que uno de nuestros asesores lo consulte en las centrales de riesgo para brindarle una información mas completa</vs-td> <vs-td>{{sdatacresi}}</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <vs-button block v-b-toggle.accordion-6 variant="info">Información contable</vs-button>
                    </b-card-header>
                    <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                    <vs-table style="padding: 0px 70px 0px 70px;">
                        <template #thead>
                        </template>
                        <template #tbody>
                        <vs-tr>
                            <vs-td>¿Tiene RUT?:</vs-td><vs-td>{{rut}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Actividad principal en el RUT:</vs-td><vs-td>{{arut}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Declara renta?:</vs-td> <vs-td>si</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Total Patrimonio bruto:</vs-td> <vs-td>{{tpatrim}}</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Total deudas</vs-td> <vs-td>{{tdeudas}}</vs-td>
                        </vs-tr>
                        </template>
                    </vs-table>
                        </b-card-body>
                    </b-collapse>
                    </b-card>
                </div>
                </template>   
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
                    <vs-card style="margin-bottom: 30px!important;padding: 0px 30px 40px 30px;">
                                <template #title>
                                    <h3> {{ name }}</h3>
                                </template>
                                <template #img>
                                    <img :src="image" alt="">
                                </template>
                                <template #text>
                                    <p>
                                    <template>
                                        <i class='bx bx-happy' ></i>
                                    </template>
                                        {{fnacimiento}}</p>
                                    <br />
                                    <p>
                                    <p>
                                    <template>
                                        <i class='bx bx-mail-send' ></i>
                                    </template>
                                        {{correo}}</p>
                                    <br />
                                    <p>
                                     <template>
                                        <i class='bx bx-phone-outgoing'></i>
                                    </template>
                                        {{cllamadas}}</p>
                                    <br />
                                    <p>
                                     <template>
                                        <i class='bx bxl-whatsapp' ></i>
                                    </template>
                                        {{cwasap}}</p>
                                    <br />
                                    <p>
                                     <template>
                                        <i class='bx bx-street-view'></i>
                                    </template>
                                        {{sexo}}</p>
                                    <br />
                                        <p>
                                     <template>
                                        <i class='bx bx-radio-circle-marked'></i>
                                    </template>
                                            {{estadocivil}}</p>
                                    <br />
                                    
                                    <vs-button primary icon @click="$router.push('/testimonio/?cliente=' + col.id)">
                                        Conocer Historia
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
            </vs-col>
        </vs-row>
       </div>
</template>
<script>
export default {

     async mounted() {
                    const metoken =  window.localStorage.getItem('jwt')
                    let meuser = window.localStorage.getItem('username')
                    this.username = meuser
                    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                    let res = await this.$axios.get("/perfil/username/" + this.username);
                    let medata = res.data[0]
                    let nombrec = medata.nombrec
                    this.name = nombrec
                    let fnacimiento = medata.fnacimiento
                    this.fnacimiento = fnacimiento
                    let axcorreo = medata.email
                    this.correo = axcorreo
                    let axcllamadas = medata.cllamadas
                    this.cllamadas = axcllamadas
                    let axcwasap = medata.cwasap
                    this.cwasap = axcwasap
                    let axsexo = medata.sexo
                    this.sexo = axsexo
                    let axestadocivil = medata.estadocivil
                    this.estadocivil =  axestadocivil
                    let axcedula = medata.username
                    this.username = axcedula
                    let axfexpedicion = medata.fexpedicion
                    this.fexpedicion = axfexpedicion
                    let axciudadexp = medata.ciudadexp
                    this.ciudadexp = axciudadexp
                    let axdepartamento = medata.departamento
                    this.departamento = axdepartamento
                    let axciudad = medata.ciudad
                    this.ciudad = axciudad
                    let axdireccion = medata.direccion
                    this.direccion = axdireccion
                    let axnestudio = medata.nestudio
                    this.nestudio = axnestudio
                    let axactsoy = medata.actsoy
                    this.actsoy = axactsoy
                    let aximensuales = medata.imensual
                    this.imensual = aximensuales
                    let axgtomensual = medata.gtomensual
                    this.gtomensual = axgtomensual
                    let axctasbancarias = medata.ctasbancarias
                    this.ctasbancarias = axctasbancarias
                    let axtartienes = medata.tartienes
                    this.tartienes = axtartienes
                    let axcuantodebes = medata.cuantodebes
                    this.cuantodebes = axcuantodebes
                    let axcupototal = medata.cupototal
                    this.cupototal = axcupototal
                    let axsdatacre = medata.sdatacre
                    this.sdatacre = axsdatacre
                    let axsdatacresi = medata.sdatacresi
                    this.sdatacresi = axsdatacresi
                    let axreportn = medata.sdatacre
                    this.reportn = axreportn
                    let axrut = medata.rut
                    this.rut = axrut
                    let axarut = medata.arut
                    this.arut = axarut
                    let axdrenta = medata.drenta
                    this.drenta = axdrenta
                    let axtpatrim = medata.tpatrim
                    this.tpatrim = axtpatrim
                    let axtdeudas = medata.tdeudas
                    this.tdeudas = axtdeudas
                },

   data(){
        return{
                    nombrec:'',
                    name : '', 
                    image :`${require(`~/assets/images/foto5.png`)}`, 
                    correo :'',
                    username : '',
                    fnacimiento : '',
                    cllamadas : '',
                    cwasap : '',
                    sexo:'',
                    estadocivil:'',
                    cedula : '',
                    fexpedicion: '',
                    ciudadexp:'',
                    departamento: '',
                    ciudad:'',
                    direccion:'',
                    nestudio:'',
                    actsoy:'',
                    imensual:'',
                    gtomensual:'',
                    tartienes:'',
                    cuantodebes:'',
                    ctasbancarias:'',
                    cupototal:'',
                    sdatacre:'',
                    sdatacresi:'',
                    reportn:'',
                    rut:'',
                    arut:'',
                    drenta:'',
                    tpatrim:'',
                    tdeudas:'',
                    text: ''
        }
                


                    
    }
}
</script>
<style scoped>
.btn{
    margin: 3px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
}

.btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.btn-block {
    display: block;
    width: 100%;
}

.center-grid{

    height: 100%;
    width: 100%;

}

.inf-user{

    height: auto;
    width: 100%;
    padding-top: 83px;
    background-color: cadetblue;
}

.card-user{

    height: auto;
    width: 100%;
    padding-top: 83px;
    background-color: chocolate;
}
</style>
