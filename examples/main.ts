import {createApp} from 'vue'
import App from './app.vue'
import { Button } from "gcvin-ui/index"

const app = createApp(App)
app.use(Button)

app.mount('#app')