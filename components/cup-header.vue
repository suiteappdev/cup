<template>
      <vs-navbar fixed dark shadow text-white square center-collapsed v-model="active" right>
       <template #left>
        <img class="cup-logo" @click="$router.push('/')" src="~/assets/images/logo.png" alt="">
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
         ¿Por qué debes elegirnos?
        </vs-navbar-item>
        <vs-navbar-item  @click="$router.push('/cases')" :active="active == 'cases'" id="cases">
          Casos de éxito
        </vs-navbar-item>
        <vs-navbar-item @click="$router.push('/package')" :active="active == 'package'" id="package">
          Paquete de servicios
        </vs-navbar-item>
        <vs-navbar-item @click="$router.push('/faq')" :active="active == 'faq'" id="faq">
          Preguntas frencuentes
        </vs-navbar-item>
        <template #right>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        <vs-sidebar
        class="vs-sidebar-content"
        right
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home bx-tada'></i>
          </template>
          <p @click="$router.push('/')" >Inicio</p>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-user-circle bx-tada' ></i>
          </template>
          <p @click="$router.push('/login')">Ingresar</p>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-right-down-arrow-circle bx-tada bx-flip-horizontal' ></i>
          </template>
          <p @click="$router.push('/signup')">Registrarme</p>
        </vs-sidebar-item>
          <vs-sidebar-item >
          <template #icon>
            <i class='bx bx-right-down-arrow-circle bx-tada bx-flip-horizontal' ></i>
          </template>
          <p @click="$router.push('/profile')">Perfil</p>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-right-down-arrow-circle bx-tada bx-flip-horizontal' ></i>
          </template>
          <p @click="$router.push('/meboard')">Board</p>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-right-down-arrow-circle bx-tada bx-flip-horizontal' ></i>
          </template>
          <p @click="logout()">Salir</p>
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>
              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
        </template>
      </vs-navbar>
  </template>
<script>
    export default {

      methods : {
        logout(){
          window.localStorage.removeItem('jwt')
          window.localStorage.removeItem('userData')
          window.localStorage.removeItem('username')
          window.localStorage.removeItem('plan')
          window.localStorage.removeItem('email')
          let instance = this.$axios.create();
          delete instance.defaults.headers.common['Authorization'];
          this.go('/')
        },
        go : (route)=>{
          window.location.href = route
        }
        },
        data(){
          return {
            active: 'home',
            activeSidebar: false
        }
        
    },



    }
</script>
<style scoped>

.vs-navbar__center{
height: 70px;

}

.cup-logo{
width: 220px;
}

.vs-sidebar-content {
  height: auto;
  margin-top: 70px;
  border-radius: 0px 0px 0px 0px;
}

.vs-sidebar-content.right {
  left: auto;
  right: 0px;
  -webkit-transform: translate(110%);
          transform: translate(110%);
}
.vs-sidebar-content.right.open {
  -webkit-transform: translate(0);
          transform: translate(0);
}
.vs-sidebar-content.right.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip {
  opacity: 1;
  left: auto !important;
  right: 60px !important;
}
.vs-sidebar-content.absolute {
  position: absolute !important;
  z-index: 9001;
  /*height: 100%;*/
}
.vs-sidebar-content.relative {
  position: relative !important;
  z-index: 9001;
  height: 100%;
}
.vs-sidebar-content.textWhite .vs-sidebar__group__content:after {
  background: rgba(255, 255, 255, 0.4);
}
.vs-sidebar-content.textWhite .vs-sidebar__item:after {
  background: #fff !important;
}
.vs-sidebar-content.textWhite .vs-sidebar__item.active {
  color: #fff !important;
}
.vs-sidebar-content.notShadow {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.vs-sidebar-content.square {
  border-radius: 0px;
}
.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after {
  display: none;
}
.vs-sidebar-content.open {
  -webkit-transform: translate(0%);
          transform: translate(0%);
}
.vs-sidebar-content.reduce .vs-sidebar__footer {
  padding: 10px 0px;
}
.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content {
  width: 44px !important;
  height: 44px !important;
}
.vs-sidebar-content.reduce .vs-sidebar__logo img {
  width: 80%;
}
.vs-sidebar-content.reduce .vs-sidebar__item {
  padding-left: 16px !important;
  min-height: 47px;
}
.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text {
  font-size: 0.5rem;
}
.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text {
  -webkit-transform: translate(-10px);
          transform: translate(-10px);
  margin-left: -50px;
}
.vs-sidebar-content.reduce .vs-sidebar__item__arrow {
  position: absolute;
  left: 36px;
  top: 10px;
  -webkit-animation: delayOpacity 0.6s ease;
          animation: delayOpacity 0.6s ease;
  width: 5px;
  height: 5px;
}
.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip {
  opacity: 1;
  left: 60px;
}
.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon {
  padding: 0px !important;
}
.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after {
  left: -6px;
}
.vs-sidebar-content .vs-sidebar__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
  padding: 25px 0px;
  min-height: 80px;
}
.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 120px;
  max-height: 35px;
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
          align-items: flex-start;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.vs-sidebar-content .vs-sidebar::-webkit-scrollbar {
  width: 0px;
}
.vs-sidebar-content .vs-sidebar__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
  padding: 10px;
}
.vs-sidebar-content .vs-sidebar__footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  justify-self: flex-start;
  width: 100%;
  padding: 10px;
}
.vs-sidebar__item {
  width: 100%;
  padding: 14px 16px;
  padding-top: 15px;
  text-align: left;
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.7;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  position: relative;
  color: rgba(var(--vs-text), 1);
  border: 0px;
}
.vs-sidebar__item.hasIcon {
  padding: 0px;
}
.vs-sidebar__item.hasIcon.active {
  padding-left: 8px;
}
.vs-sidebar__item.hasIcon:hover {
  padding-left: 8px;
  opacity: 1;
}
.vs-sidebar__item:after {
  content: "";
  position: absolute;
  left: -4px;
  top: 0px;
  width: 10px;
  height: 100%;
  background: rgba(var(--vs-color), 1);
  border-radius: 0px 20px 20px 0px;
  -webkit-transform: translate(-6px);
          transform: translate(-6px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  z-index: 60;
}
.vs-sidebar__item.active:not(.hasIcon) {
  padding-left: 25px;
}
.vs-sidebar__item.active {
  opacity: 1;
  color: rgba(var(--vs-color), 1);
}
.vs-sidebar__item.active:after {
  -webkit-transform: translate(0px);
          transform: translate(0px);
}
.vs-sidebar__item__icon {
  min-width: 50px;
  height: 47px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 1.2rem;
  z-index: 50;
  background: rgba(var(--vs-background), 1);
}
.vs-sidebar__item:hover:not(.hasIcon) {
  opacity: 1;
  padding-left: 25px;
}
.vs-sidebar__item__text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 10;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  font-size: 0.9rem;
}
.vs-sidebar__item__arrow {
  width: 7px;
  height: 7px;
  position: relative;
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 15px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-transform: rotate(-135deg) !important;
          transform: rotate(-135deg) !important;
  z-index: 80;
}
.vs-sidebar__item__arrow .vs-icon-arrow:before {
  width: 2px;
}
.vs-sidebar__item__arrow .vs-icon-arrow:after {
  height: 2px;
}
.vs-sidebar__item__text-tooltip {
  position: fixed;
  left: 50px;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  font-size: 0.85rem;
  white-space: nowrap;
}
.vs-sidebar__group {
  padding: 0px;
  width: 100%;
  min-width: 260px;
  position: relative;
}
.vs-sidebar__group.open .vs-sidebar__group__content:after {
  -webkit-transform: translate(0);
          transform: translate(0);
  opacity: 1;
}
.vs-sidebar__group.open > .vs-sidebar__group__header .vs-sidebar__item {
  opacity: 1;
}
.vs-sidebar__group.open > .vs-sidebar__group__header .vs-sidebar__item__arrow {
  -webkit-transform: rotate(45deg) !important;
          transform: rotate(45deg) !important;
}
.vs-sidebar__group__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.vs-sidebar__group__content {
  overflow: hidden;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  position: relative;
}
.vs-sidebar__group__content:after {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(var(--vs-color), 0.3);
  width: 4px;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-transform: translate(-100%);
          transform: translate(-100%);
  border-radius: 0px 10px 10px 0px;
  z-index: 60;
}
.vs-sidebar__group__content .vs-sidebar__item {
  background: rgba(var(--vs-background), 1);
}
.vs-sidebar__group > .vs-sidebar__group__header .vs-sidebar__item:hover {
  padding-left: 0px;
}
</style>

