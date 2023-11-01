const ENV = process.env

const config = {
  api: {
    baseURL: ENV.REACT_APP_BASE_URL,
    sessionKEY: ENV.REACT_APP_SESSION_KEY
  }
}

export default config
