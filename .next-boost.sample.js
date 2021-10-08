module.exports = {
    rules: [
      {
        regex: '^/noticias/*',
        ttl: 86400,
      },
      {
        regex: '/*',
        ttl: 900,
      },
    ],
  }