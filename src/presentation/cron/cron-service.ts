import { CronJob } from "cron";

type timeType = string | Date;
type command = () => void;

export class job{
    public static create(cronTime : timeType, onTick: command): CronJob {
        const job = new CronJob( cronTime,  onTick );
        job.start();
        return job;
    } 
}