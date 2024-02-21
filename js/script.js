// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;

createApp({
    data() {

        return {

            // memorizzo in una variabile il mio indirizzo mail
            email: '',

            // creo un array, inizialmente vuoto dove andrò a memorizzare tutti i miei indirizzi
            emails: [],

            // utilizzo una variabile booleana che mi indicherà quando tutte le mail sono state caricate
            emailsLoaded: false,
            
            numberEmails: 0,
            userChoice: false, 

        }
    },

    mounted() {

        // if(this.userChoice) {
        //     for(let i = 0; i < this.numberEmails; i++) {
        //         axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {

        //             // salvo nella variabile la mail presa dall'api
        //             this.email = result.data.response;

        //             // la aggiungo al mio array di email
        //             this.emails.push(this.email);

        //             if(i >= this.numberEmails - 1) {
        //                 this.emailsLoaded = true;
        //             }
        //         });
        //     }
        // }

    },

    methods: {

        number() {

            this.emails = [];

            if(this.numberEmails > 0) {

                for(let i = 0; i < this.numberEmails; i++) {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
    
                        // salvo nella variabile la mail presa dall'api
                        this.email = result.data.response;
    
                        // la aggiungo al mio array di email
                        this.emails.push(this.email);
    
                        if(i >= this.numberEmails - 1) {
                            this.emailsLoaded = true;
                        }
                    });
                }
    
            }
            
        }
            

    }



}).mount("#app");

