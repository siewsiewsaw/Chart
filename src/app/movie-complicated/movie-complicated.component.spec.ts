import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComplicatedComponent } from './movie-complicated.component';

describe('MovieComplicatedComponent', () => {
  let component: MovieComplicatedComponent;
  let fixture: ComponentFixture<MovieComplicatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComplicatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComplicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
