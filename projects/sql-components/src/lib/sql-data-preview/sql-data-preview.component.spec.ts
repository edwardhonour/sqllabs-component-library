import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataPreviewComponent } from './sql-data-preview.component';

describe('SqlDataPreviewComponent', () => {
  let component: SqlDataPreviewComponent;
  let fixture: ComponentFixture<SqlDataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDataPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
