// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            mail: [],
            mailActive: 0
        }
    },
    mounted() {
        for(let i=0; i<10; i++){
            this.mailActive = i + 1;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.mail.push(result.data.response)
            })
        }
    }
}).mount('#app')