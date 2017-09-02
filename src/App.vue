<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
*
{
  box-sizing: border-box;
}
body
{
  margin: 0;
  display: block;
  padding: 0;
  width: 100%;
  background-color: #eeeeee;
}
a
{
  text-decoration: none;
}
a:hover, a:focus, a:active
{
  outline: none;
  text-decoration: none;
}
.clearfix
{
  clear: both;
}
.max-width
{
  max-width: 1200px;
  margin: auto;
}
.main-layout
{
  padding: 40px 0;
  min-height: 700px;
  display: block;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@media only screen and (max-width: 768px)
{
  .main-layout
  {
    padding: 20px 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width:1200px)
{
  .main-layout
  {
    padding: 40px 20px;
  }
}
</style>
