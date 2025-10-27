import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragScroll]'
})
export class DragScrollDirective {
  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.el.nativeElement.classList.add('active');
    this.startX = event.pageX - this.el.nativeElement.offsetLeft;
    this.scrollLeft = this.el.nativeElement.scrollLeft;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isDown = false;
    this.el.nativeElement.classList.remove('active');
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDown = false;
    this.el.nativeElement.classList.remove('active');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.el.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // scroll-fast
    this.el.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
