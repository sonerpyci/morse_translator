<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <img id="kartacaLogo" src="./assets/kartaca-logo.png" class="rounded float-left" alt="...">
        </div>

        <div class="col-sm-6">
          <img id="vueLogo" src="./assets/logo.png" class="rounded float-right" alt="...">
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-sm-12">
        <h1 class="display-3">Welcome To Morse-Latin Translator!</h1>
        <br>
        <br>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#kartacaLogo {
  height: 125px;
  margin-left: 5rem;
}
#vueLogo {
  height: 125px;
  margin-right: 5rem;
}
.display-3 {
  font-size: 4.5vw;
}
@media only screen and (max-width: 920px) {
  .display-3 {
    font-size: 5vw;
  }
}
@media only screen and (max-width: 575px) {
  #vueLogo {
    display: none;
  }
  #kartacaLogo {
    float: none !important;
    margin-left: 0;
  }
  .display-3 {
    font-size: 7.0vw;
  }
}
</style>
