import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlCalendarComponent } from './sql-calendar.component';

describe('SqlCalendarComponent', () => {
  let component: SqlCalendarComponent;
  let fixture: ComponentFixture<SqlCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
