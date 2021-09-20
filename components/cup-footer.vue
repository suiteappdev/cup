<template>
    <div class="cup-footer" style="position:relative;">
        <div class="center grid">
                <template>
                    <vs-row>
                            <vs-col class="text-center" vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                               <h1 class="footer-title">Menu</h1>
                               <ul class="link-list">
                                   <li class="footer-link"><a href=""></a>Inicio</li>
                                   <li  class="footer-link"><a href=""></a>¿ Quiénes somos ?</li>
                                   <li  class="footer-link"><a href=""></a>¿Por qué debes elegirnos?</li>
                                   <li class="footer-link"><a href=""></a>Casos de éxito</li>
                                   <li  class="footer-link"><a href=""></a>Preguntas frecuentes</li>
                               </ul>
                            </vs-col>
                            <vs-col class="text-center" vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                                <h1 class="footer-title">Compañia</h1>
                                     <ul class="link-list">
                                   <li class="footer-link">Email <br />
                                    <a href="mailto:asesoriasflorez1@gmail.com" class="no-underline"><p class="light" style="font-size:14px;margin:0;">asesoriasflorez1@gmail.com</p></a>
                                   </li>
                                   <li  class="footer-link"><a href=""></a>Teléfono
                                   <a class="no-underline"><p class="light" style="font-size:14px;margin:0;">3118221549</p></a>
                                   </li>
                                   <li  class="footer-link"><a href=""></a>Horarios de atención</li>
                                   <a class="no-underline"><p class="light" style="font-size:14px;margin:0;">lunes a viernes de 8:00 AM a 6:00 PM</p></a>
                                   <li  class="footer-link"><a href=""></a>Términos y condiciones</li>
                               </ul>
                            </vs-col>
                            <vs-col class="text-center" vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                               <h1 class="footer-title">Redes sociales</h1>
                                <div class="networks">
                                    <a class="no-underline" href="https://www.facebook.com/lordwinoficial" target="_blank">
                                        <vs-button
                                            icon
                                            color="facebook"
                                        >
                                            <i class='bx bxl-facebook-square'></i>
                                        </vs-button>
                                    </a>
                                    <a class="no-underline" href="https://www.instagram.com/luisflorez.23/" target="_blank">
                                    <vs-button
                                        icon
                                        color="facebpok"
                                    >
                                        <i class='bx bxl-instagram'></i>
                                    </vs-button> 
                                    </a>
                                    <vs-button
                                        icon
                                        color="youtube"
                                    >
                                        <i class='bx bxl-youtube'></i>
                                    </vs-button>
                                </div>
                            </vs-col>
                            <vs-col class="text-center" vs-type="flex" vs-justify="center" vs-align="center" w="3" lg="3" sm="12" xs="12">
                               <h1 class="footer-title">Contacto</h1>
                                <div class="form-contact">
                                    <p class="wp-color">agregame a WhatsApp..</p>
                                    <img class="qr" src="~/assets/images/qr.jpg" alt="Escanea con tu whatsapps">
                                    <p class="wp-color">ó</p>
                                    <a class="wp-color" href="https://wa.me/+573005382511">Escribeme al WhatsApp</a>
                                </div>
                            </vs-col>
                    </vs-row>

                </template>

        </div>
        <div class="mini-footer">
            <p class="text-center text-white" style="font-size:12px;"> &copy; Todos los derechos reservados <a  style="color:#1dc4e2;" href="">asesoriasflorez.com</a> S.A.S. Creado por <span>GrupoFlorez</span>  </p>
        </div>
    </div>
    
</template>
<style lang="postcss" scoped>
    .light{
        color:#00E6E3 ;
    }
    .networks{
            display: flex;
        justify-content: center;
    }
    
    .wp-color{
        color: #02AF9C;
    }
    .qr{
        width: 50%;
        margin-bottom: 10px;
    }
    .form-contact{
        width: 100%;
        height: auto;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .mini-footer{
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 47px;
        background-color: #00131c;
        right: 0px;
    }

    .no-underline{
        text-decoration: none;
    }

    .footer-title{
        text-align: center;
        color: white;
        border-left: 5px solid #1fc6e2;
    }

    .link-list{
        list-style: none;
    }

    .footer-link{
        text-align: left;
        padding: 5px;
        color:gray;
    }
    .cup-footer{
        padding: 50px;
        width: 100%;
        background-color :rgb(0 0 0);
        height: auto;
        box-sizing: border-box
     }
</style>
