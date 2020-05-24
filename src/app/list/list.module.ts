import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { CommunitiesListComponent } from './components/communities-list/communities-list.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { CalcMembersPipe } from './pipes/calc-members.pipe';


@NgModule({
  declarations: [
    ListComponent,
    CommunitiesListComponent,
    DateFormatPipe,
    CalcMembersPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ListModule { }
