import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Timer} from "../model/timer";

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    private readonly GET_URL = 'api/get/';
    private readonly CREATE_URL = 'api/create';

    constructor(private httpClient: HttpClient) {
    }

    public get(id: number): Observable<Timer> {
        let url = this.GET_URL + id;
        return this.httpClient.get<Timer>(url);
    }

    public create(timer: Timer): Observable<any> {
        return this.httpClient.post(this.CREATE_URL, timer);
    }
}