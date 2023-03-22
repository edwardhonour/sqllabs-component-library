import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlRouterMenuComponent } from './sql-router-menu.component';

describe('SqlRouterMenuComponent', () => {
  let component: SqlRouterMenuComponent;
  let fixture: ComponentFixture<SqlRouterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlRouterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlRouterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
