 <template>
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <div class="form-control">
                                        <h1 class="form-title">Formula tu pregunta</h1>
                                    </div>
                                    <div>
                                        <b-form-textarea 
                                            v-model="preguntar" 
                                            debounce="500" 
                                            rows="1" 
                                            max-rows="100" 
                                            placeholder="Enter at least 10 characters"
                                            
                                        >
                                        </b-form-textarea>
                                    </div>
                                    <template>
                                    <div> 
                                    </div>
                                    </template>
                                        <div class="center grid">
                                            <vs-row>
                                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                        <vs-button
                                                            style="margin-bottom:30px;margin-top:30px;"
                                                            flat
                                                            :active="active == 0"
                                                            @click="active = 0, preguntar()"
                                                            block
                                                            size="large"
                                                            
                                                        >
                                                        Enviar
                                                        </vs-button>
                                                </vs-col>
                                            </vs-row>
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
        created (){
           this.plan = this.$route.query.tase;
        },
      data(){
          return{
                    preguntar : '',
                    estadopreg:''
                }
      
        },
                methods: {

                async enviar() {
                    try {

                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                        const _id = window.localStorage.sgetItem('id').replace(/['"]+/g, '')
                        let res = await this.$axios.put("/perfils/" + _id, {
                            pregunta: this.pregunta,
                            estadopreg: true,
                        });

                        this.success = this.openSuccess('top-center','success')
                        this.go('/perfil')
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.go('/asesoriag')
                        this.password = this.pregunta
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
                        text: `Su pregunta fue enviada con exito`
                    })
                    },
                openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Ocurrio un error al enviar la pregunta`
                    })
                    },

                },

            computed: {

 	            }
    }
  </script>
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
    }
    
    .form-control{
        margin-bottom: 24px;
        height: 40px;
    }

    .form-title{
        font-size: 1.1rem;
        font-weight: 700;
    }

    .box-right{
        width: 100%;
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
  .cup-footer{
      padding: 20px!important;
  }

  .form-inner{
      padding: 10%!important;
  }
}
 </style>
