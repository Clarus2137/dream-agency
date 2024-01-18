<script setup lang="ts">

</script>



<template>
   <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid px-0">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <span>Home</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <span>About Us</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <span>Services</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <span>Contact Us</span>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>



<style scoped lang="scss">
.navbar-expand-lg .navbar-nav .nav-link {
   padding-right: 0;
   padding-left: 0;
   color: #331b3b;
   font-size: 1rem;
   font-weight: normal;
   letter-spacing: 0.16px;

   span {
      position: relative;

      &::after {
         content: "";
         display: none;
         width: 50%;
         height: 2px;
         background: #fdc221;
         position: absolute;
         left: -2px;
         top: 100%;
      }
   }

   &:hover {
      font-weight: 600;

      span::after {
         display: block;
      }
   }

   @media(min-width: 992px) {
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      font-size: 0.845rem;
   }

   @media(min-width: 1200px) {
      font-size: 1rem;
   }
}

.navbar-toggler {
   margin: 0 auto;

   @media(min-width: 768px) {
      margin: 0;
   }
}
</style>