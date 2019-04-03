<template>
  <div class="hello">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ content }}</p>
    <br>

    <form id="translator" @submit.prevent="sendContent">
      <textarea rows="4" cols="50" name="latinToMorse" id="latinToMorse" v-model="content" placeholder="add multiple lines"></textarea>
      <input type="submit" value="Convert" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: 'Welcome to Your Vue.js App'
    }
  },
  sockets: {
    connect: function () {
      console.log('we are in true way')
    },
    customEmit: function (val) {
      console.log(val)
    }
  },
  methods: {
    sendContent: function (val) {
      console.log(this.$socket)
      this.$socket.emit('button', this.content)
      // this.content = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  border-color: red;
}
</style>
