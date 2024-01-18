<script setup lang="ts">
import HeaderNav from './HeaderNav.vue';
import HeaderLogo from './HeaderLogo.vue';
import HeaderSocials from './HeaderSocials.vue'
</script>



<template>
   <header class="header">
      <div class="container">
         <div class="row align-items-top align-items-lg-center">
            <div class="col-12 col-md-4 order-3 order-md-1 header__nav">
               <HeaderNav />
            </div>
            <div class="col-12 col-md-4 order-1 order-md-2 text-center">
               <HeaderLogo />
            </div>
            <div class="ccol-12 col-md-4 order-2 order-md-3">
               <HeaderSocials />
            </div>
         </div>
      </div>
   </header>
</template>



<style scoped lang="scss">
.header {
   padding: 25px 0;

   & > .container {
      max-width: calc(100% - (76px / 1400px * 100%));

      .row {
         row-gap: 20px;
      }
   }


   @media(min-width: 992px) {
      .header__nav {
         padding-left: 0;
      }
   }
}
</style>