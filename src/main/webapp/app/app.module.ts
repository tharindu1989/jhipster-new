import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Res360SharedModule } from 'app/shared/shared.module';
import { Res360CoreModule } from 'app/core/core.module';
import { Res360AppRoutingModule } from './app-routing.module';
import { Res360HomeModule } from './home/home.module';
import { Res360EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Res360SharedModule,
    Res360CoreModule,
    Res360HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Res360EntityModule,
    Res360AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Res360AppModule {}
