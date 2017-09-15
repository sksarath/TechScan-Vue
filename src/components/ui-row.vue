<template>
  <div class="indiv_item">
    <div class="info">
        <i class="fa fa-github-alt" aria-hidden="true"></i>
        <label class="name">{{repo.full_name}}</label>
    </div>
    <div class="repo_overview">
      <p class="stars">
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>{{repo.stargazers_count | numberFormate}}</span>
      </p>
      <p class="watchers">
        <i class="fa fa-eye" aria-hidden="true"></i>
        <span>{{repo.watchers | numberFormate}}</span>
      </p>
      <p class="forks">
        <i class="fa fa-code-fork" aria-hidden="true">
        </i>
        <span>{{repo.forks | numberFormate}}</span>
      </p>
    </div>
    <div class="about_project">
      <label class="language">Language: <span>{{repo.language}}</span></label>
      <p class="description">Description: <span>{{repo.description}}</span></p>
      <slot></slot> 
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'uirow',
    props: ['repo'],
    data(){
      return{
      }
    },
    filters:{
      numberFormate:function(value){
        return value.toLocaleString()
      }
    }
  }
</script>

<style scoped>
  .indiv_item {
    width: 100%;
    margin-bottom: 10px;
    background: #FFF;
    border-radius: 2px;
    padding: 10px 15px;
    box-shadow: 0 1px 2px #e3e3e3;
  }

  .indiv_item a {
      cursor: pointer;
      display: block;
  }

  .indiv_item:hover {
      background: #f8f9fa;
  }
  .indiv_item .info
  {
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 10px;
  }
  .indiv_item .info i
  {
    color: #337ab7;
  }
  .indiv_item .name {
      display: inline-block;
      font-weight: 500;
      color: #000;
      font-size: 17px;
      padding-left: 10px;
      letter-spacing: 0.5px;
  }

  .indiv_item .repo_overview {
      float: right;
      display: inline-block;
  }
  .indiv_item .stars,
  .indiv_item .watchers,
  .indiv_item .forks {
      font-size: 12px;
      margin: 0 8px 0 0;
      display: inline-block;
      color: #212529;
      font-weight: 500;
  }
  .indiv_item .stars i
  {
    margin-right: 3px;
    color: #ffd43b;
  }
  .indiv_item .watchers i,
  .indiv_item .forks i {
      margin-right: 3px;
            color: #495057;
  }

  .indiv_item .about_project {

  }

  .indiv_item .about_project .language {
      padding-right: 10px;
      font-weight: 500;
      margin: 0;
      letter-spacing: 0.3px;
      font-size: 15px;
      padding-bottom: 5px;
      display: block;
      color: #495057;
  }

  .indiv_item .about_project .language span {
      font-size: 13px;
      letter-spacing: 0.5px;
      font-weight: 400;
      color: #212529;
  }

  .indiv_item .about_project .description {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.3px;
      padding-bottom: 5px;
      margin: 0;
      color: #495057;
  }

  .indiv_item .about_project .author {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.3px;
      margin: 0;
      color: #337ab7;
      height: 40px;
      line-height: 40px;
      border-radius: 2px;
      display: inline-block;
      text-decoration: underline;
  }

  .indiv_item .about_project .description span {
      font-weight: 400;
      font-size: 13px;
      letter-spacing: 0.5px;
      color: #212529;
  }
</style>