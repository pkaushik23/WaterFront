import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummsLibComponent } from './dumms-lib.component';

describe('DummsLibComponent', () => {
  let component: DummsLibComponent;
  let fixture: ComponentFixture<DummsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
