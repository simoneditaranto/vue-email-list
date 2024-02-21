// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).

const {createApp} = Vue;

createApp({
    data() {

        return {

            // memorizzo in una variabile il mio indirizzo mail
            email: '',

            // creo un array, inizialmente vuoto dove andrò a memorizzare tutti i miei indirizzi
            emails: [],

        }
    },

    mounted() {

        for(let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {

                // salvo nella variabile la mail presa dall'api
                this.email = result.data.response;

                // la aggiungo al mio array di email
                this.emails.push(this.email);

            });

           
        }

        // console.log(this.emails)

    },


}).mount("#app");

