import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueCustomersComponent } from './overdue-customers.component';

describe('OverdueCustomersComponent', () => {
  let component: OverdueCustomersComponent;
  let fixture: ComponentFixture<OverdueCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdueCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
