import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit{
    @HostBinding('class.open') isOpen: boolean;
    constructor(private elRef: ElementRef) {
        
    }
    
    ngOnInit() {
        this.isOpen = false;
    }
    
    @HostListener('document:click', ['$event']) toogleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        /*
        if(this.isOpen){
            this.isOpen = false;
        }else
            this.isOpen = true;
            */
    }
}