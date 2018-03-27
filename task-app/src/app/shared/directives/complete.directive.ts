import { OnInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appComplete]'
})
export class CompleteDirective implements OnInit{

  @Input('appComplete') completed;
 
  constructor(private el: ElementRef) {        
  }

  ngOnInit() {
    if(this.completed) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }    
  }

}
