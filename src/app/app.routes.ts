import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Impressum } from './impressum/impressum';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'impressum', component: Impressum },
    { path: 'privacypolicy', component: PrivacyPolicy },
];
