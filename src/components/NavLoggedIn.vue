<template>

  <nav class="navbar navbar-expand-lg text-light bg-dark ">
    <a class="navbar-brand" href="/">
      <img alt="Teleprompter" style="height: 36px" src="https://cdn.dribbble.com/users/152613/screenshots/4550291/media/cec2018c45e5fbc2f83998d84e61d3a8.png"/>
    </a>
    <div class=" navbar-collapse  " id="navbarNav">
      <ul class="navbar-nav ">

        <li class="nav-item" style="background-color: #ae3434; border-radius: 50px">
          <router-link :to="{ name: 'Home'}" class="nav-link" >Projecten</router-link>
        </li>

      </ul>





    </div>

  </nav>

</template>

<script>



export default {
  name: "Nav-comp",
  data(){ return{
    display:null,

  }},

  methods: {

  },
  computed: {

  },
  mounted() {

  },

}
</script>

<style>
nav .navbar-nav li a{
  color: white !important;
}

</style>