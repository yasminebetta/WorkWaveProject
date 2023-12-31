import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';

import { EnrollementComponent } from './enrollement/enrollement.component';

import { NgProgressModule } from 'ngx-progressbar';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayCategComponent } from './display-categ/display-categ.component';
import { AddCategComponent } from './add-categ/add-categ.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditCategComponent } from './edit-categ/edit-categ.component';
import { FicheDisplayComponent } from './fiche-display/fiche-display.component';
import { FicheAddComponent } from './fiche-add/fiche-add.component';
import { FicheEditComponent } from './fiche-edit/fiche-edit.component';



@NgModule({
  declarations: [
    DisplayCoursesComponent,

    EnrollementComponent,

    DisplayCategComponent,
    AddCategComponent,
    EditCategComponent,
    FicheDisplayComponent,
    FicheAddComponent,
    FicheEditComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgProgressModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class CoursesModule { }
