 <template>
 <div class="wrapper">
        <div class="service-page-section">
            <h1 class="text-center cases animated bounceInRight">Elige uno de nuestros planes</h1>
            <template>
                <div class="center grid">
                    <vs-row>
                        <vs-col :key="index" v-for="col, index in comments" vs-type="flex" vs-justify="center" vs-align="center"  w="6" sm="12" xs="12">
                            <vs-card class="animated fadeInLeft" style="margin-bottom: 30px!important; max-width: 100% !important;">
                                 <template #title>
                                    <h3>{{col.name}}</h3>
                                </template>
                                <template #img>
                                    <img style="max-height: 100% !important;" :src="col.image" alt="">
                                </template>
                                <template #text>
                                    <p>{{col.preview}}</p>
                                    <br />
                                    <vs-button primary icon block @click="$router.push('/signup/?tase=' + col.tase)" style="color: blue important;">
                                        {{col.ttase}}
                                    </vs-button>
                                </template>
                                <template #interactions>
                              
                                </template>
                            </vs-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </div> 
 </div>
</template>
 <style scoped>
 .strong{
     font-weight: bold;
 }
.arrows {
  position: relative;
  width: 20px;
  height: 20px;
  top: 180px;
  transform: translate(-50%, -50%);
}
body .arrows:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(0, 230, 227, 0.7);
  border-bottom: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  transform: translate(26.6666666667px, 106.6666666667px) rotate(-45deg);
  animation: arrows 3s linear infinite;
}
body .arrows:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  border-bottom: 26.6666666667px solid rgba(0, 0, 0, 0.7);
  transform: translate(53.3333333333px, 0px) rotate(-45deg);
  animation: arrows 3s linear infinite -1.5s;
}

@keyframes arrows {
  0% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
    transform: translate(-13.3333333333px, -53.3333333333px) rotate(-45deg);
  }
  10%, 90% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
  }
  50% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0.7);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0.7);
    transform: translate(-13.3333333333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 26.6666666667px solid rgba(0, 230, 227, 0);
    border-bottom: 26.6666666667px solid rgba(0, 230, 227, 0);
    transform: translate(-13.3333333333px, 53.3333333333px) rotate(-45deg);
  }
}
.box-service-inner{
    padding: 20px;
}

.mt-40{
    margin-top: 30px!important;
}

 section {
            color: #7a90ff;
            padding: 2em 0 2em;
            min-height: 100vh;
            position: relative;
            -webkit-font-smoothing: antialiased;
        }
        
        .pricing {
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto 3em;
        }
        
        .pricing-item {
            position: relative;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            flex-direction: column;
            -webkit-align-items: stretch;
            align-items: stretch;
            text-align: center;
            -webkit-flex: 0 1 330px;
            flex: 0 1 330px;
        }
        
        .pricing-action {
            color: inherit;
            border: none;
            background: none;
            cursor: pointer;
            top : -50px;
            position: relative;
        }

        .box-service-1{
            background-color: #00131c;
            box-sizing: border-box;
            width: 100%;
        }

        .service-list{
            padding : 40;
            list-style: none;
        }

        .service-item{
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .service-item-premium{
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .flex{
            display: flex;
        }

        .flex-center{
            align-items: center;
            justify-content: center;
        }

        .flex-column{
            flex-direction: column;
        }

        .box-service-2{
            box-sizing: border-box;
            width: 100%;
            height: 800px;
        }

        .vineta{
            list-style-image: url('~/assets/images/vineta.png');
        }
        
        .pricing-action:focus {
            outline: none;
        }

        .no-margin{
            margin: 0;
        }
        
        .pricing-feature-list {
            text-align: left;
            padding: 27px!important;
            top: -60px;
            position: relative;
        }
        
        .pricing-palden .pricing-item {
            font-family: 'Open Sans', sans-serif;
            cursor: default;
            color: #84697c;
            background: #fff;
            box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);
            border-radius: 20px 20px 10px 10px;
            margin: 1em;
        }
        
        @media screen and (min-width: 66.25em) {
            .pricing-palden .pricing-item {
                margin: 1em -0.5em;
            }
            .pricing-palden .pricing__item--featured {
                margin: 0;
                z-index: 10;
                box-shadow: 0 0 20px rgba(46, 59, 125, 0.23);
            }
        }
        
        .pricing-palden .pricing-deco {
            border-radius: 10px 10px 0 0;
            background: linear-gradient(135deg,#4097f9,#0af0c7);
            padding: 4em 0 9em;
            position: relative;
        }
        
        .pricing-palden .pricing-deco-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 160px;
        }
        
        .pricing-palden .pricing-title {
            font-size: 0.75em;
            margin: 0;
            text-transform: uppercase;
            color: #fff;
        }
        
        .pricing-palden .deco-layer {
            -webkit-transition: -webkit-transform 0.5s;
            transition: transform 0.5s;
        }
        
        .pricing-palden .pricing-item:hover .deco-layer--1 {
            -webkit-transform: translate3d(15px, 0, 0);
            transform: translate3d(15px, 0, 0);
        }
        
        .pricing-palden .pricing-item:hover .deco-layer--2 {
            -webkit-transform: translate3d(-15px, 0, 0);
            transform: translate3d(-15px, 0, 0);
        }
        
        .pricing-palden .icon {
            font-size: 2.5em;
        }
        
        .pricing-palden .pricing-price {
            font-size: 3em;
            font-weight: bold;
            padding: 0;
            color: #fff;
            margin: 0 0 0.25em 0;
            line-height: 0.75;
        }
        
        .pricing-palden .pricing-currency {
            font-size: 0.15em;
            vertical-align: top;
        }
        
        .pricing-palden .pricing-period {
            font-size: 0.15em;
            padding: 0 0 0 0.5em;
            font-style: italic;
        }
        
        .pricing-palden .pricing__sentence {
            font-weight: bold;
            margin: 0 0 1em 0;
            padding: 0 0 0.5em;
        }
        
        .pricing-palden .pricing-feature-list {
            margin: 0;
            padding: 0.25em 0 2.5em;
        }
        
        .pricing-palden .pricing-feature {
            padding: 1em 0;
            font-weight : bold;
        }
        
        .pricing-palden .pricing-action {
            font-weight: bold;
            margin: auto 3em 2em 3em;
            padding: 1em 2em;
            color: #fff;
            border-radius: 30px;
            background: linear-gradient(135deg,#a93bfe,#584efd);
            -webkit-transition: background-color 0.3s;
            transition: background-color 0.3s;
        }
        
        .pricing-palden .pricing-action:hover,
        .pricing-palden .pricing-action:focus {
            background: linear-gradient(135deg,#fd7d57,#f55d59);
        }
        
        .pricing-palden .pricing-item--featured .pricing-deco {
            padding: 5em 0 8.885em 0;
        }
    .light{
        color:#00E6E3 ;
    }
    .wrapper{
        width: 100%;
        height: 100%;
    }

    .cases{
        margin-bottom: 60px;
    }

    .vs-card-content{
        width: 70%!important;
    }

    .howto-text{
        width: 80%;
        margin: 0 auto;
    }

    .service-page-section{
        box-sizing: border-box;
        padding: 50px;
        width: 100%;
    }

    .howto-section{
        box-sizing: border-box;
        padding: 50px;
        width: 100%;
        height: 600px;
        background-color: #00131c;
        padding-top: 10%;
    }

     .vs-card-content{
         margin : 0 auto!important;
     }

     .presentation{
         width : 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
        box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
        -webkit-box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
        -moz-box-shadow: 0px -43px 33px -46px rgb(0 230 227 / 71%) inset;
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
        text-align: center;
    }

    .text-left{
        text-align: left;
    }
    
.vs-card {
    background: rgba(255, 255, 255, 1);
    background: rgba(var(--vs-background), 1);
    color: rgba(44, 62, 80, 1);
    color: rgba(var(--vs-text), 1);
    width: 100%;
    /*max-width: 350px;*/
    -webkit-box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 5%);
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
    box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 5%);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
    border-radius: 20px;    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    cursor: pointer;
    position: relative;
}    
 </style>
<script>
    export default {
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
        comments : [
                {
                    tase: 'ag', 
                    name : 'Asesoria Gratuita', 
                    image :`${require(`~/assets/images/asesoriagratuita.jpeg`)}`,
                    ttase : 'Asesoria Gratuita',
                },
                {
                    tase : 'ap', 
                    name : 'Asesoria Preferencial', 
                    image : `${require(`~/assets/images/asesoriapreferencial.jpeg`)}`,
                    ttase : 'Asesoria Preferencial', 
                },
            ],
      })
    }
  </script>