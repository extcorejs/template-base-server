export default {
  openapi: '3.0.0',
  info: {
    title: 'API Server',
    description: 'API documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },
  paths: {},
};
