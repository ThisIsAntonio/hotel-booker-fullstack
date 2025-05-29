import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { environment } from './environments/environment';
console.log('🧪 Current API URL:', environment.apiUrl);

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)]
})
  .catch(err => console.error(err));
