<script setup lang="ts">

</script>



<template>
   <section class="about">
      <div class="container custom-w2">
         <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg">
               <div class="d-inline-block imgWrapper">
                  <img src="../../assets/img/about-us.jpg" alt="About Us">
                  <svg class="svg" width="0" height="0">
                     <clipPath id="clip-path-2" clipPathUnits="objectBoundingBox">
                        <path
                           d="M0.563,0.762 s-0.01,0.041,-0.022,0.073 s-0.024,0.052,-0.039,0.08 s-0.036,0.044,-0.055,0.066 s-0.068,0.02,-0.092,0.016 A0.337,0.365,0,0,1,0.287,0.977 c-0.02,-0.009,-0.042,-0.028,-0.065,-0.046 s-0.081,-0.098,-0.097,-0.13 s-0.052,-0.103,-0.072,-0.157 s-0.033,-0.093,-0.046,-0.169 s-0.002,-0.139,0,-0.163 s0.022,-0.105,0.061,-0.158 S0.158,0.056,0.239,0.028 S0.422,-0.004,0.5,0.003 s0.205,0.065,0.234,0.081 s0.122,0.071,0.19,0.149 s0.075,0.124,0.076,0.158 s-0.024,0.076,-0.052,0.093 a0.29,0.314,0,0,1,-0.089,0.035 c-0.027,0.005,-0.125,0.054,-0.155,0.079 s-0.064,0.05,-0.087,0.079 S0.569,0.741,0.563,0.762">
                        </path>
                     </clipPath>
                  </svg>
               </div>
            </div>
            <div class="col-12 col-md-6 col-lg-auto custom-column">
               <p class="h1">
                  <span class="b700">About Us</span><br>Fake or <span class="underlined">Real</span>
               </p>
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.</p>
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.</p>
               <button type="button" class="about__btn btn btn_primary">Explore more</button>
            </div>
         </div>
      </div>
   </section>
</template>



<style scoped lang="scss">
.about {
   margin-bottom: 8.57vw;

   .row {
      row-gap: 30px;
   }

   [class*="col"] {
      text-align: center;
   }
   .imgWrapper {
      max-width: 100%;
      padding: 3vw 0 0 3vw;
      background: url("../../assets/img/banana2.png") no-repeat center;
      background-size: contain;

      img {
         max-width: 100%;
         object-fit: cover;
         clip-path: url(#clip-path-2);
      }
   }

   p:not(.h1) {
      margin-top: 1.57vw;
   }

   .about__btn {
      margin-top: 2.64vw;
   }
}


@media(min-width: 500px) {
   .about .imgWrapper img {
      max-width: 400px;
   }
}


@media(min-width: 768px) {
   .about .imgWrapper img {
      max-width: 100%;
   }

   .about [class*="col"] {
      text-align: left;
   }
}


@media(min-width: 992px) {
   
}
</style>