const CronJob = require('cron').CronJob
const main = require('./index')

const job = new CronJob(
  '00 */15 * * * *',
  main,
  null,
  true,
  'America/Los_Angeles'
)
  
job.start()
