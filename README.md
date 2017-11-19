# Clientpanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Application Comments
This application uses:
**Firebase:** For storing client records and for email authentication
**Flash Messages:** To give message feedback to user
**Routing:** To access different pages of the app
**Route Guards:** To block some pages from being seen if user not logged in.
and block some pages from being viewed if flag is set for non-register (for a User)
**Form Validation:** Not allow a form to be submitted unless all fields in correct format
**Local Storage:** Add & retrieve an object of application level settings from local storage
## Listing of Components and Features
**add-client**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
ActivatedRoute to extract id from url  
ClientService to read specific client from database based on id  
ClientService also adds and deletes a client from the Firebase database  
HTML contains form validation for required, minlength & regex for email &disables submit button until all fields pass validtion  

**client-details**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
ClientService to add new client to database  
Client Model to retrive model of client object  
HTML contains pencil icon to edit field & routerLink for page navigation  

**clients**  
ClientService to retrieve all clients from Firebase database  
Client Model to retrive model of client object  
Uses parseFloat javascript function to sum balances and convert to a float number  
HTML displays all clients in a table & routerLink to display details for a specific client using the client id  

**dashboard**  
Display dashboard component  
HTML contains client and sidebar components  

**edit-client**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
ActivatedRoute to extract id from url  
SettingsService to read app level flag for allowing the edit of the balance field on edit option  
ClientService to read specific client from database based on id  
ClientService also updates a client in the Firebase database  
Client Model to retrive model of client object  
HTML contains form validation for required, minlength & regex for email & disables submit button until all fields pass validtion  

**login**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
AuthService to login to Firebase database using email & password authentication  
Registrant Model to retrive model of registered object in Firebase (email & password)  
HTML contains form validation for required, minlength & regex for email & disables submit button until all fields pass validtion  

**navbar**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
AuthService to determine if user has already logged onto Firebase & logout user  
SettingsService to read app level flag for allowing user registration  
HTML contains logic to display menu items if user is logged in or not; allow user to logout; highlight menu option if within that menu; use routerLinkActiveOptions={exact:true}, this will add classes only when the url matches the link exactly  

**page-not-found**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
HTML contains empty p tag. User will see page not found message and be re-directed to login page  

**register**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
AuthService to register to Firebase database using email & password authentication  
Registrant Model to hold model of registered object in Firebase (email & password)  
HTML contains form validation for required, minlength & regex for email & disables submit button until all fields pass validtion  

**settings**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
SettingsService to update app level flags based on changes from HTML  
Settings Model to hold model of settings object in local storage (this truly needs to be in Firebase database so all users access the same app level flags)
HTML contains form for checkboxes to hold app level flags  

**sidebar**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
HTML contains New button to add client to database (as anchor tag; anchor tag contains routerLink to redirect to "/add-client" route  

**auth guard**  
FlashMessages to display appropriate messages  
Router to navigate to new page  
canActivate to determine if user has already logged onto Firebase databese; if true return true; if false return false  
Guards can be created via the Angular CLI  

**register guard**  
SettingsService to read app level flag for allowing user registration  
Router to navigate to new page  
canActivate to determine value of app level flag for allowing registration; if true return true; if false return false  