// Inside pdfUtils.js

import * as pdfjs from 'pdfjs-dist'

async function loadPdfJs(filename) {
	console.log(filename);
  return  await pdfjs.getDocument(filename);
}

// Export the function
export { loadPdfJs };

