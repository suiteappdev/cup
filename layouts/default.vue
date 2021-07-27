<template>
  <div>
    <cup-header />
    <Nuxt />
  </div>
</template>
<style>
  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family:'Poppins';
    outline: none;
    text-transform: none;
    text-decoration: none;
  }

  .text-center{
    text-align: center;
  }

  .form-login{
    width: 40%;
    height: 350px;
    background-color: white;
    position: absolute;
    z-index: 99999;
    border-radius: 10px;
    top: 150px;
  }

  .vs-navbar__item{
    padding: 20px;
    color: rgba(var(--bg),1);
    cursor: pointer;
    font-weight: 700;
    position: relative;
    font-size: .9rem;
    opacity: .7;
    text-decoration: none;
    transition: all .25s ease;
  }

  .text-white{
    color:white!important;
  }

  .top-header{
    height: 20px;
    width: 100%;
    background-color: red;
  }

  .footer{
    widows: 100%;
    height: 200px;
    position: relative;
    background-color:rgba(var(--vs-primary), 1);
  }

  .small-footer{
    widows: 100%;
    height: 40px;
    position: relative;
    background-color:rgba(var(--vs-primary), 0.5);
  }

  .vs-navbar{
    height: 70px!important;
  }

  .cup-logo{
    width:130px;
  }

  .vs-navbar__line{
    background-color: #8FD4DA!important;
    top:0px!important;
    height: 5px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .vs-sidebar-content .vs-sidebar {
    overflow-x: hidden;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
}

</style>
<script>
  export default {
      mounted() {
        this.$vs.setColor('primary', '#1fc6e2')
        this.$vs.setColor('secondary', '#FF8A15')
        this.$vs.setColor('success', 'rgb(23, 201, 100)')
        this.$vs.setColor('danger', 'rgb(242, 19, 93')
        this.$vs.setColor('warning', 'rgb(255, 130, 0)')
        this.$vs.setColor('dark', '#00131C')
      }
  }
</script>

