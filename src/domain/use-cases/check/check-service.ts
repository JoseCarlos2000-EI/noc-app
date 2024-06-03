interface checkInterface {
    execute : ( url : string) => Promise<boolean>;
}



export class checkService implements checkInterface {
    public async execute(url : string) : Promise<boolean>{
        try{
            const req = await fetch(url);
            if( !req.ok) throw new Error("Error in invoke api");
            console.log(`Service ${url} is up!!`);
            return true;
        }catch(e){
            console.log(e);
            return false;
            
        }

    }
}