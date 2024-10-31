import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective implements OnInit {
  @Input() borderColor: any = '';
  @Input() borderColorHover: any = '';
  @Input() borderHeight: any;

  constructor(private el: ElementRef) {
  }


  @HostListener('mouseenter') onmouseenter() {
    this.setBorder(this.borderColorHover || this.borderColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setBorder(this.borderColor);
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number | undefined) {
    if (height !== undefined) {
      this.el.nativeElement.style.height = height + 'px';
    }
  }

  ngOnInit(): void {
    this.setBorder(this.borderColor);
    if (this.borderHeight) {
      this.setHeight(+this.borderHeight);
    }
  }
}
