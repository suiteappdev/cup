<template>
    <div class="hidden">
      <vs-navbar fixed dark shadow text-white square center-collapsed v-model="active" right>
       <template #left>
          <img class="cup-logo" @click="$router.push('login')" src="~/assets/images/logo.svg" alt="">
        </template>
          <vs-navbar-item :active="active == 'home'" id="home">

            <vs-button @click="$router.push('/') && (active = 0)" icon :active="active == 0"
          >
            <i class='bx bx-home-alt'></i>
          </vs-button>
        </vs-navbar-item>
        <vs-navbar-item  @click="$router.push('/about') && (active = 0)" :active="active == 'about'" id="about">
            Quiénes somos?
        </vs-navbar-item>
        <vs-navbar-item  @click="$router.push('/unique')" :active="active == 'unique'" id="unique">
          Que nos hace unicos?
        </vs-navbar-item>
        <vs-navbar-item  @click="$router.push('/cases')" :active="active == 'cases'" id="cases">
          Casos de éxito
        </vs-navbar-item>
        <vs-navbar-item @click="$router.push('/faq')" :active="active == 'faq'" id="faq">
          Preguntas frencuentes
        </vs-navbar-item>
        <template #right>
      <vs-button
        warning
        size="large"
        :active="active == 1"
        @click="active = 1"
      >
        <i class="bx bxs-phone-call"></i> Asesoria Gratis
      </vs-button>
        <vs-button
          @click="$router.push('login')"
          circle
          size="large"
          warning
          border
          :active="active == 2"
        >
          <i class="bx bxs-user"></i> Iniciar sesión
        </vs-button>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
      </vs-navbar>
    </div>
  </template>
<script>
    export default {
      methods : {
        go : (route)=>{
          window.location.href = route
        }
      },
        data:() => ({
            active: 'home',
            activeSidebar: false
        })
    }
</script>
