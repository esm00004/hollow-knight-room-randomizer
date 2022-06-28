import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MapNameItemModel } from "./mapName-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class MapNamesService {
    private baseUrl:string = "https://hkmr-f9a33-default-rtdb.firebaseio.com/";
    private mapNamesEndPoint:string = "mapNames.json";

    constructor(private http:HttpClient) {

    }

    getMapNames() {
        return this.http.get<MapNameItemModel []>(this.baseUrl + this.mapNamesEndPoint);
    }

    getMapName(index:number) {
        return this.http.get<MapNameItemModel>(this.baseUrl + this.mapNamesEndPoint + '/' + index + '.json');
    }
}