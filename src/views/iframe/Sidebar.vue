<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="divider"></li>
        <li class="nav-title">
          Dashboard
        </li>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/job'}">
          <li class="nav-item">
            <router-link :to="'/job/list'" class="nav-link" exact><i class="icon-disc"></i> JOB列表</router-link>
          </li>

        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>

  export default {
    name: 'sidebar',
    methods: {
      handleClick (e) {
        e.preventDefault()
        e.target.parentElement.classList.toggle('open')
      }
    }
  }
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
  .sidebar .nav .nav-item.sub-level-1 {
    padding-left: 10px;
  }
</style>
