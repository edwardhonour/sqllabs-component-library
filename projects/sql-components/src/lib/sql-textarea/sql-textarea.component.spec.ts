import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTextareaComponent } from './sql-textarea.component';

describe('SqlTextareaComponent', () => {
  let component: SqlTextareaComponent;
  let fixture: ComponentFixture<SqlTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
