<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-6 first">
          <b-form @reset="resetLatinContent">
            <b-form-group
              id="latinToMorseGroup"
              label="Latin To Morse"
              label-for="latinToMorse"
              description="Once you press any key(s), content will be automatically translated."
            >
              <b-form-textarea
                id="latinToMorse"
                v-model="latinContent"
                :state=true
                placeholder="Enter latin content"
                rows="8"
                v-on:keyup="sendLatin"
              ></b-form-textarea>
            </b-form-group>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <br>
          <br>
          <br>
          <b-form-textarea
            id="latinToMorse"
            v-model="morseResponse"
            :state=true
            rows="8"
            readonly
          ></b-form-textarea>
        </div>
        <div id="second" class="col-md-6">
          <b-form @reset="resetMorseContent">
            <b-form-group
              id="latinToMorseGroup"
              label="Morse To Latin"
              label-for="morseToLatin"
              description="Once you press any key(s), content will be automatically translated."
            >
              <b-form-textarea
                id="morseToLatin"
                v-model="morseContent"
                :state=true
                placeholder="Enter morse content"
                rows="8"
                v-on:keyup="sendMorse"
              ></b-form-textarea>
            </b-form-group>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <br>
          <br>
          <br>
          <b-form-textarea
            id="latinToMorse"
            v-model="latinResponse"
            :state=true
            rows="8"
            readonly
          ></b-form-textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      latinContent: '',
      morseContent: '',
      latinResponse: '',
      morseResponse: ''
    }
  },
  sockets: {
    connect: function () {
      console.info({'socket': {'is_connected': true}})
    },
    morseResponse: function (val) {
      this.morseResponse = val
    },
    latinResponse: function (val) {
      this.latinResponse = val
    }
  },
  methods: {
    sendLatin: function () {
      this.$socket.emit('onLatinContent', this.latinContent)
    },
    sendMorse: function () {
      this.$socket.emit('onMorseContent', this.morseContent)
    },
    resetLatinContent: function () {
      this.latinContent = ''
    },
    resetMorseContent: function () {
      this.morseContent = ''
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

@media only screen and (max-width: 767px) {
  #second {
    padding-top: 50px;
  }
}
</style>
