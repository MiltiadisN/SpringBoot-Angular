import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from "@angular/router";
import { EmployeeComponent } from './components/employee/employee.component';
import { TaskComponent } from './components/task/task.component';
import { DialogEmployeeComponent } from './components/employee/dialog-employee/dialog-employee.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {DialogTaskComponent } from './components/task/dialog-task/dialog-task.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from '@angular/material/card';
import {DialogAddTaskToEmployeeComponent } from './components/employee/dialog-add-task-to-employee/dialog-add-task-to-employee.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {DialogShowTasksFromEmployeeComponent } from './components/employee/dialog-show-tasks-from-employee/dialog-show-tasks-from-employee.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


const routes: Routes=[

  {path:'employee/:employeeId/tasks', component: TaskComponent},
  {path:'task/:taskId', component: TaskComponent },
  {path:'employees', component:EmployeeComponent},
  {path:'tasks', component:TaskComponent},
  {path:'', component:EmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TaskComponent,
    DialogEmployeeComponent,
    DialogTaskComponent,
    DialogAddTaskToEmployeeComponent,
    DialogShowTasksFromEmployeeComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
