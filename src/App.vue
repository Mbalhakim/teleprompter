<template>



  <router-view />

</template>

<style lang="scss">

</style>
<script>

// import axios from "axios";
// import {useStore} from 'vuex'


// const store = useStore();
export default {

  data(){
    return {
      msg:'',
      socketMessage: '',
      connection : null
    }
  },
  methods:{


  },
  // async created(){
  //   // SocketioService.setupSocketConnection();
  //
  //   const respon = await axios.get('http://127.0.0.1:8000/api/users');
  //   await store.dispatch('user', respon.data);
  //
  // },

  beforeUnmount() {

  },

}
</script>
