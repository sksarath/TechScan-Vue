<template>
  <div class="container">
    <appheader></appheader>
    <div class="main-layout max-width">
      <div class="contibutors">
        <h2 class="heading">
          <i class="fa fa-users" aria-hidden="true"></i>
          Contributors
        </h2>
        <div class="profile-container">
          <div class="profile-pic" v-for="item in profile">
            <a :href="item.html_url" target="_blank">
              <img :src="item.avatar_url">
            </a>
          </div>
        </div>
      </div>
      <div class="repo-details">
        <h2 class="heading">
          <i class="fa fa-github" aria-hidden="true"></i>
          Other Repositories
        </h2>
        <div class="row">
          <div class="wd-50">
            <div v-for="repo in repos_1">
              <uirow :repo="repo"></uirow>
            </div>
          </div>
          <div class="wd-50">
            <div v-for="repo in repos_2">
              <uirow :repo="repo"></uirow>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from '@/components/header';
import appfooter from '@/components/footer';
import uirow from '@/components/ui-row';
import axios from 'axios';
  export default {
    name: 'profile',
    data(){
      return{
        profile:[],
        repos:[],
        profileId:'',
        repos_1:[],
        repos_2:[],
      }
    },
    components:{
      appheader,
      appfooter,
      uirow
    },
    created(){
      this.profileId = this.$route.params.profileId
      console.log(this.profileId);
      /* Ajax Profle */
      axios.get(`https://api.github.com/search/users?q=`+ this.profileId )
      .then(response => {
        this.profile = response.data.items
      })
      .catch(e => {
        this.errors.push(e)
      })
      /* Ajax Repo */
      axios.get(`https://api.github.com/users/` + this.profileId + `/repos?sort=updated`)
      .then(response => {
        this.repos = response.data
        var data=this.repos;
        this.repos_1=data.slice(0,data.length/2);
        this.repos_2=data.slice(data.length/2, data.length);
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
  }
</script>

<style scoped>
  .heading
  {
    display: block;
    font-size: 20px;
    margin: 0;
    padding-bottom: 15px;
  }
  .contibutors
  {
    
  }
  .profile-container
  {
    text-align: left;
  }
  .profile-pic
  {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    display: inline-block;
    padding: 6px;
  }
  .profile-pic img
  {
    max-width: 100%;
    border-radius: 4px;
  }
  .repo-details
  {
    padding-top: 20px;
  }
  .row
  {
    display: block;
    clear: both;
  }
  .wd-50
  {
    width: 50%;
    float: left;
    padding: 10px;
  }
  @media only screen and (max-width: 768px)
  {
    .wd-50
    {
      width: 100%;
    }
  }
</style>