import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { TodoService } from './shared/services/todo.service';
import { AlertService } from './shared/services/alert.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './home/login-form/login-form.component';
import { TodoAppComponent } from './home/todo-app/todo-app.component';
import { TodoFormComponent } from './home/todo-app/todo-form/todo-form.component';
import { TodoListComponent } from './home/todo-app/todo-list/todo-list.component';
import { TodoListItemComponent } from './home/todo-app/todo-list/todo-list-item/todo-list-item.component';
import { AlertComponent } from './shared/alert/alert.component';
import { RegistrationFormComponent } from './home/registration-form/registration-form.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { LogoutComponent } from './home/logout/logout.component';
import { TodoDetailComponent } from './home/todo-app/todo-detail/todo-detail.component';
import { MyUppercasePipe } from './shared/pipes/my-uppercase.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { CompleteDirective } from './shared/directives/complete.directive';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'todo', component: TodoAppComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: TodoDetailComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    TodoAppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoListItemComponent,
    AlertComponent,
    RegistrationFormComponent,
    PageNotFoundComponent,
    LogoutComponent,
    TodoDetailComponent,
    MyUppercasePipe,
    SearchPipe,
    CompleteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    TodoService,
    AlertService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
