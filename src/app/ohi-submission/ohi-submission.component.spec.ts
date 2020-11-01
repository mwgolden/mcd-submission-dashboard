import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhiSubmissionComponent } from './ohi-submission.component';

describe('OhiSubmissionComponent', () => {
  let component: OhiSubmissionComponent;
  let fixture: ComponentFixture<OhiSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhiSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhiSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
