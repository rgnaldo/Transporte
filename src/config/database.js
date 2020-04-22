module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'transporte',
  define: {
    timestamps:true,
    underscored:true,
    underscoredAll:true
  },
};
