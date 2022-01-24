import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/global.scss'
import TheHeader from './components/component/TheHeader.vue'
import AppButton from './components/component/AppButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import vIntersect from "vue-intersect"
library.add(faTwitter)
library.add(faLinkedinIn)
library.add(faEnvelope)
library.add(faExternalLinkAlt)

library.add(faGithub)


dom.watch()


const app = createApp(App)
app.use(store)
app.use(router)
app.use(vIntersect)
app.component('app-button', AppButton)
app.component('the-header', TheHeader)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
