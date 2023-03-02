const axios = require('axios')

const Chat = class Chat {
  constructor (sessionToken = null, accessToken = null) {
    this.sessionToken = sessionToken
    this.accessToken = accessToken
    this.csrfToken = null
    this.login()
  }

  login () {
    if (!this.sessionToken) {
      console.error('No session token provided')
      return
    }
    if (!this.accessToken) {
      axios({
        method: 'get',
        url: 'https://explorer.api.openai.com/api/auth/csrf'
      })
        .then(res => {
          this.csrfToken = res.data.csrfToken
          console.log(this.csrfToken)
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      console.log('Using access token provided')
    }
  }
}

module.exports = Chat