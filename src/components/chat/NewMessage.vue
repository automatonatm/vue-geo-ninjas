<template>
    <div class="new-message">
      <form @submit.prevent="addMessage">
        <input class="text" placeholder="enter to send message" v-model="message">

      </form>

    </div>
</template>

<script>

  import * as  firebase from 'firebase'
    export default {
        name: "NewMessage",
      props: ['name'],
      data() {
          return {
            message: null
          }
      },
     methods: {
       addMessage() {
         if(!this.message) {
           return
         }
         firebase.firestore().collection('messages')
           .add({content: this.message, name: this.name, timestamp: Date.now()})
           .then(() => {
              this.message = ''
           })
           .catch((error) => {
            console.log(error)
           })
       }
     }

    }
</script>

<style scoped>

</style>
