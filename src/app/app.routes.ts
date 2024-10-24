import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
// import { SignupComponent } from './features/auth/signup/signup.component';
// import { ExpensesComponent } from './features/expenses/expenses.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'expenses', component: ExpensesComponent },
];
