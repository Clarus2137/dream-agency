<script setup lang="ts">

</script>



<template>
   <section class="intro">
      <div class="container-fluid custom-w">
         <div class="row justify-content-center justify-content-md-between align-items-center">
            <div class="col-12 col-md-6 col-lg-auto custom-column">
               <p class="h1">
                  <span class="b700">We Help you</span><br>to grow your<br><span class="underlined">Business</span>
               </p>
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.</p>
               <button type="button" class="intro__btn btn btn_primary">Get started</button>
            </div>
            <div class="col-12 col-md-6 col-lg text-right">
               <div class="d-inline-block imgWrapper">
                  <img src="../../assets/img/wehelp.jpg" alt="We help">
                  <svg class="svg" width="0" height="0">
                     <clipPath id="clip-path-1" clipPathUnits="objectBoundingBox">
                        <path
                           d="M0.11,0.987 a0.196,0.271,0,0,1,-0.059,-0.063 c-0.03,-0.048,-0.04,-0.098,-0.045,-0.125 c-0.01,-0.053,-0.007,-0.096,-0.005,-0.142 A0.446,0.615,0,0,1,0.015,0.549 c0.003,-0.017,0.01,-0.042,0.023,-0.092 c0.022,-0.084,0.029,-0.104,0.035,-0.119 a0.425,0.587,0,0,1,0.027,-0.062 c0.021,-0.042,0.056,-0.114,0.12,-0.177 c0.024,-0.024,0.069,-0.067,0.135,-0.087 C0.394,0,0.424,0,0.443,0 C0.456,0,0.513,0.001,0.585,0.033 c0.052,0.023,0.088,0.052,0.118,0.076 c0.022,0.017,0.051,0.041,0.086,0.08 a0.59,0.814,0,0,1,0.1,0.145 c0.031,0.058,0.049,0.109,0.062,0.144 c0.014,0.04,0.025,0.069,0.034,0.11 c0.008,0.038,0.017,0.097,0.014,0.174 q0,0.052,0,0.103 c-0.004,0.016,-0.019,0.074,-0.06,0.102 c-0.027,0.018,-0.054,0.015,-0.073,0.013 a0.184,0.254,0,0,1,-0.066,-0.025 A0.665,0.917,0,0,0,0.735,0.922 a0.675,0.931,0,0,0,-0.119,-0.036 a0.663,0.915,0,0,0,-0.168,0.001 c-0.017,0.004,-0.031,0.009,-0.041,0.012 c-0.016,0.006,-0.024,0.009,-0.032,0.014 c-0.005,0.003,-0.01,0.006,-0.016,0.01 c-0.011,0.008,-0.015,0.011,-0.022,0.016 c-0.01,0.007,-0.017,0.011,-0.026,0.016 c-0.007,0.004,-0.021,0.011,-0.044,0.02 c-0.02,0.008,-0.041,0.016,-0.068,0.021 c-0.016,0.003,-0.029,0.005,-0.048,0.002 A0.178,0.246,0,0,1,0.11,0.987">
                        </path>
                     </clipPath>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>



<style scoped lang="scss">
.intro {
   margin-bottom: 7.57vw;

   .row {
      row-gap: 30px;
   }

   [class*="col"] {
      text-align: center;
   }

   .h1 {
      margin-bottom: 1.93vw;
      font-size: clamp(3.3rem, 6.25vw, 5.4375rem);
      line-height: 0.998;
      letter-spacing: -0.87px;
   }

   .intro__btn {
      margin-top: 2.21vw;
   }

   .imgWrapper {
      padding: 4vw 0;
      background: url("../../assets/img/banana1.png") no-repeat left center;
      background-size: contain;

      img {
         max-width: 100%;
         object-fit: cover;
         clip-path: url(#clip-path-1);
      }
   }
}


@media(min-width: 500px) {
   .intro .imgWrapper img {
      max-width: 400px;
   }
}


@media(min-width: 768px) {
   .intro {
      .imgWrapper {
         img {
            max-width: 100%;
         }
      }

      [class*="col"] {
         text-align: left;
      }

      .text-right {
         text-align: right;
      }
   }
}
</style>