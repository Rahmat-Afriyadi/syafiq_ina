import "@fortawesome/fontawesome-svg-core/styles.css"
import '../styles/globals.css'

import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8080";
Axios.defaults.withCredentials = true;

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
