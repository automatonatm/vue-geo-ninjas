<template>
<div class="welcome container">
  <div class="card">
    <div>
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label>Enter Your name</label>
          <input type="text" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button type="submit" class="btn teal">ENTER CHAT</button>

        </form>

      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: null,
      feedback: null

    }
  },
  methods: {
    enterChat() {
      if(!this.name)  {
        this.feedback = 'You must enter a name to join'
        return
      }
      this.$router.push({name: 'Chat', params: {name: this.name}})
    }

  }
}
</script>


<style scoped>
.welcome {
  max-width: 400px;
  margin-top: 100px;

}

  .welcome h2 {
    font-size: 3em;
  }
  .welcome .btn {
    margin: 30px auto;
  }

</style>
