 <template>
        <div class="center grid">
             <div class="section-unique">
                <h1 class="text-center cases animated bounceInRight text-dark">¿ Quienes <span class="light">somos ?</span></h1>
                <p>Somos una empresa que te ayuda a mejorar paso a paso tu vida financiera. En nuestros 5 años de operación hemos asesorado a más de 5000 personas. A todas ellas las hemos ayudado en temas como:</p>
                <ul>
                    <li>Obtención de créditos de libre inversión.</li>
                    <li>Obtención de tarjetas de crédito.</li>
                    <li>Obtención de cupos rotativos.</li>
                    <li>Obtención de créditos hipotecarios.</li>
                    <li>Obtención de crédito de vehículos.</li>
                    <li>Aumentar el puntaje en las centrales de riesgo.</li>
                    <li>Eliminar reportes negativos en las centrales de riesgo.</li>
                    <li>Elaboración de declaraciones de renta.</li>
                </ul>
                <h1 class="text-center cases animated bounceInRight text-dark ">Misión</h1>
                <p>Ayudar a las personas a mejorar su vida financiera de una forma rápida, fácil y efectiva.</p>

                <h1 class="text-center cases animated bounceInRight light">Visión</h1>
                <p>Convertirnos en la empresa número uno en asesoramiento financiero del país. Todo esto gracias a nuestra metodología efectiva, a nuestros profesionales capacitados y atención al cliente.</p>
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