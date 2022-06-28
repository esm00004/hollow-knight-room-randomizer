import { Component, OnInit } from "@angular/core";
import { MapNameItemModel } from "./mapName-item.model";
import { MapNamesService } from "./mapNames.service";

@Component({
    selector: "hkmr-Home-Sidebar",
    templateUrl: "Home-Sidebar.component.html",
    styleUrls: ["Home-Sidebar.component.css"]
})

export class HomeSidebarComponent implements OnInit{
    mapNames: MapNameItemModel[] = [];

    constructor(private MapNamesService:MapNamesService) {
    }
    ngOnInit(): void {
        this.MapNamesService.getMapNames().subscribe((data: MapNameItemModel []) => {
            console.log("fetching products");
            for (var mapName of data) {
                console.log(mapName);
                // remove console.log when this works
                this.mapNames.push(mapName);
            }
        });
    }
}