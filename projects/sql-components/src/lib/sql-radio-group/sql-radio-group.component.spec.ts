import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlRadioGroupComponent } from './sql-radio-group.component';

describe('SqlRadioGroupComponent', () => {
  let component: SqlRadioGroupComponent;
  let fixture: ComponentFixture<SqlRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlRadioGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
