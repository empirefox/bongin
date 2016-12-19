import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { DynamicHTMLModule } from 'ng-dynamic';
import { MasonryModule } from 'angular2-masonry';
import { SwiperModule } from 'angular2-useful-swiper';
import { CollapseModule } from 'ng2-bootstrap/components/collapse';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AMAP_KEY } from 'ng2-amap-input/amap/tokens';
import { BgDirective } from 'ng2-bg-input/directives/bg';
import { FaComponent } from 'ng2-fa-input/components/fa';
import { PatternsService, SVG_PATTERNS } from 'ng2-pattern-input/services/patterns.service';
import { value as patterns } from 'ng2-pattern-input/patterns';
import { TrianglifyRenderer } from 'ng2-trianglify-input/services/trianglify-renderer.service';
import { MdService } from 'ng2-smd-input/services/md.service';

import { environment } from '../environments/environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

import { PUBLIC_PROVIDERS } from './core';
import { APP_DIRECTIVES } from './directives';
import { APP_CORE_PIPES } from './pipes';
import { LuckLinkComponent } from './a';
import { LuckImgComponent } from './img';
import { LuckNavbar } from './navbar';
import { LuckPage } from './page';
import { LuckPageHeader } from './page-header';
import { PAGE_SECTION_DIRECTIVES } from './page-section';
import { PAGE_PANEL_DIRECTIVES } from './page-panel';
import { SIDENAV_DIRECTIVES } from './sidenav';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,

    ...APP_DIRECTIVES,
    ...APP_CORE_PIPES,
    BgDirective,
    FaComponent,
    LuckLinkComponent,
    LuckImgComponent,
    LuckNavbar,
    LuckPage,
    LuckPageHeader,
    ...PAGE_SECTION_DIRECTIVES,
    ...PAGE_PANEL_DIRECTIVES,
    ...SIDENAV_DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),

    MasonryModule,
    SwiperModule,
    CollapseModule,
    Ng2PageScrollModule.forRoot(),

    DynamicHTMLModule.forRoot({
      components: [
        { component: LuckLinkComponent, selector: 'a[luck]' },
      ]
    }),
  ],
  providers: [
    ...PUBLIC_PROVIDERS,
    PatternsService,
    TrianglifyRenderer,
    MdService,
    { provide: AMAP_KEY, useValue: environment.amapKey },
    { provide: SVG_PATTERNS, useValue: patterns },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
