import { Component, Input } from "@angular/core";

@Component({
    selector: "hkmr-Home-MapBox",
    templateUrl: "Home-MapBox.component.html",
    styleUrls: ["Home-MapBox.component.css"]
})

export class HomeMapBoxComponent {
    // this input means that it can recieve information from outside the component.
    @Input() mapNames: string;

    constructor() {
        this.mapNames = "no name";
    }
}
