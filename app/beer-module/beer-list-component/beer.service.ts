import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // Para decir que esto se injecta en el DI
export class BeerService {

    constructor(private http: Http) { }

    getBeers() {
        let username: string = 'e877a34ef0104355bced28e09b664170';
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(`${username}:`));
        return this.http.get('https://punkapi.com/api/v1/beers', { headers: headers })
            .map(res => {
                return res.json()
            });
    }
}