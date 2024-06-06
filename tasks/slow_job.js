const sleep = ms => new Promise((resolve) => {
    setTimeout(resolve, ms);
});

const slowJob = async (payload, helpers) => {
    helpers.logger.info('Starting job');

    await sleep(2000);
    helpers.logger.info('Done');
}

export default slowJob;