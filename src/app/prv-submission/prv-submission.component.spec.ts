import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvSubmissionComponent } from './prv-submission.component';

describe('PrvSubmissionComponent', () => {
  let component: PrvSubmissionComponent;
  let fixture: ComponentFixture<PrvSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
