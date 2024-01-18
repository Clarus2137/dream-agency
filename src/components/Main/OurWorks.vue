<script setup lang="ts">

</script>



<template>
   <section class="projects">
      <div class="container-fluid px-0">
         <div class="row justify-content-between align-items-center mx-auto projects__title-row">
            <div class="col-12 col-lg-auto">
               <p class="h1">
                  <span class="b700">Our Recent Work</span><br>By Our <span class="underlined">Experts</span>
               </p>
            </div>
            <div class="col-12 col-lg-auto custom-column">
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
         </div>
         <div class="row projects__row">
            <div class="pe-0 projects__carousel owl-carousel">
               <div class="projects__item project">
                  <div class="project__icon">
                     <img src="../../assets/img/soup.png" class="w-100" alt="UI Soup">
                  </div>
                  <div class="project__info">
                     <p class="project__title">UI Soup</p>
                     <a href="#" class="project__link">View Work</a>
                  </div>
               </div>
               <div class="projects__item project">
                  <div class="project__icon">
                     <img src="../../assets/img/goldcrown.png" class="w-100" alt="Goldcrown Labs">
                  </div>
                  <div class="project__info">
                     <p class="project__title">Goldcrown Labs</p>
                     <a href="#" class="project__link">View Work</a>
                  </div>
               </div>
               <div class="projects__item project">
                  <div class="project__icon">
                     <img src="../../assets/img/soup.png" class="w-100" alt="UI Soup">
                  </div>
                  <div class="project__info">
                     <p class="project__title">UI Soup</p>
                     <a href="#" class="project__link">View Work</a>
                  </div>
               </div>
               <div class="projects__item project">
                  <div class="project__icon">
                     <img src="../../assets/img/goldcrown.png" class="w-100" alt="Close Concierge">
                  </div>
                  <div class="project__info">
                     <p class="project__title">Close Concierge</p>
                     <a href="#" class="project__link">View Work</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>



<style scoped lang="scss">
.projects {
   margin-bottom: 5.36vw;
   overflow: hidden;
   position: relative;

   &>.container-fluid {
      padding: 3.76vw 0 45px;

      @media(min-width: 768px) {
         padding-bottom: 6vw;
      }
   }

   &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-top-left-radius: 28.57vw;
      background: rgba(255, 222, 212, 0.30);
      position: absolute;
      right: 0;
      top: 0;
      z-index: -2;
   }

   .projects__title-row {
      row-gap: 30px;
      max-width: calc(100% - (76px / 1400px * 100%));
      margin-bottom: 5.71vw;

      [class*="col"] {
         text-align: center;
      }
   }

   .projects__row {
      max-width: 100%;
      margin: 0 auto;
   }

   .project {
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      padding: 1.5rem 0.625rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);

      .project__info {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         align-items: center;
         margin-top: 8.11%;
         padding: 0 2.39%;


         .project__icon {
            img {
               max-width: 100%;
            }
         }

         .project__title {
            font-size: 1.5rem;
            font-weight: 700;
         }

         .project__link {
            padding: 0 0.75rem;
            border: 1px solid #343434;
            border-radius: 100px;
            font-size: 0.875rem;
            font-weight: 500;
            text-decoration: none;
            transition: 0.25s;

            &:hover {
               background: #331b3b;
               border-color: #331b3b;
               color: #fff;
            }
         }
      }
   }
}


@media(min-width: 768px) {
   .projects {
      &::before {
         width: 88.857vw;
      }

      .projects__row {
         max-width: 88.857vw;
         margin-left: auto;
         margin-right: 0;
         padding-left: 6.71vw;
         padding-right: 0;
      }
   }
}


@media(min-width: 992px) {
   .projects {
      .projects__title-row {
         [class*="col"] {
            text-align: left;
         }
      }
   }
}


@media(min-width: 576px) {
   .projects {
      .project {
         margin-left: 0;
      }
   }
}
</style>