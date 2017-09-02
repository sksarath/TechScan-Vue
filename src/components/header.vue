<template>
  <header>
    <div class="header">
        <div class="max-width">
          <div class="logo_container">
              <router-link :to="`/`">
                <span class="comm-lab">TechScan</span>
              </router-link>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'appheader',
    data(){
      return{
        
      }
    }
  }
</script>

<style scoped>
.header
{
	width: 100%;
	background: #FFF;
	padding: 15px 20px;
	box-shadow: 0 1px 2px #c2c2c2;
	position: relative;
}
.logo_container .logo {
    width: 45px;
    max-width: 100%;
    margin-right: 8px;
}
.comm-lab
{
  font-size: 26px;
  color: #66a80f;
  letter-spacing: 0.5px;
  font-weight: 600;
}
@media only screen and (max-width: 768px)
{
  .header
  {
    text-align: center;
    padding: 12px 20px;
  }
  .comm-lab
  {
    font-size: 24px;
  }
}
</style>