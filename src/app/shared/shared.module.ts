import { TweempusTwimpListComponent } from './twimp/tweempus-twimp-list/tweempus-twimp-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwimpCardComponent, TweempusTwimpListComponent],
  exports: [TwimpCardComponent, TweempusTwimpListComponent]
})
export class SharedModule { }
