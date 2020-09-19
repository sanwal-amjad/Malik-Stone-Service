import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AromatherapyComponent } from './aromatherapy.component';

describe('AromatherapyComponent', () => {
  let component: AromatherapyComponent;
  let fixture: ComponentFixture<AromatherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AromatherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AromatherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
