import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickSaltComponent } from './lick-salt.component';

describe('LickSaltComponent', () => {
  let component: LickSaltComponent;
  let fixture: ComponentFixture<LickSaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickSaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickSaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
