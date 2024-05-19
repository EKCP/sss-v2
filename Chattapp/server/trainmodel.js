const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

// Define and train the model
async function trainModel() {
  const model = tf.sequential();

  // Embedding layer
  model.add(tf.layers.embedding({
    inputDim: 10000,  // Vocabulary size
    outputDim: 16,     // Embedding dimension
    inputLength: 10    // Max sequence length
  }));

  // Flatten layer
  model.add(tf.layers.flatten());

  // Dense layer
  model.add(tf.layers.dense({
    units: 10,
    activation: 'relu'
  }));

  // Output layer
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  }));

  // Compile the model
  model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  // Example training data
  const messages = [
    "Win money now!",
    "Hello, how are you?",
    "Claim your free prize",
    "Are we still meeting later?",
    "Free vacation offer",
    "See you tomorrow!"
  ];
  const labels = [1, 0, 1, 0, 1, 0];

  // Tokenize the texts
  const tokenizer = tf.tokenizer();
  tokenizer.fitOnTexts(messages);
  const sequences = tokenizer.textsToSequences(messages);
  const paddedSequences = tf.keras.preprocessing.sequence.padSequences(sequences, { maxlen: 10, padding: 'post' });

  // Convert labels to tensor
  const labelsTensor = tf.tensor2d(labels, [labels.length, 1]);

  // Train the model
  await model.fit(paddedSequences, labelsTensor, { epochs: 10 });

  // Save the model
  await model.save('file://./model');
  
  // Save the tokenizer
  await fs.writeFile('tokenizer.json', JSON.stringify(tokenizer));
  
  console.log('Model training completed.');
}

trainModel().catch(console.error);

