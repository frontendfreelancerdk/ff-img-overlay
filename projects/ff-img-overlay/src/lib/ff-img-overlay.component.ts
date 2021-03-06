import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector   : 'ff-img-overlay',
  templateUrl: 'ff-img-overlay.component.html',
  styleUrls  : ['ff-img-overlay.component.scss']
})
export class FFImgOverlayComponent implements OnInit {
  @Input() mainTmp : TemplateRef<any>;
  @Input() overlayTmp : TemplateRef<any>;
  @Input() imgUrl : string;
  @Input() text : string;
  @Input() scale : boolean;

  @Input() cssClassEnter = 'ff-enter';
  @Input() cssClassLeave = 'ff-leave';
  @Input() cssClassAnimated = 'ff-animated';


  @Output() mouseEnter = new EventEmitter();
  @Output() mouseLeave = new EventEmitter();

  @ViewChild('overlay') overlay : ElementRef;
  @ViewChild('image') image : ElementRef;

  private _firstRun = true;

  constructor(private renderer : Renderer2) {
  }

  ngOnInit() {
    this.renderer.addClass(this.overlay.nativeElement, this.cssClassLeave);
  }

  onMouseleave(event) {
    this.renderer.removeClass(this.overlay.nativeElement, this.cssClassEnter);
    this.renderer.addClass(this.overlay.nativeElement, this.cssClassLeave);
    this.mouseLeave.emit(event);
  }

  onMouseenter(event) {
    this.renderer.removeClass(this.overlay.nativeElement, this.cssClassLeave);
    if (this._firstRun) {
      this.renderer.removeClass(this.overlay.nativeElement, 'init');
      this.renderer.addClass(this.overlay.nativeElement, this.cssClassAnimated);
      this._firstRun = !!0;
    }
    this.renderer.addClass(this.overlay.nativeElement, this.cssClassEnter);
    this.mouseEnter.emit(event);
  }

}
