import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTaskToEmployeeComponent } from './dialog-add-task-to-employee.component';

describe('DialogAddTaskToEmployeeComponent', () => {
  let component: DialogAddTaskToEmployeeComponent;
  let fixture: ComponentFixture<DialogAddTaskToEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddTaskToEmployeeComponent]
    });
    fixture = TestBed.createComponent(DialogAddTaskToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
