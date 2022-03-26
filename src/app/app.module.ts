import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitProcessingService } from './core/services/init-processing.service';
import { HttpReqInterceptor } from './core/interceptors/http-req.interceptor';

export function initData(initProcessingService: InitProcessingService) {
  return () => initProcessingService.setData();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initData,
      deps: [InitProcessingService],
      multi: true,
    },

    { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
