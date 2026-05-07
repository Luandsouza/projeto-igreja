import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "membros", loadComponent: () => import(`./membros/membros`).then(x => x.Membros)}
];

