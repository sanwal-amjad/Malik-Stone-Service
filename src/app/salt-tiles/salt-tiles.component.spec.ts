import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltTilesComponent } from './salt-tiles.component';

describe('SaltTilesComponent', () => {
  let component: SaltTilesComponent;
  let fixture: ComponentFixture<SaltTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
