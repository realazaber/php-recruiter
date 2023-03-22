import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { TextAndImgComponent } from './components/text-and-img/text-and-img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    JobPostComponent,
    TextAndImgComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
