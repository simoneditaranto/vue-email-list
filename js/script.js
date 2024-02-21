// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).

const {createApp} = Vue;

createApp({
    data() {

        return {

            // memorizzo in una variabile il mio indirizzo mail
            email: '',

        }
    },

    mounted() {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {

            this.email = result.data.response;
            

        });

    },


}).mount("#app");

