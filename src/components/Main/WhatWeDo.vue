<script setup lang="ts">

</script>



<template>
   <section class="services">
      <div class="container-fluid px-0">
         <div class="row justify-content-center">
            <div class="col-auto">
               <p class="h1 text-center">
                  <span class="b700">What We Do</span><br>For Yor <span class="underlined">Business</span>
               </p>
            </div>
         </div>
         <div class="row services__row">
            <div class="services__carousel owl-carousel">
               <div class="services__item service">
                  <div class="service__icon">
                     <img src="../../assets/img/design-icon.png" class="w-100" alt="Website design">
                  </div>
                  <p class="service__title">Website design</p>
                  <p class="service__info">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
               </div>
               <div class="services__item service">
                  <div class="service__icon">
                     <img src="../../assets/img/webdev-icon.png" class="w-100" alt="Web Development">
                  </div>
                  <p class="service__title">Web development</p>
                  <p class="service__info">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
               </div>
               <div class="services__item service">
                  <div class="service__icon">
                     <img src="../../assets/img/mobile-icon.png" class="w-100" alt="Mobile App Development">
                  </div>
                  <p class="service__title">Mobile App Development</p>
                  <p class="service__info">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
               </div>
               <div class="services__item service">
                  <div class="service__icon">
                     <img src="../../assets/img/marketing-icon.png" class="w-100" alt="Marketing">
                  </div>
                  <p class="service__title">Marketing</p>
                  <p class="service__info">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>



<style scoped lang="scss">
.services {
   margin-bottom: 5.21vw;
   padding-bottom: 5.29vw;
   overflow: hidden;
   position: relative;

   .container-fluid {
      padding: 6.57vw 0 45px;
      overflow-x: hidden;
   }

   &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-top-right-radius: 28.57vw;
      background: #ecf7ff;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -2;
   }

   &::after {
      content: "";
      display: block;
      width: 38%;
      height: 76.38%;
      background: url("../../assets/img/services-ellipse.png") no-repeat;
      background-size: contain;
      position: absolute;
      right: -4%;
      bottom: 0;
      z-index: -3;
   }

   .services__row {
      margin-top: calc(6.79vw - 10px);
      padding-left: calc(var(--bs-gutter-x) * .5);
   }

   .service {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 0.75rem;
      max-width: 308px;
      margin: 0 auto;
      padding: 1rem;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);

      &>* {
         width: 100%;
      }

      .service__icon {
         width: 52px;
         height: 48px;
         border-radius: 10px;
      }

      p {
         margin: 0;
      }

      .service__title {
         font-size: 1rem;
         font-weight: 700;
         line-height: 1.373;
         letter-spacing: 0.88px;
         text-transform: uppercase;
      }

      .service__info {
         font-size: 0.9375rem;
         font-weight: 300;
         line-height: 1.453;
         letter-spacing: 0.3px;
         opacity: 0.66;
      }
   }
}

@media(min-width: 768px) {
   .services {
      .container-fluid {
         padding-bottom: calc(6.93vw - 10px);
      }

      &::before {
         width: 96.32vw;
         height: 87.2%;
      }

      .services__row {
         padding-left: 18.93vw;
      }
   }


   @media(min-width: 576px) {
      .services {
         .service {
            margin-left: 0;
         }
      }
   }
}
</style>