import { checkService } from "../domain/use-cases/check/check-service";
import { job } from "./cron/cron-service";

export class Server {
    public static start(){
        console.log("Server started...");
        job.create('*/3 * * * * *', 
        () =>{ new checkService().execute("http://localhost:3000/posts") }
        )
    }
}