 <template>
        <div class="center grid">
            <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                        <div class="box-right">
                            <div class="form">
                                <div class="form-inner">
                                    <div class="form-control">
                                        <h1 class="form-title">Formulario de registro</h1>
                                    </div>
                                    <div class="form-control">
                                        <vs-input v-model="username" type="number" placeholder="Cédula o dcumento de identidad" shadow>
                                            <template #icon>
                                            <i class='bx bx-card'></i>
                                            </template>
                                            <template v-if="username.length > 6" #message-success>
                                            Cedula Valida
                                            </template>
                                            <template v-if="username.length < 5 && username !== ''" #message-danger>
                                            Cedula invalida
                                            </template>
                                        </vs-input>
                                    </div>
                                    <div class="form-control">
                                        <vs-input v-model="email" placeholder="micorreo@ejemplo.com" shadow>
                                            <template #icon>
                                            <i class='bx bx-mail-send' ></i>
                                            </template>
                                            <template v-if="validEmail" #message-success>
                                            Email Valido
                                            </template>
                                            <template v-if="!validEmail && email !== ''" #message-danger>
                                            Email Invalido
                                            </template>
                                        </vs-input>
                                    </div>
                                    <div class="form-control">
                                        <vs-input v-model="celular" placeholder="Numero telefonico" shadow>
                                            <template #icon>
                                                <i class='bx bx-phone'></i>
                                            </template>
                                            <template v-if="celular.length >= 8" #message-success>
                                            Celular Valido
                                            </template>
                                            <template v-if="celular.length < 7 && celular !== ''" #message-danger>
                                            Celular invalido
                                            </template>
                                        </vs-input>
                                    </div>
                                    <template>
                                    <div> 
                                        <div class="form-control">
                                            <vs-input :class='{valid:passwordValidation.valid}' :type="passwordVisible ? 'text' : 'password'" v-model="password" placeholder="Password" shadow>
                                            <template #icon>
                                            <i class='bx bx-lock-alt'></i>
                                            </template>
                                            </vs-input>
                                        </div>

                                        <vs-input type="password" v-model.lazy='checkPassword' placeholder="Password" shadow>
                                            <template #icon>
                                            <i class='bx bx-lock-alt'></i>
                                            </template>
                                        </vs-input>
                                        <transition name="hint" appear>
                                            <div v-if='passwordValidation.errors.length > 0 && !submitted' class='hints'>
                                                <h3>Sugerencias Para la Contraseña</h3>
                                                <p v-for="(e, index) in passwordValidation.errors" :key="index">{{e}}</p>
                                            </div>
                                        </transition>
                                            <div class="matches" v-if='notSamePasswords'>
                                            <p>Passwords no son iguales.</p>
                                        </div>

                                    </div>
                                    </template>
                                        <div class="center grid">
                                            <vs-row>
                                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                                                        <vs-button
                                                            style="margin-bottom:30px;margin-top:30px;"
                                                            flat
                                                            :active="active == 0"
                                                            @click="active = 0, registrar()"
                                                            block
                                                            size="large"
                                                            :disabled="password.length < 8 || checkPassword.length < 8 || username < 6 || celular < 7"
                                                        >
                                                        Registrarme
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
                    username : '',
                    email:'',
                    celular:'',
                    option : false,
                    active: false,
                    email: '',
                    password: '',
                    remember: false,
                    rules: [
                                { message:'Se requiere una letra minúscula.', regex:/[a-z]+/ },
                                { message:"Se requiere una letra mayúscula.",  regex:/[A-Z]+/ },
                                { message:"8 caracteres como mínimo.", regex:/.{8,}/ },
                                { message:"Se requiere un número.", regex:/[0-9]+/ }
			                ],
		            checkPassword:'',
			        passwordVisible:false,
			        submitted:false}
      
        },
                methods: {

                resetPasswords () {
                    this.password = ''
                    this.checkPassword = ''
                    this.submitted = true
                    setTimeout(() => {
                        this.submitted = false
                    }, 2000)
                },
                togglePasswordVisibility () {
                    this.passwordVisible = !this.passwordVisible
                },

                async registrar() {
                    let plan = this.plan;
                    try {
                        let res = await this.$axios.post("auth/local/register", {
                            username: this.username,
                            password: this.password,
                            email: this.email,
                            celular: this.celular,
                            plan: plan
                        });

                        this.success = this.openSuccess('top-center','success')
                        this.go('/login')
                    } catch(error) {
                        this.error = this.openError('top-center', 'danger')
                        this.$router.push('/signup')
                        this.password = ''
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
                        text: `Registrado con exito`
                    })
                    },
                openError(position = null, color) {
                    const noti = this.$vs.notification({
                        flat: true,
                        color,
                        position,
                        title: 'Mensaje',
                        text: `Ocurrio un error al registrarse`
                    })
                    }
        
                },

            computed: {
                notSamePasswords () {
                    if (this.passwordsFilled) {
                        return (this.password !== this.checkPassword)
                    } else {
                        return false
                    }
                },
                passwordsFilled () {
                    return (this.password !== '' && this.checkPassword !== '')
                },
                passwordValidation () {
                    let errors = []
                    for (let condition of this.rules) {
                        if (!condition.regex.test(this.password)) {
                            errors.push(condition.message)
                        }
                    }
                    if (errors.length === 0) {
                        return { valid:true, errors }
                    } else {
                        return { valid:false, errors }
                    }
                },

                validEmail() {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
                },
                validCC(){
                    return /(\.\w{2,3})+$/.test(this.username)
                }
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
