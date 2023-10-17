<template>
  <v-app>
    <nuxt></nuxt>
    <Tabbar />
    <Dialog/>
  
  </v-app>
</template>

<script>
import Dialog from '~/components/Dialog'
import Tabbar from '~/components/Tabbar'

export default {
  components: {
    Dialog,
    Tabbar
  }
}
</script>

<style lang="scss">
  .v-application{
    font-family: 'Quicksand', sans-serif;
  }
  .v-toolbar__title{
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
  .v-application .primary{
    background-color: #ff168a !important;
    border-color: #ff168a !important;
  }
  .text-primary{
    color: #ff168a !important;
  }
  .bold{
    font-weight: bold;
  }
  .text-main{
    font-size: 20px;
  }
  .text-title{
    font-size: 20px;
    font-weight: bold;
  }
  .w-100{
    width: 100%;
  }
  .my-btn{
    font-size: 20px !important;
    text-transform: none !important;
    height: auto !important;
    padding: 10px 0 !important;
    font-weight: bold;
    min-height: 50px;
    &.outlined{
      border: 1px solid #ff168a;
      border-radius: 28px;
      line-height: normal;
    }
  }
  .mt-100{
    margin-top: 100px;
  }
  .set-padding{
    padding: 0 10px;
  }
</style>
