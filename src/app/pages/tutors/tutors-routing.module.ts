import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TutorsComponent } from './tutors.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';

const routes: Routes = [
  {
    path: '',
    component: TutorsComponent,
    children: [{ path: 'register', component: TutorRegisterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorsRoutingModule {}
