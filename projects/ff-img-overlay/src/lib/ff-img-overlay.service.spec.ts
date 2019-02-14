import { TestBed } from '@angular/core/testing';

import { FFImgOverlayService } from './ff-img-overlay.service';

describe('FFImgOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FFImgOverlayService = TestBed.get(FFImgOverlayService);
    expect(service).toBeTruthy();
  });
});
