<script setup lang="ts">

</script>



<template>
   <section class="reviews">
      <div class="container custom-w2">
         <div class="row justify-content-center">
            <div class="col-auto">
               <p class="h1 text-center">
                  <span class="b700">Our Testimonails</span><br>What Our Clients Are <span class="underlined">Saying</span>
               </p>
            </div>
         </div>
         <div class="row justify-content-center reviews__row">
            <div class="col-12 col-sm-6 col-lg-auto">
               <div class="reviews__item review">
                  <div class="review__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path
                           d="M44.4128 51.5905L54.4 30.5185V12.4097H33.9856V31.6161H41.7776L33.9856 51.5905H44.4128ZM37.0336 28.5681V15.4593H51.3504V29.8321L42.4816 48.5409H38.4464L46.2352 28.5697H37.0336V28.5681Z"
                           fill="#FDC221" />
                        <path
                           d="M20.0272 51.5905L30.0144 30.5185V12.4097H9.59998V31.6161H17.3936L9.59998 51.5905H20.0272ZM12.648 28.5681V15.4593H26.9648V29.8321L18.0976 48.5409H14.0624L21.8512 28.5697H12.648V28.5681Z"
                           fill="#FDC221" />
                     </svg>
                  </div>
                  <div class="review__text">
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries.</p>
                  </div>
                  <div class="review__author">
                     <p>UI Soup</p>
                  </div>
               </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-auto">
               <div class="reviews__item review">
                  <div class="review__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path
                           d="M44.4128 51.5905L54.4 30.5185V12.4097H33.9856V31.6161H41.7776L33.9856 51.5905H44.4128ZM37.0336 28.5681V15.4593H51.3504V29.8321L42.4816 48.5409H38.4464L46.2352 28.5697H37.0336V28.5681Z"
                           fill="#FDC221" />
                        <path
                           d="M20.0272 51.5905L30.0144 30.5185V12.4097H9.59998V31.6161H17.3936L9.59998 51.5905H20.0272ZM12.648 28.5681V15.4593H26.9648V29.8321L18.0976 48.5409H14.0624L21.8512 28.5697H12.648V28.5681Z"
                           fill="#FDC221" />
                     </svg>
                  </div>
                  <div class="review__text">
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries.</p>
                  </div>
                  <div class="review__author">
                     <p>UI Soup</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>



<style scoped lang="scss">
.reviews {
   .reviews__row {
      margin: 4.21vw 0 6.57vw;
   }

   .review {
      width: 100%;
      padding: 1.5rem 2rem;
      box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.08);
      font-size: 1rem;
      line-height: 1.593;
      letter-spacing: 0.32px;

      .review__text {
         margin: 4% 0;
         font-weight: normal;
      }

      .review__author {
         padding-left: 18px;
         color: #000;
         font-weight: 600;
         position: relative;

         &::before {
            content: "";
            display: block;
            width: 11px;
            height: 3px;
            background: #fdc221;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
         }
      }
   }
}


@media(min-width: 992px) {
   .reviews__row {
      column-gap: 4.93vw;
   }
   .review {
      max-width: 32vw;
   }
}
</style>