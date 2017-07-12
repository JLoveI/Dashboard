import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BackendService{
     heroApi:object;
    private headers : Headers = new Headers({'Context-Type':'application/json'});
    
    constructor(public http: Http) {
        this.heroApi = {
            getHeroes:function(){
                return http.get("/api/heroes").toPromise();
            }
        };
    }
}