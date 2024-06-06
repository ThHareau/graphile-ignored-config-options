
const connectionString =
  'postgres://postgres:postgrespassword@localhost:5432/concurrent-jobs-options';

const preset = {
  worker: {
    connectionString,
    concurrentJobs: 10,
    maxPoolSize: 10,
  },
};

export default preset;


