import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HomeComponent } from './home/home.component';
import { AnotherPageComponent } from './another-page/another-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnotherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"chatapp-c28ed","appId":"1:958490902822:web:249d887bfaad6faacec1e7","databaseURL":"https://chatapp-c28ed-default-rtdb.firebaseio.com","storageBucket":"chatapp-c28ed.appspot.com","apiKey":"AIzaSyDVMhsaBOe1I1sPx0EIY_3zgIEP2whvG24","authDomain":"chatapp-c28ed.firebaseapp.com","messagingSenderId":"958490902822","measurementId":"G-Y4DTM50VYX"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
   // provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
     // const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
     // return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    //}),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
