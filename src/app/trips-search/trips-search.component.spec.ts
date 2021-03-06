import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSearchComponent } from './trips-search.component';

describe('TripsSearchComponent', () => {
  let component: TripsSearchComponent;
  let fixture: ComponentFixture<TripsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
