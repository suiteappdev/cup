 <template>
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <div class="form-control">
                                        <h1 class="form-title">Inicia sesión</h1>
                                    </div>
                                    <div class="form-control">
                                        <vs-input v-model="username" placeholder="Cédula o dcumento de identidad" shadow>
                                            <template #icon>
                                            <i class='bx bx-user'></i>
                                            </template>
                                        </vs-input>
                                    </div>
                                    <div class="form-control">
                                        <vs-input color="#7d33ff" shadow type="password" v-model="password" placeholder="Password">
                                            <template #icon>
                                                <i class='bx bx-lock-open-alt'></i>
                                            </template>
                                        </vs-input>
                                    </div>
                                        <div class="center grid">
                                            <vs-row>
                                                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                    <vs-checkbox  style="float:right;" v-model="option">
                                                     Recordar datos
                                                    </vs-checkbox>
                                                </vs-col>
                                            </vs-row>
                                            <vs-row>
                                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                <vs-button 
                                                    style="margin-bottom:30px;margin-top:30px;"
                                                    flat
                                                    :active="active == 0"
                                                    @click="active = 0, login()"
                                                    block
                                                    size="large"
                                                    :disabled="password.length < 5"
                                                    >Entrar</vs-button>
                                                </vs-col>
                                            </vs-row>
                                            <vs-row>
                                                <vs-col style="text-align:center;" vs-type="flex" vs-justify="center" vs-align="center" w="6">
                                                <a href="#" style="text-decoration: none;" @click="gosignup($event)">Registrarme</a>
                                                </vs-col>
                                                <vs-col style="text-align:center;" vs-type="flex" vs-justify="center" vs-align="center" w="6">
                                                    <a href="/recover" style="text-decoration: none;">¿Olvidaste tu contraseña?</a>
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

        name: 'Login',
            data(){
                return{
                    username : '',
                    password:'',
                    option : false,
                    active: false,
                    email: '',
                    password: '',
                    remember: false,
                    error: false,
                    errorMsg: `Usuario o Contraseña erroneos`,
                    success:false,
                    successMsg:'logueado con exito',
                    ag:'',
                    ap:'',
                    plan:''
                    }
                    
                },
            methods: {

                  gosignup(event) {
                      event.preventDefault();
            
                            let uri = this.$route.query.tase;
                            this.$router.push('/signup/?tase=' + uri)
                            
                        },

            async login() {
                    try {
                        let res = await this.$axios.post("auth/local", {
                            identifier: this.username,
                            password: this.password
                        });
                        
                        const { jwt, user, } = res.data
                        window.localStorage.setItem('jwt', jwt)
                        window.localStorage.setItem('userData', JSON.stringify(user))
                        window.localStorage.setItem('username', user.username)
                        window.localStorage.setItem('plan', JSON.stringify(user.plan))
                        window.localStorage.setItem('email', user.email)
                        this.success = this.openSuccess('top-center','success')
                        this.actDatos = this.actDatos()
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.push('/login')
                        this.password = ''
                    }
                },
            async actDatos(){
                    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + ''
                    const metoken =  window.localStorage.getItem('jwt')
                    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + metoken
                    let res = await this.$axios.get("/perfil/username/" + this.username);
                    let useract1 = res.data
                    console.log(useract1);
                    //console.log(res.data[0].actDatos1)
                    console.log(res.data);
                    //alert('ver res')
                    if(res.data.length == 0){
                            //alert('length')
                            this.go('/actDatos1')
                                                
                    }else{

                        if(res.data[0].actDatos1){

                            if(res.data[0].estadopreg){

                                this.go('/profile')

                            }else{
                                this.go('/asesoriap')
                            }

                        

                    }else{

                        this.go('/actDatos1')

                    }

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
                        text: `Logueado con exito`
                    })
                    },
            openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Ocurrio un error usuario o contraseña invalido`
                    })
                    }
        
                },
    }
  </script>
 <style scoped>
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
