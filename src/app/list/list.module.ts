import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { CommunitiesListComponent } from './components/communities-list/communities-list.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { CalcMembersPipe } from './pipes/calc-members.pipe';
import { CommunitiesListVscrollComponent } from './communities/communities-list-vscroll/communities-list-vscroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ListComponent,
    CommunitiesListComponent,
    DateFormatPipe,
    CalcMembersPipe,
    CommunitiesListVscrollComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ]
})
export class ListModule { }
