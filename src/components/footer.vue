<template>
  <div class="footer">
      <a href="http://codepen.io/sksarath5" target="_blank">
          <i class="fa fa-codepen"></i>
          Codepen
      </a>
      <a href="https://www.behance.net/sksarath5" target="_blank">
          <i class="fa fa-behance"></i>
          Behance
      </a>
  </div>
</template>

<script>
  export default {
    name: 'appfooter',
    data(){
      return{
        sample: 'Hi'
      }
    }
  }
</script>

<style scoped>
.footer {
    width: 100%;
    padding: 10px 35px;
    background: #454545;
    text-align: right;
    color: #FFF;
    float: left;
}

.footer i {
    padding: 0 5px;
}

.footer a {
    color: #FFF;
    cursor: pointer;
}

.footer a:hover,
.footer a:focus {
    color: #eee;
    text-decoration: none;
}
</style>