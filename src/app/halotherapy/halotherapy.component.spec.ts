import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalotherapyComponent } from './halotherapy.component';

describe('HalotherapyComponent', () => {
  let component: HalotherapyComponent;
  let fixture: ComponentFixture<HalotherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalotherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
