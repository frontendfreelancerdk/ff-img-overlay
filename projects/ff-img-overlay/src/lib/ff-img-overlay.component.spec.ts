import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFImgOverlayComponent } from './ff-img-overlay.component';

describe('FfImgOverlayComponent', () => {
  let component: FFImgOverlayComponent;
  let fixture: ComponentFixture<FFImgOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFImgOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFImgOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
