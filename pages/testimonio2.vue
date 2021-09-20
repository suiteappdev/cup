 <template>
        <div class="center grid">
             <div class="section-unique">
                <h1 class="text-center cases animated bounceInRight text-dark flex flex-center flex-column">Acompañamiento financiero premium anual 
                    <br> <span class="light">$965.000 (cupos limitados 300)</span></h1>
                <p>Esta es la mejor decisión que puedes tomar para mejorar tu vida financiera, por medio de este servicio exclusivo vamos a guiarte paso a paso para que logres todos tus objetivos. Si al finalizar el año no cumplimos con las metas inicialmente establecidas te reembolsamos el dinero en un 100%.
                    Selecciona esta opción y uno de nuestros profesionales en menos de 12 horas hábiles te ayudara a:</p>
                <ul>
                    <li>Crear o editar el RUT</li>
                    <li>Elaborar tu declaración de renta</li>
                    <li>Contaras con un profesional las 24 horas del día, los 12 meses del año para solucionar tus dudas e inquietudes.</li>
                    <li>Conocer cuáles son las mejores tasas de crédito del mercado bancario.</li>
                    <li>Subir tu puntaje en las centrales de riesgo.</li>
                    <li>Manejar de manera eficiente tus tarjetas de crédito</li>
                    <li>Organizar toda la documentación que te exigen los bancos de una manera efectiva. Te garantizamos que las entidades bancarias van a aceptar tus solitudes (préstamo hipotecario, tarjeta de crédito, cupo rotativo, crédito de libre inversión, crédito de vehículos).</li>
                </ul>
                <p>Nota: Este plan solo lo pueden tomar las personas que hayan pagado antes la asesoría preferencial debido a que debemos conocer tu vida financiera y saber si eres apto para este servicio.</p>
            </div>
        </div>
</template>
 <style scoped>
    .text-center{
        text-align: center;
    }
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