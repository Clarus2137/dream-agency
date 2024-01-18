<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const successMessage = ref<string>('');
const errorMessage = ref<string>('');

const submitForm = async () => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email: email.value }),
      });

      if (response.ok) {
         successMessage.value = 'E-mail został pomyślnie wysłany';
         email.value = '';
         errorMessage.value = '';
      } else {
         errorMessage.value = 'Błąd podczas wysyłania wiadomości e-mail';
         successMessage.value = '';
      }
   } catch (error: any) {
      errorMessage.value = 'Nastąpił błąd: ' + (error instanceof Error ? error.message : 'Nieznany błąd');
      successMessage.value = '';
   }
};
</script>



<template>
   <footer class="footer">
      <div class="container custom-w2">
         <div class="row justify-content-center justify-content-md-between footer__row">
            <div class="col-12 col-md-7 col-lg-6 col-lg-auto">
               <div class="d-flex flex-wrap footer__info">
                  <div class="footer__logo">
                     <a href="#">Dream Agency</a>
                  </div>
                  <div class="footer__description">
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries.</p>
                  </div>
                  <div class="footer__form">
                     <form @submit.prevent="submitForm">
                        <p class="email">
                           <label for="email">Get in touch</label>
                        </p>
                        <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
                        <button type="submit">Send</button>
                        <div v-if="successMessage">{{ successMessage }}</div>
                        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                     </form>
                  </div>
               </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6">
               <div class="footer__map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.468813027545!2d19.524710738919598!3d51.7341761929665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3343d6b14f69%3A0x16c58de60c07681!2zVWwuIEdlbi4gSmFyb3PFgmF3YSBExIVicm93c2tpZWdvIDI0OS8yMywgOTMtMjMxIMWBw7Nkxbo!5e0!3m2!1sru!2spl!4v1705552382579!5m2!1sru!2spl"
                     width="100%" height="300" style="border:0;" allowfullscreen="false" loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>



<style scoped lang="scss">
.footer {
   padding: 5vw 0;
   position: relative;

   * {
      color: #fff;
   }

   &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
      border-top-right-radius: 11.3vw;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
   }

   .footer__row {
      row-gap: 30px;
   }

   .footer__logo > a {
      text-decoration: none;
   }

   .footer__info {
      row-gap: 30px;

      .footer__logo {
         font-family: "Playfair Display";
         font-size: 2.25rem;
         font-weight: 700;
         letter-spacing: 0.36px;
      }

      .error-message {
         color: #f00;
      }

      .footer__description,
      .email {
         font-size: 1rem;
         line-height: 159.3%;
         letter-spacing: 0.32px;
      }

      .email {
         margin-bottom: 1.07vw;
         font-weight: 600;
         text-transform: uppercase;
      }
   }

   input {
      padding: 0.75rem;
      background: transparent;
      border: 1px solid #fff;

      &::placeholder {
         color: #fff !important;
         font-size: 1rem;
         font-weight: 400;
         line-height: 1.593;
         letter-spacing: 0.32px;
         text-transform: uppercase;
      }
   }

   button {
      margin: 0;
      padding: 0.75rem 3.125rem;
      background: #fff;
      border: 1px solid #fff;
      color: #000;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.593;
      letter-spacing: 0.32px;
      text-transform: uppercase;
      transition: 0.4s;

      &:hover {
         background: transparent;
         color: #fff;
      }
   }

   .footer__map {
      max-width: 100%;
      margin: 0 auto;

      @media(min-width: 768px) {
         max-width: 484px;
      }
   }
}


@media(min-width: 1200px) {
   .footer__info {
      max-width: 31.36vw;
   }
}


@media(min-width: 992px) {
   .footer__info {
      max-width: 37vw;
   }
}


@media(min-width: 992px) {
   .footer__row {
      margin: 0;
   }
}
</style>



<!-- <svg xmlns="http://www.w3.org/2000/svg" width="570" height="712" viewBox="0 0 570 712" fill="none">
   <path d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z" fill="#FEC828" fill-opacity="0.2"/>
   </svg> -->