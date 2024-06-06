
const connectionString =
  'postgres://postgres:postgrespassword@localhost:5432/graphile-test';

const preset = {
  worker: {
    connectionString,
    concurrentJobs: 10,
    maxPoolSize: 10,
  },
};

export default preset;


