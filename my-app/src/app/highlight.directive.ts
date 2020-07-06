import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;
  @Input() highlightbColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor, this.highlightbColor);
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
    
  }

  private highlight(color: string, bcolor: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = bcolor;
  
  }
}
