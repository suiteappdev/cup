 <template>
        <div class="center grid">
             <div class="section-unique">
                <h1 class="text-center cases animated bounceInRight text-dark">¿Por qué debes <span class="light">elegirnos?</span></h1>
                <h1 class="text-center cases animated bounceInRight text-dark">Alto porcentaje de casos exitosos</h1>
<p> Nuestra tasa de éxito es del 99%. Durante más de 5 años hemos ayudado a más de 5000 clientes a adquirir nuevos productos financieros tales como tarjetas de crédito, cupos rotativos, créditos de libre inversión, préstamos hipotecarios, entre otros.</p> 
                <h1 class="text-center cases animated bounceInLeft text-dark">Asesoría integral</h1>
<p> Existe mucha información en internet de como aumentar tu score en las centrales de riesgo, pero este es solo uno de los parámetros que tienen en cuenta los bancos a la hora de otorgar un préstamo. Para que a una persona le sea otorgado un producto financiero este debe cumplir con una serie de requisitos. Nuestro objetivo no es solo ayudarte aumentar tu score crediticio sino también a cumplir con todos los requisitos que exigen las entidades bancarias.</p>
                <h1 class="text-center cases animated bounceInRight text-dark">Experiencia en el sector</h1>
<p> con más de 5 años de experiencia en el mercado financiero, lo cual nos ha ayudado a entender a las entidades bancarias y las diferentes políticas que manejan. Cada banco maneja políticas diferentes y los requisitos varían. Te vamos a guiar paso a paso con base en la experiencia que he obtenido en nuestra trayectoria, con nosotros vas a lograr todos tus objetivos financieros y a mejorar tu vida crediticia.</p>
                <h1 class="text-center cases animated bounceInLeft text-dark">Información actualizada</h1>
<p>Los bancos día a día están cambiando, la entidad que hoy te ofrece buenas tasas de interés mañana puede cambiar y brindar el peor servicio, o también el banco más flexible para aprobar prestamos mañana puede negarlos todos.
Nuestro constante asesoramiento a los clientes nos brinda un flujo de información actualizada que nos permite darle a nuestros usuarios los mejores consejos ajustados a sus necesidades.
Por ejemplo te podemos decir al día de hoy cual es el banco que te puede dar el crédito hipotecario más rápido o a una menor tasa. 
Además nuestra base de clientes nos permite compartirte cuales son las principales quejas de los usuarios con los bancos, para que de esta manera evites malos ratos con entidades financieras y te dirijas a los mejores bancos.</p>
                <h1 class="text-center cases animated bounceInLeft text-dark">Contaduría en orden</h1>
<p>Organizamos tu vida contable para que vaya de la mano con tu vida financiera. Tener en orden documentos tales como el RUT, declaración de renta, aumentara enormemente tus posibilidades de obtener mejores cupos bancarios.</p>
            </div>
        </div>
</template>
 <style scoped>
    .section-unique{
        padding-top: 70px;
        width: 80%;
        margin: 0 auto;
    }

    .light {
        color: #00E6E3;
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