import { TestBed } from '@angular/core/testing';

import { CoffeeshopService } from './coffeeshop.service';

describe('CoffeeshopService', () => {
  let service: CoffeeshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
