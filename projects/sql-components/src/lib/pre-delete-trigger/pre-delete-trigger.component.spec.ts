import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDeleteTriggerComponent } from './pre-delete-trigger.component';

describe('PreDeleteTriggerComponent', () => {
  let component: PreDeleteTriggerComponent;
  let fixture: ComponentFixture<PreDeleteTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PreDeleteTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreDeleteTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
