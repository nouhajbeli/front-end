import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import { AllschedulesComponent } from './components/allschedules/allschedules.component';
import { LoginComponent } from './login/login.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';

import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
const Routes = [
  { path: 'schedule/:query', component: ScheduleComponent1 },
  { path: 'allschedules', component: AllschedulesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar-admin', component: NavbarAdminComponent },
  { path: 'navbar-student', component: NavbarStudentComponent },
  { path: 'navbar-teacher', component: NavbarTeacherComponent },
  { path: '', component: LoginComponent },

  {
    path: 'admin',
    component: NavbarAdminComponent,
  },
  {
    path: 'admin/listgrades',
    component: ListOfStudentComponent,
  },
  {
    path: 'student',
    component: NavbarStudentComponent,
  },
  {
    path: 'student/listgrades',
    component: ListOfStudentComponent,
  },
  {
    path: 'teacher',
    component: NavbarTeacherComponent,
  },
  {
    path: 'teacher/listgrades',
    component: ListOfStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
