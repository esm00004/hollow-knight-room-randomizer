import { Component } from "@angular/core";
import { MapNameItemModel } from "./mapName-item.model";
import { mock_mapName_list } from "./mock_mapName_list";

@Component({
    selector: "hkmr-Home-Sidebar",
    templateUrl: "Home-Sidebar.component.html",
    styleUrls: ["Home-Sidebar.component.css"]
})

export class HomeSidebarComponent {
    mapNames: MapNameItemModel[] = [];

    constructor() {
        for (var mapName of mock_mapName_list) {
            console.log(mapName);
            this.mapNames.push(mapName);
        }
    }
}