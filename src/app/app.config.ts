import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ),
    provideRouter(routes),
  ]
};
