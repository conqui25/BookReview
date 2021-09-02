import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { ApiBookService } from './api/api-book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorsComponent,
    BooksComponent,
    ProfileComponent,
    HomeComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiBookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
