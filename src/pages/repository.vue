<template>
  <div class="container">
    <appheader></appheader>
    <div class="main-layout max-width">
      <div v-if="loading">
        <div class="spinner">
        </div>
        Please Wait....
      </div>
      <div v-if="!loading">
        <div class="repository-list">
          <h1>Language is {{ langId }}</h1>
          <h2 class="heading">{{totalRepoCount | numberFormate}} repository results</h2>
          <div class="search_box">
              <input type="text" class="search_input" placeholder="Search" v-model="query">
          </div>
          <div class="clearfix"></div>
          <div class="list-container">
            <div v-for="repo in searchList">
              <uirow :repo="repo">
                <router-link class="author" :to="`/profile/`+repo.owner.login">Author/Organization: <span>{{repo.owner.login}}</span></router-link>
              </uirow>
            </div>
          </div>
        </div>
        <div class="pagination">
          <a v-if="page > 1" class="pag-link" v-on:click.prevent="prevPage()">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            Prev
          </a>
          <a class="pag-link" v-on:click.prevent="nextPage()">
            Next 
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
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
    name: 'repository',
    props: ['msg'],
    data(){
      return{
       repositories:[],
       totalRepoCount: '',
       langId: '',
       page: 1,
       query: '',
       loading: true,
      }
    },
    components:{
      appheader,
      appfooter,
      uirow
    },
    computed:{
      searchList() 
      {
        return this.repositories.filter(repo => {
          return repo.full_name.toLowerCase().includes(this.query.toLowerCase())
        })
      }
    },
    created(){
      this.langId = this.$route.params.langId
      this.getData();
    },
    methods:{
      prevPage:function(){
        this.page-=1;
        this.loading = true;
        this.getData();
      },
      nextPage:function(){
        this.page+=1;
        this.loading = true;
        this.getData();
      },
      getData:function(){
        axios.get(`https://api.github.com/search/repositories?q=language:` + this.langId + `&sort=stars&per_page=9&page=`+ this.page)
        .then(response => {
          this.repositories = response.data.items;
          this.totalRepoCount = response.data.total_count;
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    },
    filters:{
      numberFormate:function(value){
        return value.toLocaleString()
      }
    },
  }
</script>

<style scoped>
  .heading
  {
    margin: 0 0 15px 0;
    font-size: 20px;
    letter-spacing: 0.5px;
    display: inline-block;
  }
  .icon-holder
  {
    width: 80px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 30px;
  }
  .pagination
  {
    text-align: right;
    padding-top: 20px;
  }
  .pag-link
  {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    color: #4dadf7;
    font-size: 14px;
    background-color: #FFF;
    cursor: pointer;
    font-weight: 500;
    vertical-align: middle;
  }
  .list-container
  {
    min-height: 500px;
  }
  .search_box 
  {
    float: right;
    margin: 0 0 15px 15px;
    display: inline-block;
  }
  .search_box .search_input 
  {
      width: 250px;
      height: 40px;
      border-radius: 3px;
      padding: 0 10px;
      border: 1px solid #ccc;
      color: #2b2b2b;
      letter-spacing: 0.5px;
      font-size: 15px;
      transition: all 0.1s ease-in;
  }
  .search_box .search_input:focus 
  {
      outline: none;
      border: 1px solid #4dadf7;
  }
  .spinner 
  {
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-left-color: #a9e34b;
    border-right-color: #a9e34b;
    animation: spin 2s ease infinite;
    position: fixed;
    top: 30%;
    left: 0;
    right: 0;
    margin: auto;
  }
  @keyframes spin 
  {
    0% {
      transform: rotate(0deg) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: rotate(180deg) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: rotate(360deg) scale(1);
      opacity: 0.5;
    }
  }
</style>