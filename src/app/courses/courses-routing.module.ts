import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { EnrollementComponent } from './enrollement/enrollement.component';

import { DisplayCategComponent } from './display-categ/display-categ.component';
import { AddCategComponent } from './add-categ/add-categ.component';
import { EditCategComponent } from './edit-categ/edit-categ.component';
import { FicheDisplayComponent } from './fiche-display/fiche-display.component';
import { FicheAddComponent } from './fiche-add/fiche-add.component';
import { FicheEditComponent } from './fiche-edit/fiche-edit.component';


const routes: Routes = [
  { path: 'displaycourse', component: DisplayCoursesComponent },

  { path: 'displaycateg', component: DisplayCategComponent },
  { path: 'displayfiches', component: FicheDisplayComponent },
  { path: 'fichesadd', component: FicheAddComponent },
  { path: 'fichesedit', component: FicheEditComponent },
  { path: 'createcateg', component: AddCategComponent },
  { path: 'editcateg', component: EditCategComponent },

  { path: 'enrollement', component: EnrollementComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
