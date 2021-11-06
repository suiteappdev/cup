 <template>
        <div class="center-grid" style="padding-left: 20%; padding-right: 20%; padding-top: 30%; padding-bottom: 40%;">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <h1 class="form-title">Formulario de actualización Imformacion Basica</h1>
                                    <p style="margin-bottom:30px;">Por favor complete todo el formulario para asesorte de mejor manera</p>
                                    <div class="form-control">
                                        <label   for="">Nombre completo</label>
                                        <vs-input style="margin-top:10px;" v-model="nombrec" placeholder="Nombre completo" shadow>
                                            <template #icon>
                                                <i class='bx bx-user'></i>
                                            </template>
                                            <template v-if="nombrec == '' && nombrec.length < 9" #message-warn>
                                                Digite su nombre completo
                                            </template>
                                            <template v-if="nombrec.length >= 10" #message-success>
                                                ok
                                            </template>
                                        </vs-input>
                                    <!-- Componente-->
                                        <template>
                                            <div class="form-control" style="margin-top:15px">
                                                <label  style="margin-bottom:10px;" for="">Fecha de nacimiento</label>
                                                <div style="display:flex;margin-top:10px;
                                                ">
                                                                                         
                                                <vs-select style="padding-left: 10px;"
                                                    placeholder="Año"
                                                    v-model="fnano"
                                                >
                                                <vs-option v-for="(a, index) in years()" :key="index" :label="a" :value="a">
                                                    {{a}}
                                                </vs-option>
                                                <template v-if="fnano == ''" #message-warn>
                                                    Año es requerido
                                                </template>
                                                <template v-if="fnano" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                                <vs-select  style="padding-left: 10px;"
                                                    placeholder="Mes"
                                                    v-model="fnmes"
                                                >
                                                <vs-option v-for="(m, index) in months()" :key="index" :label="m.mes" :value="m.id">
                                                    {{m.mes}}
                                                </vs-option>
                                                <template v-if="fnmes == ''" #message-warn>
                                                    Mes es requerido
                                                </template>
                                                 <template v-if="fnmes" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                                <vs-select style="padding-left: 10px;"
                                                    placeholder="Dia"
                                                    v-model="fndia"
                                                >
                                                <vs-option v-for="(d, index) in days()" :key="index" :label="d" :value="d">
                                                    {{d}}
                                                </vs-option>
                                                <template v-if="fndia == ''" #message-warn>
                                                    Dia es requerido
                                                </template>
                                                <template v-if="fndia" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                            </div>
                                            </div>
                                        </template>
                                    <!-- Componente-->
                                    <!--<inf-sexo />-->
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
                                                <template v-if="sexo == ''" #message-warn>
                                                    Sexo es requerido
                                                </template>
                                                <template v-if="sexo" #message-success>
                                                    ok
                                                </template>
                                            </vs-select>
                                        </div>
                                    </div>
                                    </template>
                                    <!-- Componente-->
                                    <!--<inf-estadocivil />-->
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
                                                <template v-if="estadocivil == ''" #message-warn>
                                                    Estado civil es requerido
                                                </template>
                                                <template v-if="estadocivil" #message-success>
                                                    ok
                                                </template>
                                            </vs-select>
                                        </div>
                                        </div>
                                    </template>
                                    <!-- Componente-->
                                    <!--<inf-username />-->
                                        <vs-row>
                                        <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                        <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                            <label  style="margin-bottom:10px;" for="">Cedula</label>
                                            <div class="form-control">
                                                <vs-input disabled style="margin-top:10px;" v-model="username" placeholder="Cedula" shadow>
                                                    <template #icon>
                                                        <i class='bx bx-lock-open-alt'></i>
                                                    </template>
                                                </vs-input>
                                            </div>
                                        </div>
                                        <!-- Fecha de Expedicion -->
                                        <template>
                                            <div class="form-control" style="float:left">
                                                <label  style="margin-bottom:10px;" for="">Fecha de expedicion</label>
                                                <div style="display:flex;margin-top:10px;
                                                ">
                                                <vs-select style="padding-left: 10px;"
                                                    placeholder="Año"
                                                    v-model="exano"
                                                >
                                                <vs-option v-for="(a, index) in years()" :key="index" :label="a" :value="a">
                                                    {{a}}
                                                </vs-option>
                                                <template v-if="exano == ''" #message-warn>
                                                    Año es requerido
                                                </template>
                                                <template v-if="exano" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                                <vs-select  style="padding-left: 10px;"
                                                    placeholder="Mes"
                                                    v-model="exmes"
                                                >
                                                <vs-option v-for="(m, index) in months()" :key="index" :label="m.mes" :value="m.id">
                                                    {{m.mes}}
                                                </vs-option>
                                                <template v-if="exmes == ''" #message-warn>
                                                    mes es requerido
                                                </template>
                                                <template v-if="exmes" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                                <vs-select style="padding-left: 10px;"
                                                    placeholder="Dia"
                                                    v-model="exdia"
                                                >
                                                <vs-option v-for="(d, index) in days()" :key="index" :label="d" :value="d">
                                                    {{d}}
                                                </vs-option>
                                                <template v-if="exdia == ''" #message-warn>
                                                    Dia es requerido
                                                </template>
                                                <template v-if="exdia" #message-success>
                                                    ok
                                                </template>
                                                </vs-select>
                                            </div>
                                            </div>
                                        </template>
                                        <!-- Componente-->
                                        </vs-col>
                                        <!-- Componente-->
                                        <!--<inf-contacto />-->
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
                                                <template v-if="cllamadas == ''" #message-warn>
                                                    Celular llamadas es requerido
                                                </template>
                                                <template v-if="cllamadas" #message-success>
                                                    ok
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
                                                <template v-if="cwasap == ''" #message-warn>
                                                    Dia es requerido
                                                </template>
                                                <template v-if="cwasap" #message-success>
                                                    ok
                                                </template>
                                                </vs-input>
                                                </div>
                                                <div class="form-control" style="margin-top:10px;">
                                                <label   for="">Correo electronico</label>
                                                <vs-input 
                                                    disabled
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
                                        <!-- Componente-->
                                        <!--<inf-residencial />-->
                                        <template>
                                        <div class="resi" style="margin-top=30px;">
                                            <div>
                                            <h2 class="form-title">Información residencial</h2>
                                            <p style="margin-bottom:30px;">Actualize la información residencial</p>
                                            </div>
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
                                                        :disabled ="departamento"
                                                        >
                                                        <vs-option v-for="(c, index) in selectedCiudades" :key="index" :label="c" :value="c">
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
                                            </div>
                                        </template>    
                                        <!-- Componente-->
                                        <!--<inf-laboral />-->
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
                                                        <template v-if="nestudio == ''" #message-warn>
                                                            Nivel de estudio es requerido
                                                        </template>
                                                        <template v-if="nestudio" #message-success>
                                                            ok
                                                        </template>
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
                                                         <template v-if="actsoy == ''" #message-warn>
                                                            Actualmente soy es requerido
                                                        </template>
                                                        <template v-if="actsoy" #message-success>
                                                            ok
                                                        </template>
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
                                                        <template v-if="imensual == ''" #message-warn>
                                                            Ingreso mensual es requerido
                                                        </template>
                                                        <template v-if="imensual" #message-success>
                                                            ok
                                                        </template>
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
                                                        <template v-if="gtomensual == ''" #message-warn>
                                                            Gasto mensual es requerido
                                                        </template>
                                                        <template v-if="gtomensual" #message-success>
                                                            ok
                                                        </template>
                                                        </vs-select>
                                                    </div>
                                                    </div>
                                            </div>
                                        </template>
                                        <!-- Componente-->
                                        <!--<inf-bancaria />-->
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
                                                        <template v-if="ctasbancarias == ''" #message-warn>
                                                            N° de cuentas bancarias es requerido
                                                        </template>
                                                        <template v-if="ctasbancarias" #message-success>
                                                            ok
                                                        </template>
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
                                                        <template v-if="tartienes == ''" #message-warn>
                                                            N° de tarjetas es requerido
                                                        </template>
                                                        <template v-if="tartienes" #message-success>
                                                            ok
                                                        </template>
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
                                                        <template v-if="cupototal == ''" #message-warn>
                                                            Cupo total es requerido
                                                        </template>
                                                        <template v-if="cupototal" #message-success>
                                                            ok
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
                                                        <template v-if="cuantodebes == ''" #message-warn>
                                                            Cuanto debes es requerido
                                                        </template>
                                                        <template v-if="cuantodebes" #message-success>
                                                            ok
                                                        </template>
                                                        </vs-input>
                                                    </div>
                                                    </div>
                                            </div>
                                        </template>
                                        <!-- Componente-->
                                        <!--<inf-centralesderiesgo />-->
                                        <template>
                                        <div class="resi" style="margin-top=30px;">
                                            <div>
                                            <h2 class="form-title">Información en las centrales de riesgo</h2>
                                            <p style="margin-bottom:30px;">Actualize la información de las centrales de riesgo</p>
                                            </div>
                                                    <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                                    <label  style="margin-bottom:10px;" for="">¿Tienes suscripción en Datacrédito o TransUnion?</label>
                                                    <div class="form-control">
                                                        <vs-select
                                                        placeholder=""
                                                        v-model="sdatacre"
                                                        >
                                                        <vs-option label="Si" :value=1>
                                                            Si
                                                        </vs-option>
                                                        <vs-option label="No" :value="0">
                                                            No
                                                        </vs-option>
                                                        <!--<template v-if="sdatacre == ''" #message-warn>
                                                            Campo requerido
                                                        </template>-->
                                                        <template v-if="sdatacre" #message-success>
                                                            ok
                                                        </template>
                                                        </vs-select>
                                                    </div>
                                                    </div>
                                                    <div v-if="sdatacre" style="float: left; margin-top:10px;padding-left: 10px;">  
                                                    <label  style="margin-bottom:10px;" for="">¿Le gustaría que uno de nuestros asesores lo consulte en las centrales de riesgo para brindarle una información mas completa?</label>
                                                    <div class="form-control">
                                                        <vs-select
                                                        placeholder="Asesoria"
                                                        v-model="sdatacresi"
                                                        >
                                                        <vs-option v-for="(sds, index) in datacreds()" :key="index" :label="sds" :value="sds">
                                                            {{sds}}
                                                        </vs-option>
                                                        <template v-if="sdatacresi == ''" #message-warn>
                                                            Cuanto debes es requerido
                                                        </template>
                                                        <template v-if="sdatacresi" #message-success>
                                                            ok
                                                        </template>
                                                        </vs-select>
                                                    </div>
                                                    </div>
                                                <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                                    <label  style="margin-bottom:10px;" for="">¿Estas reportado negativamente?</label>
                                                    <div class="form-control">
                                                        <vs-select
                                                        placeholder="Esta Reportado negativamente?"
                                                        v-model="reportn"
                                                        >
                                                        <vs-option v-for="(rp, index) in rportneg()" :key="index" :label="rp" :value="rp">
                                                            {{rp}}
                                                        </vs-option>
                                                        <template v-if="reportn == ''" #message-warn>
                                                            Estas reportado es requerido
                                                        </template>
                                                        <template v-if="reportn" #message-success>
                                                            ok
                                                        </template>
                                                        </vs-select>
                                                    </div>
                                                    </div>
                                            </div>
                                        </template>
                                        <!-- Componente-->
                                        <!--<inf-contable />-->
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
                                                            placeholder=""
                                                            v-model="rut"
                                                            >
                                                            <vs-option label="Si" :value=1>
                                                                Si
                                                            </vs-option>
                                                            <vs-option label="No" :value=0>
                                                                No
                                                            </vs-option>
                                                        <!--<template v-if="rut == ''" #message-warn>
                                                            Rut es requerido
                                                        </template>-->
                                                        <template v-if="rut" #message-success>
                                                            ok
                                                        </template>
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
                                                        <template v-if="arut == ''" #message-warn>
                                                            Actividad principal debes es requerido
                                                        </template>
                                                        <template v-if="arut" #message-success>
                                                            ok
                                                        </template>
                                                            </vs-input>
                                                        </div>
                                                        </div>
                                                    <div style="float: left; margin-top:10px;padding-left: 10px;">  
                                                        <label  style="margin-bottom:10px;" for="">¿Declara renta?</label>
                                                        <div class="form-control">
                                                            <vs-select
                                                            placeholder=""
                                                            v-model="drenta"
                                                            >
                                                            <vs-option label="Si" :value= 1>
                                                                Si
                                                            </vs-option>
                                                            <vs-option label="No" :value= 0>
                                                                No
                                                            </vs-option>
                                                      <!--  <template v-if="drenta == '' " #message-warn>
                                                            Declara renta es requerido
                                                        </template>-->
                                                        <template v-if="drenta || !drenta == 0 && !tpatrim == 0 && !tdeudas == 0" #message-success>
                                                            ok
                                                        </template>
                                                            </vs-select>
                                                        </div>
                                                        </div>
                                                        <div v-if="drenta" style="float: left; margin-top:10px;padding-left: 10px;">  
                                                        <div class="form-control">
                                                            <label  style="margin-bottom:10px;" for="">Total Patrimonio bruto</label>
                                                            <vs-input style="margin-top:10px;" v-model="tpatrim" placeholder="Total patrimonio" shadow value= 0>
                                                                <template #icon>
                                                                    <i class='bx bx-money'></i>
                                                                </template>
                                                        <template v-if="tpatrim == ''  " #message-warn>
                                                            Total patroimonio es requerido
                                                        </template>
                                                        <template v-if="tpatrim" #message-success>
                                                            ok
                                                        </template>
                                                            </vs-input>
                                                        </div>
                                                        </div>
                                                        <div v-if="drenta" style="float: left; margin-top:10px;padding-left: 10px;">  
                                                        <div class="form-control">
                                                            <label  style="margin-bottom:10px;" for="">Total deudas</label>
                                                            <vs-input style="margin-top:10px;" v-model="tdeudas" placeholder="Total deudas" shadow value= 0>
                                                                <template #icon>
                                                                    <i class='bx bx-money'></i>
                                                                </template>
                                                        <template v-if="tdeudas == ''" #message-warn>
                                                            Total de deudas es requerido
                                                        </template>
                                                        <template v-if="tdeudas" #message-success>
                                                            ok
                                                        </template>
                                                            </vs-input>
                                                        </div>
                                                        </div>
                                                </div>
                                            </template>
                                        </vs-row>
                                    </div>
                                    <div class="form-control">
                                            <div>
                                                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                        <vs-button
                                                            size="large"
                                                            flat
                                                            :active="active == 0"
                                                            @click="active = 0, actperfil()"
                                                            block
                                                            :disabled="nombrec.length < 1 ||
                                                             fnano.length < 1 ||
                                                             fnmes.length < 1 ||
                                                             fndia.length < 1 ||
                                                             exano.length < 1 ||
                                                             exmes.length < 1 ||
                                                             exdia.length < 1 || 
                                                             sexo.length < 1 || 
                                                             estadocivil.length < 1 ||
                                                             cllamadas.length < 1 || 
                                                             cwasap.length < 1 || 
                                                             departamento.length < 1 ||
                                                             ciudad.length < 1 || 
                                                             tvivienda.length < 1 ||
                                                             estrato .length < 1 || 
                                                            cuantodebes.length < 1 || 
                                                            cupototal.length < 1 || 
                                                            tartienes.length < 1 || 
                                                            ctasbancarias.length < 1 || 
                                                            nestudio.length < 1 || 
                                                            actsoy.length < 1 || 
                                                            imensual.length < 1 || 
                                                            gtomensual.length < 1 ||
                                                            reportn.length < 1"
                                                        >
                                                        Actualizar
                                                        </vs-button>
                                                </vs-col>
                                            </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
</template>
<script>

export default {

    mounted(){
        let meuser = window.localStorage.getItem('username').replace(/['"]+/g, '')
        let meuseremail = window.localStorage.getItem('email').replace(/['"]+/g, '')
        this.username = meuser
        this.email = meuseremail

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
                tvivienda :'',
                estrato :'',
                cuantodebes :'0',
                cupototal : '0',
                tartienes : '',
                ctasbancarias : '',
                sdatacre :0,
                sdatacresi : '',
                reportn : '',
                tdeudas :'0',
                tpatrim : '0',
                drenta : 0,
                arut : 'na',
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
                erro: 'ocurrio un error'
            }
        },


                watch: {
                          departamento(nuevoValor, valorAnterior){
                            this.selectedCiudades = this.dpto().filter((e)=>{return e.id == nuevoValor})[0].ciudades;
                        },
                },

                methods: {
               
                    async actperfil() {
                            var fnyears = this.fnano
                            var fnmonth = this.fnmes
                            var fnday = this.fndia 
                            var fndate = new Date(fnyears=this.fnano, fnmonth=this.fnmes, fnday=this.fndia)
                            console.log(fndate);
                            var exyears = this.exano
                            var exmonth = this.exmes
                            var exday = this.exdia 
                            var exdate = new Date(exyears=this.exano, exmonth=this.exmes, exday=this.exdia)
                            console.log(exdate);
                            const plan =  window.localStorage.getItem('plan').replace(/['"]+/g, '')
                            const email =  window.localStorage.getItem('email').replace(/['"]+/g, '')
                            const metoken =  window.localStorage.getItem('jwt')
                            const username = window.localStorage.getItem('username').replace(/['"]+/g, '')
                            const usernameid = parseInt(username)
                        try {

                            this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken

                            
                            let res = await this.$axios.post("perfils", {
                            actDatos1:true,    
                            nombrec: this.nombrec,
                            fnacimiento: fndate,
                            sexo: this.sexo,
                            estadocivil:this.estadocivil,
                            username: username,
                            fexpedicion: exdate,
                            cllamadas:this.cllamadas,
                            cwasap:this.cwasap,
                            email: email,
                            departamento: this.departamento,
                            ciudad:this.ciudad,
                            tvivienda :this.tvivienda,
                            estrato :this.estrato,
                            cuantodebes :this.cuantodebes,
                            cupototal : this.cupototal,
                            tartienes : this.tartienes,
                            ctasbancarias : this.ctasbancarias,
                            sdatacre : this.sdatacre,
                            sdatacresi : this.sdatacresi,
                            reportn : this.reportn,
                            tdeudas :this.tdeudas,
                            tpatrim : this.tpatrim,
                            drenta : this.drenta,
                            arut : this.arut,
                            rut : this.rut,
                            nestudio : this.nestudio,
                            actsoy : this.actsoy,
                            imensual : this.imensual,
                            gtomensual : this.gtomensual,
                            tase : plan,
                            disabled: true

                            });

                            this.success = this.openSuccess('top-center','success')
                                if(localStorage.getItem('plan') == 'ag'){
                                    alert('entra')
                                    this.go('/asesoriag')

                                }else{

                                    this.go('/asesoriap')

                            }
                        }   
                        catch(error) {
                           this.error = this.openError('top-center', 'danger')
                           this.$router.go('/actDatos1')
                        }
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
                
                    sex : ()=>{
                    var sexo = [

                        "Masculino","Femenino"
                    ]
                    return sexo;
                },

                    civilstatus : ()=>{
                    var estadocivil = [

                        "Solter@","Casad@","Comprometid@","Divorciad@"
                    ]
                    return estadocivil;
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

                    datacred : ()=>{
                    var susdatacred = [
                            
                        "Si","No"
                    ]
                    return susdatacred;
                    
                },

                    datacreds : ()=>{
                    var datacredis = [

                        "Si","No"
                    ]
                    return datacredis;
                    
                },

                    rportneg : ()=>{
                    var rportnega = [

                         "Si","No","No lo se"
                    ]
                    return rportnega;
                    
                },

                }
            }
  </script>
 <style scoped>
     .resi{
         margin-top: 30px;
     }   
     .center-grid{
        /*height: 2500px !important;
        margin-top: 90px;*/
     }   
     .box-right{
        width: 100%;
        margin-top: 100px;
        height: 1500px !important;

        /*height: 800px;*/
     }   
     .box-left{
        background-image: url('~/assets/images/bg.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 800px;
     }

     .presentation{
         width : 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
     }

     .form{
        padding-top: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
     }

    .form-inner{

    width: 80%;
    /* padding: 20
px
; */
    padding: 0% 0% 110% 0%;
    height: 100%;

    }
    
    .form-control{
        margin-bottom: 30px;
    }

    .form-title{
        font-size: 1.1rem;
        font-weight: 700;
    }

    .box-right{
        width: 100%;
        height: 600px; 
        background-color: white;
     }
     
     .consvg{
        bottom: 0;
        transform: translateY(100%);
        position: absolute;
        width: 120%;
        left: 0;
     }
     .divider{
        transform: translate(-19.35px, 0px);
        position: static;
        top: 0;
        left: 0;
        width: 163%;
        overflow: hidden;
        line-height: 0;
        overflow: hidden;
     }
    .entry{
        width: 100%;
        height: 600px;
        background-size: cover;
        background-position: center;
        position: relative;
        top: 48px;
    }

    .entry-inner{
        width: 80%;
        height: 600px;
        margin: 0 auto;
        position: relative;
    }

    .entry-text{
        position: relative;
        top: 100px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 40px;
        width: 50%;
    }

    .boxes{
        width: 100%;
        height: 400px;
        background-color: white;
    }

    .entry-title{
        margin-top: 0pc;
        margin: 0;
    }

    .call-action{
        margin-top: 30px;
    }

    .wrap-overlay{
        padding-left: 40px;
        width : 70%;
        border-radius: 20px;
        border-left: 1px solid #1fc6e2;
    }

        /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  /* CSS */
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  /* CSS */
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  /* CSS */
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  /* CSS */
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  /* CSS */
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .testimonial-section{
      padding: 10px!important;
  }

  .vs-card-content{
      width: 90%!important;
  }

  .pricing-section{
      padding: 10px!important;
  }

  .cup-footer{
      padding: 20px!important;
  }

  .form-inner{
      padding: 10%!important;
  }
  
}
    
 </style>
