if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://Sumesh:Sumesh1*@ds135107.mlab.com:35107/gudlu-vidjot-prod'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
