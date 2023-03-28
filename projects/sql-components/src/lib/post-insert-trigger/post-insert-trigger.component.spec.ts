import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInsertTriggerComponent } from './post-insert-trigger.component';

describe('PostInsertTriggerComponent', () => {
  let component: PostInsertTriggerComponent;
  let fixture: ComponentFixture<PostInsertTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostInsertTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInsertTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
