import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NamesItemModel } from "./names-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class NamesService {
    private baseUrl:string = "https://hkmr-f9a33-default-rtdb.firebaseio.com/";
    private namesEndPoint:string = "mapNames.json";

    constructor(private http:HttpClient) {

    }

    getNames() {
        return this.http.get<NamesItemModel []>(this.baseUrl + this.namesEndPoint);
    }
}