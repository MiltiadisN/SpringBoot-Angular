import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowTasksFromEmployeeComponent } from './dialog-show-tasks-from-employee.component';

describe('ShowTasksFromEmployeeComponent', () => {
  let component: DialogShowTasksFromEmployeeComponent;
  let fixture: ComponentFixture<DialogShowTasksFromEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShowTasksFromEmployeeComponent]
    });
    fixture = TestBed.createComponent(DialogShowTasksFromEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
