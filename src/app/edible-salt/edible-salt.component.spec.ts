import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdibleSaltComponent } from './edible-salt.component';

describe('EdibleSaltComponent', () => {
  let component: EdibleSaltComponent;
  let fixture: ComponentFixture<EdibleSaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdibleSaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdibleSaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
