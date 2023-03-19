import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlCheckboxComponent } from './sql-checkbox.component';

describe('SqlCheckboxComponent', () => {
  let component: SqlCheckboxComponent;
  let fixture: ComponentFixture<SqlCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
