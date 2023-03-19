import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlUploadFormComponent } from './sql-upload-form.component';

describe('SqlUploadFormComponent', () => {
  let component: SqlUploadFormComponent;
  let fixture: ComponentFixture<SqlUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
