import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective  {
  @Input() color!: string;

  @HostListener('mouseenter') onMouseOver(){
    this.highlightElement(this.color)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlightElement('')
  }

  constructor(private el: ElementRef) {}


  highlightElement(color: string){
    this.el.nativeElement.style.background = color;
  }

}
