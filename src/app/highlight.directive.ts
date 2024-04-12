import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit  {
  @Input() color!: string;

  @HostListener('mouseenter') onMouseOver(){
    this.highlightElement(this.color)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlightElement('')
  }

  constructor(private el: ElementRef) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  highlightElement(color: string){
    this.el.nativeElement.style.background = color;
  }

}
