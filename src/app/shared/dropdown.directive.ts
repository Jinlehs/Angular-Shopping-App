import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    //allows for other files to acces this directive 
    selector:'[appDropdown]'
})

export class DropdownDirective { 
    @HostBinding('class.open') isOpen=false;

    @HostListener('click') toggleOpen() { 
        this.isOpen=!this.isOpen;
    }
}