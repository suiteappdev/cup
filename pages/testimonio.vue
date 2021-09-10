<template>
    <div class="center grid">
          <div class="section-testimonial">
            <h1 class="text-center cases animated bounceInRight text-dark flex flex-center flex-column">{{ selected.name }}</h1>
            <h2>Antes de nosotros:</h2>
            <p>{{selected.pretext}}</p>
            <ul>
              <li :key="index" v-for="col,index in selected.credits_before">{{col.text}} <span class="strong">{{col.amount}}</span></li>
              <br />
              <li v-if="selected.credits_before_total"><span class="strong">Cupo total: {{selected.credits_before_total}}</span></li>
            </ul>
            <h2>Ahora con nosotros:</h2>
            <p>{{selected.posttext}}</p>
            <ul>
              <li :key="index" v-for="col,index in selected.credits_after">{{col.text}} <span class="strong">{{col.amount}}</span></li>
              <br />
              <li><span class="strong">Cupo total: {{selected.credits_after_total}}</span></li>
            </ul>
            <p v-if="selected.note">{{selected.note}}</p>
            <p v-if="selected.note_2"><span class="strong">NOTA</span>  : {{selected.note_2}}</p>
            <br />
        </div>
    </div>
</template>
 <style scoped>
 .strong{
   font-weight: bold;
 }
  .section-testimonial{
        padding-top: 70px;
        width: 80%;
        margin: 0 auto;
    }
 .transition,  ul li i:before, ul li i:after, .contAcordeon {
  transition: all 0.25s ease-in-out;
}

.flipIn, h1, ul li {
  animation: flipdown 0.5s ease both;
}

.no-select, h2 {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#accesos {
  min-height: 0;
  display: inline-block;
  position: relative;
  left: 50%;
  margin: 4% 0;
  transform: translate(-50%, 0);
  box-shadow: 0 10px 0 0 #1fc6e2 inset;
  background-color: #fefffa;
  width: 100%;
  padding: 1em;
  max-width:960px;
}

@media (max-width: 550px) {
  #accesos {
    box-sizing: border-box;
    transform: translate(0, 0);
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    left: 0;
  }

}

.contAcordeon {
    color: rgba(48, 69, 92, 0.8);
    line-height: 1.5em;
    letter-spacing: .05em;
    position: relative;
    overflow: hidden;
    max-height: 200em;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 1em;
    z-index: 2;
    padding: 0 .5em;
  width: 100%;
}

#accesos ul {
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
}
#accesos ul li {
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
  padding-top: 0;
  border-top: 1px dotted #dce7eb;
}
#accesos ul li:nth-of-type(1) {
  animation-delay: 0.5s;
}
#accesos ul li:nth-of-type(2) {
  animation-delay: 0.75s;
}
#accesos ul li:nth-of-type(3) {
  animation-delay: 1s;
}
#accesos ul li:last-of-type {
  animation-delay: 1.25s;
  padding-bottom: 0;
}
#accesos ul li i.chevron {
    position: absolute;
    transform: translate(-18px, 0);
    margin-top: 33px;
    right: 0;
}
#accesos ul li i.chevron:before, #accesos ul li i.chevron:after {
  content: "";
  position: absolute;
  background-color: #1fc6e2;
  width: 3px;
  height: 9px;
}
#accesos ul li i:before {
  transform: translate(-2px, 0) rotate(45deg);
}
#accesos ul li i.chevron:after {
  transform: translate(2px, 0) rotate(-45deg);
}
#accesos ul li input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  background-color: teal;
}
#accesos ul li input[type=checkbox] h2 i {
  background-color: teal;
  color: teal;
}
#accesos ul li input[type=checkbox]:checked ~ div {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}
#accesos ul li input[type=checkbox]:checked ~ i:before {
  transform: translate(2px, 0) rotate(45deg);
}
#accesos ul li input[type=checkbox]:checked ~ i:after {
  transform: translate(-2px, 0) rotate(-45deg);
}

#accesos input[type=checkbox] ~ h2 {
  background-color: #f1f1f1;
}
#accesos input[type=checkbox]:checked ~ h2 {
  background-color: white;
}

#accesos h2 > i {
    width: 50px;
    height: 30px;
    display: inline-block;
    margin-right: 1em;
    margin-top: 10px;
    text-align: center;
    float: right;
}

#accesos h2 img {
    width: 40px;
    height: 40px;
    margin-right: 1em;
    margin-top: 0px;
    float: right;
}
@keyframes flipdown {
  0% {
    opacity: 0;
    transform-origin: top center;
    transform: rotateX(-90deg);
  }
  5% {
    opacity: 1;
  }
  80% {
    transform: rotateX(8deg);
  }
  83% {
    transform: rotateX(6deg);
  }
  92% {
    transform: rotateX(-3deg);
  }
  100% {
    transform-origin: top center;
    transform: rotateX(0deg);
  }
}



#accesos .sino {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  border: 1px solid #f1f1f1;
  padding: .5em;
  max-width: 45em;
}
#accesos .sino > div { flex: 1 1 300px; padding: .5em}
#accesos .sino .tit {
  font-size: 2em;
      margin-bottom: 0.5em;
}
#accesos .sino .tit i {
font-size: 0.6em;
    margin-left: 0.5em;
    width: 30px;
    height: 30px;
    padding: 5px;
}
#accesos .sino .no .tit {  color: #ff6772;}
#accesos .sino .si .tit {  color: #8bc349;}

#accesos .sino .texto span {
  display: block;
}
#accesos .sino .texto span span { font-weight: bold; }



#accesos .callout {
    border-left: 5px solid coral;
    padding: 1.5em;
    margin: 0em;
}
#accesos .callout h5 {
  font-size: 1.5em;
  margin-bottom: .5em;
      margin-top: 0;
}
#accesos .destacaMucho {
    /* background-color: #ff7e50; */
    margin: 1em 0;
    padding: 1em;
    /* color: white; */
    border-left: 5px solid #8BC34A;
}


.autopista, .calle, .referencia, .alerta {
    padding: 0.2em 0.4em;
    font-size: 0.8em;  
    color: white;
    border-radius: 2px;
}

.autopista {    background-color: #2091F3; }
.calle {    background-color: #2091F3; }
.referencia {    background-color: #4CAF50; }
.alerta {     background-color: coral; }
    .section-about{
        padding-top: 70px;
        height: auto;
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
        created() {
            
            this.selected =  this.comments.filter((c)=>{
                return c.id == this.$route.query.cliente
            })[0];

            console.log("cliente" , this.cliente);
        },
        beforeMount(){
            this.$nextTick( ()=> {
                //alert("before render");
            }); 
        },
        mounted() {
            this.$nextTick( ()=> {
               // alert("after rendered");
            });
        },
        data:() => ({
        selected  : null,
        comments : [

                {
                    id: 1, 
                    name : 'Luis Florez', 
                    image :`${require(`~/assets/images/foto5.png`)}`, 
                    preview :'El 25 de julio de 2018 contaba con los siguientes productos...',
                    pretext : 'El 25 de julio de 2018 contaba con los siguientes productos:',
                    posttext : 'Luego de 3 años de trabajo ( del 25 de julio de 20187 al 25 de julio de 2021) cuenta con los siguientes productos:',
                    credits_before : [
                        { text : "Tarjeta de crédito BANCO DAVIVIENDA, cupo ", amount : "$10.000.000"}, 
                        {text : "Tarjeta de crédito TUYA S.A. (grupo Éxito), cupo ", amount : "$5.000.000"}
                    ],
                    credits_before_total : '$15.000.000',
                    credits_after :[
                        {text : "BANCOLOMBIA HIPOTECARIO, cupo ", amount:"$90.000.000"},
                        {text : "BANCOLOMBIA ROTATIVO , cupo ", amount:"$30.000.000"},
                        {text : "ROTATIVO BCO DE BOGOTA, cupo ", amount:"$20.250.000"},
                        {text : "Tarjeta de crédito BANCOLOMBIA MASTERCARD, cupo ", amount:"$12.000.000"},
                        {text : "Tarjeta de crédito COLPATRIA VISA, cupo", amount:"$33.500.000"},
                        {text : "Tarjeta de crédito COLPATRIA MASTERCARD, cupo ", amount:"$7.772.000"},
                        {text : "Tarjeta de crédito TUYA S.A. (grupo Éxito), cupo ", amount:"$5.000.000"}
                    ],
                     credits_after_total : '$198.522.000',
                    note : ''
                },
                {
                    id : 2, 
                    name : 'Miguel Martinez', 
                    image : `${require(`~/assets/images/foto3.png`)}`, 
                    preview :'Miguel solicito nuestra asesoría el día 12 de septiembre del 2018...',
                    posttext:'Se elimino el reporte negativo además también pudo adquirir nuevos productos financieros. En este periodo Miguel obtuvo 2 nuevas tarjetas de crédito en BANCOLOMBIA, una tarjeta AMERICAN EXPRESS con el cupo de $1.200.000 y otra VISA con el cupo de $1.400.000. Además, aumento el cupo de la tarjeta MASTERCARD que ya tenía, pasando de $800.000 a $1.400.000',
                    pretext : 'Miguel solicito nuestra asesoría el día 12 de septiembre del 2018, él contaba con un reporte negativo como codeudor con la empresa LEBON por el valor de $41.000 pesos, una situación que le pasa a muchos colombianos, estar reportados por montos inferiores a los $100.000 colombianos.',
                     credits_before : [
                        { text : "Sin tarjeta de crédito ", amount : "$0"}, 
                    ],
                    credits_after :[
                          {text : "tarjetas de crédito en BANCOLOMBIA AMERICAN EXPRESS, cupo ", amount:"$1.200.000"},
                          {text : "tarjetas de crédito en BANCOLOMBIA VISA, cupo ", amount:"$1.400.000."},
                          {text : "tarjetas de crédito en BANCOLOMBIA MASTERCARD, aumento cupo de $800.000", amount:"$1.400.000"},
                      ],
                     credits_after_total : '$4.000000',
                    note : 'Miguel paso de tener un puntaje en Datacrédito de CERO a 811, Este logro lo obtuvo en aproximadamente 15 meses.', 
                    note_2 : 'Miguel en estos momentos podría ir a cualquier entidad financiera y obtener un cupo entre $30.000.000 a $50.000.000.'
                },
                {
                    id : 3, 
                    name : 'Lina Peñates', 
                    image : `${require(`~/assets/images/foto4.png`)}`, 
                    preview :'Todo comenzó el 18 de noviembre de 2017, Lina no contaba con ningún producto...',
                    pretext : 'Todo comenzó el 18 de noviembre de 2017, Lina no contaba con ningún producto financiero, es decir comenzamos desde cero.',
                    posttext:'Luego de más de 3 años y medio de trabajo ( del 18 de noviembre del 2017 al 24 de junio del 2021) Lina cuenta con los siguientes productos financieros:',
                    credits_before : [
                         { text : "Sin tarjeta de crédito ", amount : "$0"}, 
                    ],
                    credits_after : [
                         { text : "Tarjeta crédito BANCOLOMBIA MASTERCARD, cupo ", amount : "$16.000.000"}, 
                         { text : "Tarjeta crédito BANCOLOMBIA AMERICAN EXPRESS, cupo ", amount : "$8.000.000"}, 
                         { text : "Crediágil BANCOLOMBIA, cupo", amount : "$10.500.000"}, 
                         { text : "Tarjeta crédito BANCOLOMBIA MASTERCARD, cupo ", amount : "$16.000.000"}, 
                         { text : "Tarjeta de crédito SERFINANZAS (olímpica), cupo ", amount : "$2.000.000"}, 
                    ],
                    credits_after_total : '$36.500.000',
                    note : ''  
                }, 
                {
                    id : 4,
                    name : 'Luis Carlos Alvarez', 
                    image : `${require(`~/assets/images/foto2.png`)}`, 
                    preview :'En abril del 2019 Luis Carlos solicito la primera tarjeta de crédito...',
                    pretext : 'En abril del 2019 Luis Carlos solicito la primera tarjeta de crédito en Davivienda y se la aprobaron por $1.500.000',
                    posttext:'Luego de mas de 2 años ( abril del 2019 a agosto del 2021) Luis Carlos cuenta con los siguientes productos financieros:',
                    credits_before : [
                         { text : "Tarjetas de crédito Banco Davivienda, cupo ", amount : "$1.500.000"}
                    ],
                    credits_after : [
                        { text : "Tarjetas de crédito Banco Davivienda, cupo ", amount : "$6.300.000"}, 
                        { text : "Tarjeta de crédito Banco Colpatria, cupo", amount : "$4.000.000"}, 
                        { text : "Rotativo Banco de Bogotá, cupo", amount : "$10.000.000"}, 
                    ],
                    credits_after_total : '$20.300.000',
                    note : ''  
                }
            ]
      })
    }
  </script>
