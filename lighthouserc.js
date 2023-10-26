module.exports = {
  ci: {
    // TODO: uncomment custom server when output: 'export'
    // is removed from next.config.js
    // collect: {
    //   url: ['http://localhost:3000/'],
    //   startServerCommand: 'npm run start',
    // },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
