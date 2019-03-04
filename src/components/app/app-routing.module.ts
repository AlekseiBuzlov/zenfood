import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NotFoundComponent } from '../notFound/notFound.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }, {
        path: 'main',
        component: MainComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
