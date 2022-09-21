import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent { 
    collapsed = true; 
    
    // // We are allowing this feaure to be emitted from child comp to parent comp --> data passed to app component 
    // @Output() featureSelected = new EventEmitter<string>(); 
    
}