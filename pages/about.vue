 <template>
        <div class="center grid">
             <div class="section-about">
                <h1 class="text-center cases animated bounceInRight text-dark">Quienes <span class="light">somos ?</span></h1>
                <p class="text-dark"><p class="text-dark">La idea de crear consigue un préstamo.com surgió cuando empecé a estudiar mi segunda carrera universitaria de contaduría. Mi nombre es Luis Florez soy administrador de empresas y en esta página te brindare información financiera y contable que te ayudara a conseguir cupos de préstamos en diferentes entidades bancarias.</p>
                <p class="text-dark"><p class="text-dark">He trabajado durante más de 8 años en la industria financiera en diferentes áreas. Durante 2 años me desempeñe como asesor financiero, lo cual me llevo a conocer las fórmulas de endeudamiento y estrategias que usan las entidades a la hora de aprobar un préstamo u otorgar cualquier producto a crédito.</p>
                <h1 class="text-center cases animated bounceInRight text-dark">Nuestra <span class="light">misión</span></h1>
                <p class="text-dark"><p class="text-dark">Ayudar a que mas personas puedan acceder con mas facilidad a todos los servicios finacieros en las entidades bancarias.</p>
                <h1 class="text-center cases animated bounceInRight text-dark"><span class="light">visión</span></h1>
                <p class="text-dark"><p class="text-dark">Ser la empresa líder en Colombia en ofrecer asesorías de cómo obtener préstamos o aumentar sus cupos actuales. Queremos que cada vez más personas pasen de la informalidad a la formalidad.</p>
            </div>
        </div>
</template>
 <style scoped>
    .section-about{
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