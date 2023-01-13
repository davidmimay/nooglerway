import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { PageComponent } from './page/page.component';
import { SanitizerPipe } from './sanitizer.pipe';

@NgModule({
  declarations: [
    FeedComponent,
    PageComponent,
    SanitizerPipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
