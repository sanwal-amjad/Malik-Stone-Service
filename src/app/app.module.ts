import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LickSaltComponent } from './lick-salt/lick-salt.component';
import { EdibleSaltComponent } from './edible-salt/edible-salt.component';
import { CulnarySaltComponent } from './culnary-salt/culnary-salt.component';
import { ContactComponent } from './contact/contact.component';
import{TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { SaltTilesComponent } from './salt-tiles/salt-tiles.component';
import { AromatherapyComponent } from './aromatherapy/aromatherapy.component';
import { SaltlampComponent } from './saltlamp/saltlamp.component';


export const createTranslateLoder=(http:HttpClient)=>{
  return new TranslateHttpLoader(http, './assets/il8/','.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LickSaltComponent,
    EdibleSaltComponent,
    CulnarySaltComponent,
    ContactComponent,
    BlogComponent,
    SaltTilesComponent,
    AromatherapyComponent,
    SaltlampComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:createTranslateLoder,
    deps:[HttpClient]
  }
}),
 RouterModule.forRoot([ {
      path:'',
      component: HomePageComponent
    },
    {
      path:'licksalt',
      component:LickSaltComponent
    },
    {
      path:'ediblesalt',
      component:EdibleSaltComponent
    },
    {
      path:'culnarysalt',
      component:CulnarySaltComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'blog',
      component:BlogComponent
    },
    {
      path:'salttiles',
      component:SaltTilesComponent
    },
    {
      path:'aromatherapy',
      component:AromatherapyComponent
    },
    {
      path:'saltlamps',
      component:SaltlampComponent
    }
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
