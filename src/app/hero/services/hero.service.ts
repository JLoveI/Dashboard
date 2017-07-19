import { Injectable } from "@angular/core";
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Hero } from '../models/hero';
import { LogService } from '../../core/log.service';

@Injectable()
export class HeroService{
    private headers : Headers = new Headers({"Content-Type": "application/json"});
    private url: string = `api/heroes`;
    constructor(private http: Http, private logService: LogService){
    }

    getHeroes():Promise<Hero[]>{
      return this.http.get(this.url)
                      .toPromise()
                      .then(response=>response.json().data as Hero[])
                      .catch(this.handleError.bind(this));
    }

    get(id:number):Promise<Hero>{
        const getUrl = `${this.url}/${id}`;
        return this.http.get(getUrl)
                        .toPromise()
                        .then(response=>response.json().data as Hero)
                        .catch(this.handleError.bind(this));
    }

    create(hero:Hero) : Promise<Hero>{
        return this.http.post(this.url,JSON.stringify(Hero),{headers:this.headers})
                        .toPromise()
                        .then(()=>hero)
                        .catch(this.handleError);
    }

    update(hero:Hero):Promise<Hero>{
        const updateUrl = `${this.url}/${hero.id}`;
        return this.http.put(updateUrl,JSON.stringify(hero),{headers: this.headers})
                        .toPromise()
                        .then(()=>hero)
                        .catch(this.handleError.bind(this));
                        
    }

    delete(id:number):Promise<void>{
        const deleteUrl = `${this.url}/${id}`;
       return this.http.delete(deleteUrl, {headers:this.headers})
                 .toPromise()
                 .then(()=>null)
                 .catch(this.handleError.bind(this));

    }

    search(val:string):Observable<Hero[]>{
        var searchUrl = `${this.url}/?name=${val}`;
        return this.http.get(searchUrl)
                        .map(response=>response.json().data as Hero[]);

    }

    private handleError(error:any): Promise<any>{
        this.logService.error(error);
        return Promise.reject(error.message||error);
    }
}