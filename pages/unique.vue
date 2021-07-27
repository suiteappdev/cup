 <template>
        <div class="center grid">
             <div class="section-unique">
                <h1 class="text-center cases animated bounceInRight text-dark">¿ Que nos hace <span class="light">únicos ?</span></h1>
                <p>Durante más de 6 años hemos estado asesorando a un gran número de clientes a adquirir nuevos productos financieros, lo cual nos ha permitido estar a la vanguardia de las novedades financieras.</p>
                <p>Existe mucha información en internet de como aumentar tu score en las centrales de riesgo, pero hay pocos tutoriales de como aumentar la capacidad de endeudamiento. Aunque una persona tenga alto su score crediticio no podrá acceder a grandes montos si este no aumenta su capacidad de endeudamiento. Y eso buscamos en esta página, brindarle las herramientas a la persona para subir su puntaje en las centrales de riesgo, pero también su capacidad de endeudamiento.</p>
                <p>o trabaje en una financiera como analista financiero y era la persona encargada de aprobar y rechazar las solicitudes de préstamos de un gran número de clientes. Esta experiencia me ayuda a darle mejores consejos a mis clientes de qué acciones debes realizar para aumentar sus posibilidades de tener préstamos nuevos o de aumentar el cupo actual de los préstamos que ya tienes.</p>
                <p>Algunos bancos tienen políticas internas en las cuales “discriminan” a cierto tipo de clientes, por ejemplo, hay un banco específico el cual no puedo decir el nombre por problemas de confidencialidad, pero ese banco suele rechazar los préstamos a las personas naturales que tengan de actividad principal la de rentista de capital, código CIIU 0090. Este es uno de los tantos casos de “requisitos ocultos” que tienen los bancos para otorgar préstamos que nunca lo dicen a los clientes pero que los afecta en gran manera.</p>
                <p>También puedo ofrecer a mis clientes una asesoría contable que hará que estos aumenten en un 95% sus posibilidades de obtener cupos de préstamos más altos. Hay muchos asesores financieros allá afuera que dan consejos básicos de como aumentar los cupos bancarios, pero la realidad es que si esta asesoría no está acompañada de la contabilidad esta pierde credibilidad, porque una buena contabilidad puede ser el factor decisivo en muchos casos de que te otorguen o no un préstamo.</p>
            </div>
        </div>
</template>
 <style scoped>
    .section-unique{
        padding-top: 70px;
        height: 600px;
        width: 80%;
        margin: 0 auto;
    }

    .light {
        color: #1fc6e2;
    }

    .text-dark{
        color: black;
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
        padding: 24%;
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
    
 </style>
<script>
    export default {
      data:() => ({
        value1 : '',
        value2:'',
        option : false,
        active: false,
        email: '',
        password: '',
        remember: false
      })
    }
  </script>