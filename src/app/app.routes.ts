import { Routes } from '@angular/router';
import { ExamComponent } from './pages/exam/exam.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'exam', component: ExamComponent },
  { path: '', component: HomeComponent },
];
