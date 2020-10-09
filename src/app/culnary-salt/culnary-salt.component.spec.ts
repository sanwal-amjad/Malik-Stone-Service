import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulnarySaltComponent } from './culnary-salt.component';

describe('CulnarySaltComponent', () => {
  let component: CulnarySaltComponent;
  let fixture: ComponentFixture<CulnarySaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulnarySaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulnarySaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
