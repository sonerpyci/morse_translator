// code by https://github.com/lukedmartin/morse
/* eslint-disable no-unused-vars */

class Morse {
  constructor () {
    this.latinToMorse = {
      A: '.-',
      B: '-...',
      C: '-.-.',
      D: '-..',
      E: '.',
      F: '..-.',
      G: '--.',
      H: '....',
      I: '..',
      J: '.---',
      K: '-.-',
      L: '.-..',
      M: '--',
      N: '-.',
      O: '---',
      P: '.--.',
      Q: '--.-',
      R: '.-.',
      S: '...',
      T: '-',
      U: '..-',
      V: '...-',
      W: '.--',
      X: '-..-',
      Y: '-.--',
      Z: '--..',
      ' ': '/',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      '0': '-----' }
    this.morseToLatin = this.flipObject(this.latinToMorse)
    this.morseToLatin['|'] = ' '
  }

  flipObject (obj) {
    let ret = {}
    let prop

    for (prop in obj) {
      ret[obj[prop]] = prop
    }

    return ret
  }
  encode (str) {
    let ret = ''
    let i = 0
    let len = str.length

    str = str.toUpperCase()

    for (i; i < len; i++) {
      if (this.latinToMorse[str.charAt(i)]) {
        ret += ' ' + this.latinToMorse[str.charAt(i)]
      }
    }
    return ret.slice(1)
  }

  decode (str) {
    let split = str.split(' ')
    let ret = ''
    let j = 0
    let len = split.length

    for (j; j < len; j++) {
      if (this.morseToLatin[split[j]]) {
        ret += this.morseToLatin[split[j]]
      }
    }
    return ret
  }
}
module.exports = Morse
/* eslint-enable no-unused-vars */
