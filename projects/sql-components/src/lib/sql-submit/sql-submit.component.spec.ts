import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSubmitComponent } from './sql-submit.component';

describe('SqlSubmitComponent', () => {
  let component: SqlSubmitComponent;
  let fixture: ComponentFixture<SqlSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
