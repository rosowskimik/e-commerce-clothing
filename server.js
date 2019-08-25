const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

app.use('/payment', require('./routes/payment'));

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'service-worker.js'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
