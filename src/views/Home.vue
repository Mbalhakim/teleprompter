<template>
  <NavLoggedIn/>
  <section class="dark">
    <div class="container py-4">


      <h1 class="h1 text-center" id="pageHeaderTitle">PodCast Projecten</h1>

      <article class="postcard dark blue" key='1'>


        <div class="postcard__text">
          <h1 class="postcard__title blue"> Spiderman Script from sezione one </h1>
          <ul class="postcard__tagbox">
            <li class="tag__item"><i class="fa-solid fa-calendar-days mr-2"></i>Datum: 2022/02/02
            </li>
            <li class="tag__item"><i class="fa-solid fa-clock mr-2"></i>Tijd: 10:00 am</li>

          </ul>
          
          <div class="postcard__subtitle small">

          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview">Description: This is the script of Spider-Man as it appears in the film. the scripts contain every character in the script from sezione one. it contain more than 1910 words.
            You can use the Teleprompter to let the text scroll on its own with the speed you choose. You can also flip the text horizontally and vertically if you are going to use a mirror for the teleprompter. You can also cahnge the background color and the font color for beter reading.</div>


          <ul class="postcard__tagbox">

            <li class="tag__item"><i class="fas fa-tag mr-2"></i>Type: Script</li>



            <router-link :to="{ name: 'project', params: { id : 1 }}">
              <button class="btn btn-light">Open Teleprompter</button>
            </router-link>
          </ul>
        </div>




      </article>

    </div>
  </section>

</template>


<script>

import NavLoggedIn from "@/components/NavLoggedIn";
import moment from "moment";
import {mapGetters} from "vuex";

export default {
  name: 'Projcts-view',

  data() {
    return {
      email: "",
      password: "",
      projects: [],
      isConnected: false,
      url: process.env.VUE_APP_API_ENDPOINT + "/project/show/",


    };
  },
  components: {NavLoggedIn},

  methods: {
    // A function that takes a value and returns a date in the format DD-MM-YYYY
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },
    // A function that takes a value and returns a date in the format DD-MM-YYYY
    format_time(value) {
      if (value) {
        return moment(String(value)).format(' H:mm')
      }
    },

  },
  async mounted() {
    // A function that is called when the component is mounted. It is a function that gets the data from the API and puts
    // it in the projects variable.



  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {

  },

};
</script>

<style lang="scss">

@import '../assets/home';


</style>