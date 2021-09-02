import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    /* loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule), */
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    /* loadChildren: () =>
        import('./authors/authors.module').then(
          (m) => m.AuthorsModule
        ), */
  },
  {
    path: 'books',
    component: BooksComponent,
    /* loadChildren: () =>
      import('./books/books.module').then((m) => m.ShoppingListModule), */
  },

  {
    path: 'profile',
    component: ProfileComponent,
    /* loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule), */
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      //useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
