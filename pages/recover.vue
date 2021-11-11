 <template>
    <form @submit.prevent="recover">
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <div class="form-control">
                                        <h1 class="form-title">Recuperar contraseña</h1>
                                    </div>
                                    <div class="form-control">
                                        <vs-input
                                         v-model="email"
                                         placeholder="Escriba el correo electronico"
                                         shadow
                                         type = email
                                         >
                                            <template #icon>
                                            <i class='bx bx-user'></i>
                                            </template>
                                        </vs-input>
                                    </div>
                                        <div class="center grid">
                                            <vs-row>
                                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                <vs-button 
                                                    style="margin-bottom:30px;margin-top:30px;"
                                                    flat
                                                    :active="active == 0"
                                                    @click="active = 0"
                                                    block
                                                    type="submit" 
                                                    size="large"
                                                    >Recuperar</vs-button>
                                                </vs-col>
                                            </vs-row>
                                        </div>
                               </div>
                            </div>
                        </div>
                </vs-col>
            </vs-row>
        </div>
    </form>    
</template>
<script>

    export default {
        name: 'Login',
            data(){
                return{
                    email : '',
                    option : false,
                    active: false,
                    }
                },
            methods: {
                async recover() {
                    try {
                        this.$axios.post("auth/forgot-password", {
                                email: this.email
                            })

                        this.success = this.openSuccess('top-center','success')

                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.push('/recover')
                        this.password = ''
                    }
                },
                    openSuccess(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Hemos enviado un enlace de recuperación a tu bandeja de entrada o correo no deseado. Expira en 1 Hora`
                    })
                    },
                    openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `No existe una cuenta asociada a este correo.`
                    })
                    }
        
                }
    }
  </script>
 <style>
     .footer-link{
         text-combine-upright: none;   
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
        padding: 20px;
        padding: 30%;
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
