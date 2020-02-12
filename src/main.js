
import Vue from 'vue'
import App from './App'
import router from './router'
import  {store} from "./store";

Vue.config.productionTip = false

import * as  firebase from 'firebase'

import  vueChatScroll from 'vue-chat-scroll'

Vue.use(vueChatScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBH8VQcfYmoLzd2obcEJCQqW9H75viGq5c",
      authDomain: "vue-ninja-geo-8e17d.firebaseapp.com",
      databaseURL: "https://vue-ninja-geo-8e17d.firebaseio.com",
      projectId: "vue-ninja-geo-8e17d",
      storageBucket: "vue-ninja-geo-8e17d.appspot.com",
      messagingSenderId: "29960286787",
      appId: "1:29960286787:web:d5ce3abf0ab8befe5adaf6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
})
