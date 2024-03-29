
const polycalculator = require('polycalculator');
const imagemanipulatorly = require('imagemanipulatorly');
const formValidJs = require('form-valid-js');
const dataVisualizerCsv = require('data-visualizer-csv');

// const prettier = require('prettier'); // Code formatting library

function formatCode(code, language = 'javascript', options = {}) {
  const { indentWidth = 2 } = options; // Default indentation of 2 spaces

  let formattedCode;
  try {
    formattedCode = prettier.format(code, {
      parser: language,
      printWidth: 80, // Adjust print width if desired
      tabWidth: indentWidth,
      singleQuote: true, // Use single quotes consistently (optional)
      trailingComma: 'es5', // Adjust trailing comma behavior if needed (optional)
    });
  } catch (error) {
    throw new Error(`Error formatting code: ${error.message}`);
  }

  return formattedCode;
}

function formatFromFile(filePath) {
  const fs = require('fs');
  const code = fs.readFileSync(filePath, 'utf8');
  return formatCode(code);
}

module.exports = {
  formatCode,
  formatFromFile,
};
