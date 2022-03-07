module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12743485e6ae9b07a1d3d0866457fdb2'),
  },
});
