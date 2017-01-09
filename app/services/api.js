class Http {
  getUrl() {
    return 'http://myrealtime.com.au:8080';
  }

  async login(username, password) {
    console.log(username, password)
    try {
      let response = await fetch(`${this.getUrl()}/authenticate/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, password
        })
      })

      if (response.headers.map['x-auth-token'])
        return {
          token: response.headers.map['x-auth-token']
        };

      return {
        error: true
      }
    } catch(error) {
      // alert(error)
      return {error};
    }
  }
}

export default new Http();
