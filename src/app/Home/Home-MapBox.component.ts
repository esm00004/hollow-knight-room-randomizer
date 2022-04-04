import { Component, OnInit } from "@angular/core";
import { NamesItemModel } from "./names-item.model";
import { NamesService } from "./names.service";

@Component({
    selector: "hkmr-Home-MapBox",
    templateUrl: "Home-MapBox.component.html",
    styleUrls: ["Home-MapBox.component.css"]
})

export class HomeMapBoxComponent implements OnInit {
    names: NamesItemModel[] = [];

    constructor(private NamesService:NamesService) {
    }
    ngOnInit(): void {
        this.NamesService.getNames().subscribe((data: NamesItemModel []) => {
            console.log("fetching products");
            for (var name of data) {
                console.log(name);
                // dont need to keep console.log after done testing
                this.names.push(name);
            }
        });
    }
}