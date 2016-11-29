import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CalculatorService {

    private urlForGet = 'http://localhost:3000/api/histories';
    private urlForPost = 'http://localhost:3000/api/history'
    constructor(private http: Http) {
        console.log('History service initialized...')
     }
     
     getHistories(){
        return this.http.get(this.urlForGet)
            .map(res => res.json());
    }

    addHistory(newHistory){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlForPost, JSON.stringify(newHistory), {headers: headers})
            .map(res => res.json());
    }
}