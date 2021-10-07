 <template>
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <h1 class="form-title">Formulario de actualización de perfil</h1>
                                    <p style="margin-bottom:30px;">Por favor complete todo el formulario para asesorte de mejor manera</p>
                                    <div class="form-control">
                                        <label   for="">Nombre completo</label>
                                        <vs-input style="margin-top:10px;" v-model="value1" placeholder="Nombre completo" shadow>
                                            <template #icon>
                                                <i class='bx bx-user'></i>
                                            </template>
                                        </vs-input>
                                    </div>
                                    <div class="form-control">
                                        <label  style="margin-bottom:10px;" for="">Fecha de nacimiento</label>
                                        <div style="display:flex;margin-top:10px;
                                        ">
                                                <vs-select
                                                    placeholder="Año"
                                                    v-model="value3"
                                                >
                                            <vs-option label="Vuesax" value="1">
                                            Vuesax
                                            </vs-option>
                                            <vs-option label="Vue" value="2">
                                            Vue
                                            </vs-option>
                                            <vs-option label="Javascript" value="3">
                                            Javascript
                                            </vs-option>
                                            <vs-option label="Sass" value="4">
                                            Sass
                                            </vs-option>
                                            <vs-option label="Typescript" value="5">
                                            Typescript
                                            </vs-option>
                                            <vs-option label="Webpack" value="6">
                                            Webpack
                                            </vs-option>
                                            <vs-option label="Nodejs" value="7">
                                            Nodejs
                                            </vs-option>
                                        </vs-select>
                                        <vs-select
                                            placeholder="Mes"
                                            v-model="value3"
                                        >
                                            <vs-option label="Vuesax" value="1">
                                            Vuesax
                                            </vs-option>
                                            <vs-option label="Vue" value="2">
                                            Vue
                                            </vs-option>
                                            <vs-option label="Javascript" value="3">
                                            Javascript
                                            </vs-option>
                                            <vs-option label="Sass" value="4">
                                            Sass
                                            </vs-option>
                                            <vs-option label="Typescript" value="5">
                                            Typescript
                                            </vs-option>
                                            <vs-option label="Webpack" value="6">
                                            Webpack
                                            </vs-option>
                                            <vs-option label="Nodejs" value="7">
                                            Nodejs
                                            </vs-option>
                                        </vs-select>
                                        <vs-select
                                            placeholder="Dia"
                                            v-model="value3"
                                        >
                                            <vs-option label="Vuesax" value="1">
                                            Vuesax
                                            </vs-option>
                                            <vs-option label="Vue" value="2">
                                            Vue
                                            </vs-option>
                                            <vs-option label="Javascript" value="3">
                                            Javascript
                                            </vs-option>
                                            <vs-option label="Sass" value="4">
                                            Sass
                                            </vs-option>
                                            <vs-option label="Typescript" value="5">
                                            Typescript
                                            </vs-option>
                                            <vs-option label="Webpack" value="6">
                                            Webpack
                                            </vs-option>
                                            <vs-option label="Nodejs" value="7">
                                            Nodejs
                                            </vs-option>
                                        </vs-select>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <label  style="margin-bottom:10px;" for="">Estado civil</label>
                                            <template>
                                                <div style="display:flex;margin-top:20px;">
                                                    <vs-radio v-model="picked" val="1">
                                                        Soltero 
                                                    </vs-radio>
                                                    <vs-radio v-model="picked" val="2">
                                                        Casado
                                                    </vs-radio>
                                                    <vs-radio v-model="picked" val="3">
                                                        Divorciado
                                                    </vs-radio>
                                                </div>
                                            </template>
                                    </div>
                               </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
</template>
 <style>
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
        padding: 20px;
        padding: 30%;
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
<script>
    export default {
      data:() => ({
        value1: '',
        value2: '',
        value3: '',
        picked : false,
        option : false,
        active: false,
        email: '',
        password: '',
        remember: false
      })
    }
  </script>