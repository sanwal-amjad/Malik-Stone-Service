import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltlampComponent } from './saltlamp.component';

describe('SaltlampComponent', () => {
  let component: SaltlampComponent;
  let fixture: ComponentFixture<SaltlampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltlampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltlampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
