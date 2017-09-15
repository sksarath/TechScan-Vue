<template>  
  <div class="container">
    <appheader></appheader>
    <maincontent></maincontent>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from '@/components/header';
import appfooter from '@/components/footer';
import maincontent from '@/components/maincontent';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appheader,
    appfooter,
    maincontent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
