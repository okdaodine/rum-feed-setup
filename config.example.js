module.exports = {

  title: '',

  logo: '',

  version: '1.0.0',

  database: {
    host: "postgres",
    port: '5432',
    database: "feed",
    user: "postgres",
    password: "e8b50fddddf04ee439f12851f5275222",
    dialect: "postgres"
  },

  polling: {
    limit: 120,
    maxIndexingUnloadedGroup: 3,
  },

  userRelation: {
    visible: false,
    seed: 'rum://seed?v=1&e=0&n=0&b=VgnuIxm5Qh-95XXaiJzHoQ&c=VNS6zB2q8nY7I0VACFjQBMt_39CbfNDPVsa9wcV2TXQ&g=Xgy7rXzvSkqiLPrdNMywMA&k=AzM8baghisDsIfLUSN4byI6cSBDIDLwjNN0QAWf6Tf5a&s=duPtge7HRkpZPHcItb920yxGaXbRENbY9veLwLOSGKMUJMistbqVM-qypl005SnnZFYyQYc3JZtdEHWhZSf_DAA&t=FxxSbaHgnrw&a=%E7%A7%8D%E5%AD%90%E7%BD%91%E7%BB%9C%E5%85%B3%E7%B3%BB&y=group_relations&u=http://82.157.68.39:62663?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIzMzI0NDczLCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.0rbZgXhuyZ0aUWX7Uv98tfODNcqlgNh1z3Jqh2zYi3Y|http://42.192.22.186:62663?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIzMzI0NjY4LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.2h_O9k7tNt1orhu4lVhd6Naq-aGbAddTOy0DlG14wvQ|http://82.157.65.147:62663?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIzMzI0Mzg5LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.br0Hw46t5LOspDhshxQ5eLdcvpdt5hTYdAjVIjILExI|http://82.157.64.201:62663?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIzMzExNzU3LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.lVLWW0cC5uqlZ90tCXm1X1wDAB0fsu3gd1-QIorCfMM|http://101.42.141.118:62663?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIzMzI0MjQ0LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.PyU04SYmBo6PcSSr0YEq3iEmh8LzSEKpNIacA_fFQ6o|http://45.120.216.187:9004?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIyOTc2NTk0LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.guyNlo8eicMM4llN4QCgwjnnuZ3iil_ciwTyomkOi8w'
  },

  // defaultGroupId: '',

  // admin: [ '0xaC25c838Ee0dcbd2593d934d016af4949A6aF5bB' ]

}
