import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopWidgetsComponent } from './components/top-widgets/top-widgets.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentThreeComponent } from './components/component-three/component-three.component';
import { ComponentFourComponent } from './components/component-four/component-four.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFiveComponent } from './components/component-five/component-five.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';
import { SearchfiltertopicPipe } from './pipe/searchfiltertopic.pipe';
import { SearchfiltercityPipe } from './pipe/searchfiltercity.pipe';
import { SearchfilterregionPipe } from './pipe/searchfilterregion.pipe';
import { SearchfilteryearPipe } from './pipe/searchfilteryear.pipe';
import { ComponentSixComponent } from './components/component-six/component-six.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    SearchfilterPipe,
    SearchfiltertopicPipe,
    SearchfiltercityPipe,
    SearchfilterregionPipe,
    SearchfilteryearPipe,
    ComponentSixComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
