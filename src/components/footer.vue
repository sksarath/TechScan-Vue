<template>
  <div class="footer">
      "Always be yourself and have faith in yourself" - Bruce Lee
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
    font-size: 12px;
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