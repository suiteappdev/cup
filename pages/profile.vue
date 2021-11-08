<template>
    <div class="center-grid">
        <vs-row style="margin-top: 100px;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8" style="padding: 0px 0px 0px 140px;">
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
                            <vs-td>Cedula:</vs-td><vs-td>1103098183</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Fecha de expedicion:</vs-td><vs-td>Corozal</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ciudad de expedicion</vs-td> <vs-td>Corozal</vs-td>
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
                            <vs-td>Departamento:</vs-td><vs-td>Sucre</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ciudad:</vs-td><vs-td>Corozal</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Dirección residencial</vs-td><vs-td>Kra 26 A # 35 - 56</vs-td>
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
                            <vs-td>Nivel de estudio:</vs-td><vs-td>Tecnologo</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Actualmente soy:</vs-td><vs-td>Independiente</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Ingresos mensuales</vs-td> <vs-td>1.500.000 a 2.500.000</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Gastos mensuales</vs-td> <vs-td>1.000.000 a 1.500.000</vs-td>
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
                            <vs-td>¿Cuantas cuentas bancarias tienes?:</vs-td><vs-td>1</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Cuantas tarjetas de crédito tienes?:</vs-td><vs-td>0</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Cupo actual en todos tus productos financieros</vs-td> <vs-td>5.000.000</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Cupo utilizado</vs-td> <vs-td>1.500.000</vs-td>
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
                            <vs-td>¿Tienes suscripción en Datacrédito o TransUnion?:</vs-td><vs-td>no</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Estas reportado negativamente? (si, no, no se)</vs-td><vs-td>no lo se</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Le gustaría que uno de nuestros asesores lo consulte en las centrales de riesgo para brindarle una información mas completa</vs-td> <vs-td>si</vs-td>
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
                            <vs-td>¿Tiene RUT?:</vs-td><vs-td>si</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Actividad principal en el RUT:</vs-td><vs-td>45</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>¿Declara renta?:</vs-td> <vs-td>si</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Total Patrimonio bruto:</vs-td> <vs-td>68.000.000</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Total deudas</vs-td> <vs-td>18.000.000</vs-td>
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
                    <vs-card style="margin-bottom: 30px!important;padding: 0px 0px 50px 80px;">
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
                                        Email: {{correo}}</p>
                                    <br />
                                    <p>
                                     <template>
                                        <i class='bx bx-phone-outgoing'></i>
                                    </template>
                                        {{cellamadas}}</p>
                                    <br />
                                    <p>
                                     <template>
                                        <i class='bx bxl-whatsapp' ></i>
                                    </template>
                                        {{celwhatsapp}}</p>
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

   data(){
        return{
                    name : 'Mauricio Jose Castro Vital', 
                    image :`${require(`~/assets/images/foto5.png`)}`, 
                    correo :'majoca10@gmail.com',
                    username : '1103098183',
                    fnacimiento : '23-12-1986',
                    cellamadas : '3004140039',
                    celwhatsapp : '3004140039',
                    sexo:'masculino',
                    estadocivil:'soltero',
                            text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
                
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
