<template>
    <div class="container chat">
      <h2 class="center-align teal-text">Chat Room</h2>

      <div class="card">
        <div class="card-content ">
          <ul class="messages collection" v-chat-scroll>
            <li v-for="message in messages" :key="message.id" class="collection-item  msg ">
              <span class="teal-text left">{{message.name}}</span>
              <span class="grey-text text-darken-3 ">
                {{message.content}}
              </span>
              <span class="grey-text time breadcrumb right">
                {{message.timestamp}}
              </span>
            </li>

          </ul>
          <div class="card-action">
            <new-message :name="name"></new-message>
          </div>
        </div>

      </div>



    </div>
</template>

<script>
  import * as  firebase from 'firebase'
  import NewMessage from  './NewMessage'
  import  moment from 'moment'

    export default {
        name: "Chat",
      props: ['name'],
      components: {
          NewMessage
      },


      data() {
          return {
                messages: []
          }
      },

      created() {
        let ref = firebase.firestore().collection('messages').orderBy('timestamp')
          ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach((change) => {
              if(change.type === 'added') {
                let doc = change.doc
                this.messages = [
                  ...this.messages,
                  {
                    id: doc.id,
                    name: doc.data().name,
                    content: doc.data().content,
                    timestamp: moment(doc.data().timestamp).format('lll')
                  }
                ]
              }
            })
          })
      }
    }
</script>

<style scoped>

  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .chat span {
    font-size: 1.4em;
  }
  .chat .time {
    display: block;
    font-size: 1.2em;
  }
  .msg {
    margin-left: 0;
  }

  .messages {
    max-height: 300px;
    overflow: auto;
  }

  .messages::-webkit-scrollbar {
    width: 3px;
  }

  .messages::-webkit-scrollbar-track {
    background-color: #bbb;
  }


  .messages::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }
</style>
