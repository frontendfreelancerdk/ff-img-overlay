[![Build Status](https://travis-ci.org/frontendfreelancerdk/ff-img-overlay.svg?branch=master)](https://travis-ci.org/frontendfreelancerdk/ff-img-overlay)


# ff-img-overlay

## Installing 

npm install ff-img-overlay --save

## Using

#### Simple usage

```html
<ff-img-overlay 
   [imgUrl]="'/images/iphone25.png'" 
   [text]="'IPhone 25'"
   <!-- if [scale] is true base image will have a slight scaling-->
   [scale]="true"
></ff-img-overlay>
```

#### Usage with own templates:
```html
<!-- You can create some template as base -->

<ng-template #myBase>
  <img src="/images/iphone25.png" alt="" style="width:100%;height: auto; display: block">
  ...
</ng-template>

<!-- ... and as overlay -->

<ng-template #overlay>
  <p class="myClass">IPhone 25!</p>
  ...
</ng-template>

<ff-img-overlay
<!-- You can use [mainTmp] attribute instead of [imgUrl] and put your template reference variable for base-->
  [mainTmp]="mainTmp"
  <!-- and [overlayTmp] property instead of [text] for overlay-->
  [overlayTmp]="overlay"
></ff-img-overlay>
```

#### Animations
You can set your own animations for appearance and disappearance:
```html
<ff-img-overlay
  <!--Just use [cssClassEnter] property for overlay appearance-->
  [cssClassEnter]="'zoomIn'"
  <!-- and [cssClassLeave] for overlay disappearance-->
  [cssClassLeave]="'zoomOut'"
  <!-- Also you should specify some css class for animation. 
  It means that this class must have css transition property or animation-duration-->
  [cssClassAnimated]="'animated'"
></ff-img-overlay>
```

#### Events hendle

You can handle events, component has outputs for that:

```html
<ff-img-overlay
  (mouseLeave)="leaveHandler($event)"
  (mouseEnter)="enterHandler($event)"
></ff-img-overlay>
```

### Types and default values 
```typescript
  @Input() mainTmp : TemplateRef<any>;
  @Input() overlayTmp : TemplateRef<any>;
  
  @Input() imgUrl : string;
  @Input() text : string;
  
  @Input() scale : boolean;

  @Input() cssClassEnter : string = 'ff-enter';
  @Input() cssClassLeave : string = 'ff-leave';
  @Input() cssClassAnimated : string = 'ff-animated';


  @Output() mouseEnter : EventEmitter<any>;
  @Output() mouseLeave : EventEmitter<any>;
```

## Styling 

You can change default styles. That can be used to target the override 

```css
.ff-img-overlay_wrapper{

}
.ff-img-overlay_base{

}
.ff-img-overlay_img{

}
.ff-img-overlay_overlay{

}
.ff-img-overlay_text{

}

```
