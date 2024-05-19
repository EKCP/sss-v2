const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

// Function to load model and tokenizer
async function loadModelAndTokenizer() {
  const model = await tf.loadLayersModel('file://./model/model.json');
  const data = await fs.readFile('tokenizer.json', 'utf-8');
  const tokenizer = JSON.parse(data);
  return { model, tokenizer };
}

// Function to preprocess input text
function preprocessInput(text, tokenizer) {
  const sequences = tokenizer.textsToSequences([text]);
  const paddedSequences = tf.keras.preprocessing.sequence.padSequences(sequences, { maxlen: 10, padding: 'post' });
  return paddedSequences;
}

module.exports = { loadModelAndTokenizer, preprocessInput };
