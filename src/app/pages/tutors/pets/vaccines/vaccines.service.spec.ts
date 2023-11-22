/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VaccinesService } from './vaccines.service';

describe('Service: Vaccines', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaccinesService]
    });
  });

  it('should ...', inject([VaccinesService], (service: VaccinesService) => {
    expect(service).toBeTruthy();
  }));
});
