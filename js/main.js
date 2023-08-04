// Seguendo il brief allegato, creare un mini clone di Whatsapp.

// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto.

// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione;
// ● Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde;
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina).

"use script"

// Procedimento Logico:

// - Milestone 1:
// 1) Inserisci all'interno del return della funzione data gli array di oggetti
// 2) Cancello gli elementi statici della lista contatti tranne un contatto per aggiungerli dinamicamente mediante la direttiva v-for

// - Milestone 2:
// 1) Una volta stampata la lista degli utenti, al click su un utente devo mostrare il suo avatar sulla barra in alto e i suoi messaggi sulla schermata di destra
// 2) Per fare ciò utilizzo l'oggetto dell'utente cliccato e lo salvo in una variabile (currentContact) che inserisco nel return della funzione data()
// 3) Utilizzo la proprietà (currentContact) per modificare dinamicamente il contenuto della right-top-bar in base al click sulla lista dei contatti

// - Milestone 3:
// 1) Per poter aggiungere un messaggio nella chat-down-bar e poter leggere l'input dell'utente ho bisogno della direttiva v-model
// 2) V-model a sua volta per funzionare deve essere associato ad una variabile
// 3) Questa variabile la collego tramite v-model all'input della  chat-down-bar
// 4) Per ascoltare l'evento uso @keyup.enter
// 5) Leggo il testo che l'utente ha scritto con console.log per accertarmi che tutto funzioni
// 6) Il nuovo messaggio lo pusho nell'array currentContact.messages
// 7) Resetto il messaggio scritto nella chat bar dopo aver premuto invio
// 7) Il messaggio di risposta "okay" lo pusho nell'array currentContact.messages e con setTimeOut stabilisco che il tempo di risposta deve essere pari ad un secondo

// - Milestone 4:
// 1) Imposto la direttiva v-model e aggiungo una variabile collegata nel Data()
// 2) Ho bisogno di un array con all'interno la lista degli utenti da mostrare per stampare la lista dei contatti filtrati
// 3) Creo una funzione che filtri i contatti
// 4) Aggiungo questa funzione al v-for sostituendola con la lista statica precedente (contactList) 



Vue.createApp({
    data() {
        return {
            currentContact: null,
            newMessageText: "",
            searchUser: "",
            contactsList: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '2020/01/10 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20-03-2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Vincenzo",
                    avatar: "_5",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Sara",
                    avatar: "_6",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Certo! Vedrai che ci divertiremo.",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Umberto",
                    avatar: "_7",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "_8",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ]
        }
    },
    methods: {
        onUserClick(singleContact) {
            this.currentContact = singleContact
        },

        sentMessageText() {

            // Leggo il testo che l'utente ha scritto
            console.log(this.newMessageText);

            // Rappresenta l'oggetto che identifica l'utente attivo, che si attiva al click sulla lista dei contatti 
            this.currentContact
            
            // Array dei messaggi della chat dell'utente attualmente attivo
            this.currentContact.messages
            
            // Per aggiungere il nuovo messaggio uso .push
            this.currentContact.messages.push({
                date: new Date().toLocaleDateString() + "" + new Date().toLocaleTimeString(),
                message: this.newMessageText,
                status: "sent",
            })

             // reset del campo di input dopo il push
             this.newMessageText = "";

              // do un tempo per la risposta e invoco la funzione receivedMessage
            setTimeout(this.receivedMessage, 1000);
            
            // Per accedere ad un elemento html tramite Vue posso usare this.$refs dopo aver aggiunto l'attributo ref all'elemento html. Appena Vue finisce di aggiornare l'html, eseguo subito il codice sottostante mediante questo metodo nativo di Vuejs

            this.$nextTick(() => {
                this.$refs.msgContainer.scrollTop = this.$refs.msgContainer.scrollHeight;
            });
        },

        receivedMessage() {
            this.currentContact.messages.push({
                date: new Date().toLocaleDateString() + "" + new Date().toLocaleTimeString(),
                message: "okay",
                status: "received",
            });

            this.$nextTick(() => {
                this.$refs.msgContainer.scrollTop = this.$refs.msgContainer.scrollHeight;
            });

        },

        getFilteredContacts() {
            const filteredList = [];
            return this.contactsList.filter((contact) => contact.name.toLowerCase().includes(this.searchUser.toLowerCase()));
        },
    },
    beforeMount() {
        this.currentContact = this.contactsList[0]
    }
}).mount("#app")
