import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCrudsComponent } from './coffee-cruds.component';

describe('CoffeeCrudsComponent', () => {
  let component: CoffeeCrudsComponent;
  let fixture: ComponentFixture<CoffeeCrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeCrudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
