//ROOT MODULE - company department - instructs Angular how to assemble our application.
import { NgModule }      from '@angular/core'; //general Module code from the Angular framework's core
import { BrowserModule } from '@angular/platform-browser'; // imports code necessary to run our app in the browser
import { AppComponent }   from './app.component';//actually refers to the root component we created
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { CompletenessPipe } from './completeness.pipe';
import { KegFilterComponent } from './keg-filter.component';
import { NewKegComponent } from './new-keg.component';


//Module Decorator
@NgModule({
  imports: [ BrowserModule,
                  FormsModule ], //imports array under the decorator imports other pieces of our application we want included in this module.
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  KegFilterComponent,
                  CompletenessPipe,
                  NewKegComponent, ], //array of all components that will reside in this module
  bootstrap:    [ AppComponent ] // array of components required immediately upon launching the application
})


export class AppModule { } //standard name for the root module's class declaration.
