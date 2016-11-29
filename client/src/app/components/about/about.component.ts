import { Component } from '@angular/core';
import {GMapModule} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})
export class AboutComponent { 
    options: any;
    overlays: any[];
    
    ngOnInit() {
        this.options = {
            center: {lat: 49.8321448, lng: 23.9987968},
            zoom: 16
        };

        this.overlays = [
            new google.maps.Marker({position: {lat: 49.8321448, lng: 23.9987968}, title:"SoftServe"})
        ];
    }


}
