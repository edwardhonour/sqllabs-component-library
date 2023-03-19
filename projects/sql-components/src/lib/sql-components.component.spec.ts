import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlComponentsComponent } from './sql-components.component';

describe('SqlComponentsComponent', () => {
  let component: SqlComponentsComponent;
  let fixture: ComponentFixture<SqlComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
