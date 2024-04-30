<template>
  <div class="pdf-app">
    <v-app>
      <v-container>
        <v-btn @click="previousPage">Previous</v-btn>
        <v-btn @click="nextPage">Next</v-btn>
        <canvas ref="pdfCanvas"></canvas>
      </v-container>
    </v-app>
  </div>
</template>

<script>
//import { getDocument } from 'pdfjs-dist/legacy/build/pdf';


// Import Vuetify components


// --- import { loadPdfJs } from '@/plugins/pdfUtils.js';

import * as pdfjs from 'pdfjs-dist'

export default {
  data() {
    return {
      pdf: null,
      pageNum: 1,
      pageRendering: false,
      pageCount: 0,
    };
  },
  methods: {
    loadDocument() {
      const loadingTask = pdfjs.getDocument('/aws.pdf');
      console.log(loadingTask);
      loadingTask.promise.then(pdf => {
    // Handle the loaded PDF document
    console.log('PDF loaded successfully:', pdf);
        this.pdf = pdf;
        this.pageCount = pdf.numPages;
        this.renderPage(this.pageNum);
      }).catch(error => {
    // Handle errors if the PDF loading fails
    console.error('Error loading PDF:', error);
      });
    },
    renderPage(num) {
      this.pageRendering = true;
      this.pdf.getPage(num).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        const canvas = this.$refs.pdfCanvas;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          this.pageRendering = false;
        });
      });
    },
    previousPage() {
      if (this.pageNum <= 1) {
        return;
      }
      this.pageNum--;
      this.renderPage(this.pageNum);
    },
    nextPage() {
      if (this.pageNum >= this.pageCount) {
        return;
      }
      this.pageNum++;
      this.renderPage(this.pageNum);
    }
  },
  mounted() {
    this.loadDocument();
  }
};
</script>

<style scoped>
  canvas {
    width: 100%;
    border: 1px solid black;
  }
</style>

