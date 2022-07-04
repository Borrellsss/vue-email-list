// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el: "#root",
        data: {
            emails: [],
        },
        methods: {

        },
        mounted() {
            for(let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    if(!this.emails.includes(response.data.response)) {
                        this.emails.push(response.data.response);
                        
                        // !DEBUG!
                        // console.log(this.emails);
                    }
                });
            }
        },
    }
);