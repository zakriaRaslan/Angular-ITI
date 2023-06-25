import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input('LightBox')highLightColor:string="yellow";
  @Input()defaultColor:string="darkblue"

  constructor(private eleRef:ElementRef) {
    // this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
   }
  ngOnChanges(): void {
        this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }

  @HostListener("mouseover") MouseOver(){
    this.eleRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
   }
  @HostListener("mouseout") MouseOut(){
    this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
   }

}
