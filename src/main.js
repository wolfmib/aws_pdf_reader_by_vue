
// src/main.js

import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
//import pdfjs from 'pdfjs-dist'; // Import PDF.js
import * as pdfjs from 'pdfjs-dist'


Vue.config.productionTip = false

// Set the workerSrc option for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; // Adjust the path as needed



new Vue({
  vuetify,
  render: h => h(App), // Render the root component (App)
}).$mount('#app')





//import Vue from 'vue'
//import App from './App.vue'

//import Vuetify from 'vuetify'; // Import Vuetify library

//import 'vuetify/dist/vuetify.min.css'; // Ensure you have imported Vuetify CSS

//Vue.use(Vuetify); // Use Vuetify as a Vue plugin


//Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')
