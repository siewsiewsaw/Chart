import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopProfitByModelMonthComponent } from './laptop-profit-by-model-month.component';

describe('LaptopProfitByModelMonthComponent', () => {
  let component: LaptopProfitByModelMonthComponent;
  let fixture: ComponentFixture<LaptopProfitByModelMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopProfitByModelMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopProfitByModelMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
