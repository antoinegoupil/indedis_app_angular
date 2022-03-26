import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/commerce/commerce.module').then(
        (m) => m.CommerceModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'products', component: ListProductComponent },
//   { path: 'products/:id', component: ProductComponent },

//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
