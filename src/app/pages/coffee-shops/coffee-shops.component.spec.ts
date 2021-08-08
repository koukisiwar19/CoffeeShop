import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopsComponent } from './coffee-shops.component';

describe('CoffeeShopsComponent', () => {
  let component: CoffeeShopsComponent;
  let fixture: ComponentFixture<CoffeeShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
