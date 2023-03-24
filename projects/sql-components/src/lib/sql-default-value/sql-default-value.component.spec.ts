import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDefaultValueComponent } from './sql-default-value.component';

describe('SqlDefaultValueComponent', () => {
  let component: SqlDefaultValueComponent;
  let fixture: ComponentFixture<SqlDefaultValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDefaultValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDefaultValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
