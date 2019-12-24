<template>
  <div class="home">
    
    <router-link to="/learn1">
      <ul class="nav">
       <li><img src="../img/22.jpg"></li>
       <li>自我介绍</li>
      </ul>
    </router-link> 
    <div class="content">
      您好，我叫王玉成来自河北张家口，
      今年23岁，在北京财经专修学院学习2年，
      今来贵公司面试实习岗位。
    </div>
    
  </div>
</template>
<style>
  *{
	margin:0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
  .box{
    width: 100%;
    height: 50px;
    
  }
  .nav{
    width: 100%;
    height: 200px;
   
    display: flex;
  }
  .nav li{
    flex:1;
    text-align: center;
    line-height: 200px;
  }
  .nav li{
    text-align: center;
    font-size: 52px;
    color:aqua;
  }
  .nav img{
    width: 150px;
    height: 200px;
  }
  .content{
    width: 100%;
    padding: 0 20px;
    line-height: 40px;
    margin-top: 20px;
  }
</style>

<script>
// @ is an alias to /src


export default {
  name: "home",
  components: {
    
  }
};
</script>
