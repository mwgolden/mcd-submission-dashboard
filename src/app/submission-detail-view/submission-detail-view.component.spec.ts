import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDetailViewComponent } from './submission-detail-view.component';

describe('SubmissionDetailViewComponent', () => {
  let component: SubmissionDetailViewComponent;
  let fixture: ComponentFixture<SubmissionDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
