import { Injectable } from '@angular/core';


@Injectable()
export class LogService{
    log(msg:any):void{
        console.log(msg);
    }

    error(msg:any):void{
        console.error(msg);
    }
    
    warn(msg:any):void{
        console.warn(msg);
    }
}