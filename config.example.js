module.exports = {
  database: {
    host: "postgres",
    port: '5432',
    database: "feed",
    user: "postgres",
    password: "e8b50fddddf04ee439f12851f5275222",
    dialect: "postgres"
  },

  siteName: '',

  logo: '',

  polling: {
    duration: 1000,
    limit: 120,
    maxIndexingUnloadedGroup: 3,
  },

}
