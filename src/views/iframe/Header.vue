<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <b class="navbar-brand"><img class="logo" v-bind:src="logo" style="width:200px; margin-top:-5px"/></b>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarToggle">&#9776;</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <!--<li class="nav-item d-md-down-none">-->
        <!--<a class="nav-link" href="#"><i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span></a>-->
      <!--</li>-->
      <!--<li class="nav-item d-md-down-none">-->
        <!--<a class="nav-link" href="#"><i class="icon-list"></i></a>-->
      <!--</li>-->
      <dropdown size="nav" class="nav-item">
        <span slot="button">
          <span class="d-md-down-none">{{this.$store.getters.name}}</span>
          <img class="avatar" v-bind:src="this.$store.getters.avatar">
        </span>
        <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">

          <div class="dropdown-header text-center"><strong>账户</strong></div>
          <a class="dropdown-item" href="#"><i class="fa fa-lock"></i> Logout</a>
        </div>
      </dropdown>

    </ul>
  </navbar>
</template>
<script>

  import navbar from './Navbar'
  import { dropdown } from 'vue-strap'
  import logoPng from '../../assets/logo.png';

  export default {
    name: 'Header',
    components: {
      navbar,
      dropdown
    },
    data: ()=>({
      logo: logoPng
    }),
    methods: {
      click () {
        // do nothing
      },
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
<style>
  .avatar{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    vertical-align: middle;
  }
</style>
