import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreferComponent } from './movie-prefer.component';

describe('MoviePreferComponent', () => {
  let component: MoviePreferComponent;
  let fixture: ComponentFixture<MoviePreferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePreferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
