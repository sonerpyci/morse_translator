import Api from '@/services/main'

export default {
  morseToLatin (content) {
    return Api().post('morseToLatin', content)
  }
}

/* translationService.morseToLatin({
  content: '-... ..-     -... .. .-.     -.. . -. . -- . -.. .. .-.'
}) */
