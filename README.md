# Lokalero

## Installation

 1. Install [Laravel](https://laravel.com/docs/5.6/installation)
 2. You will have to install [Composer](https://getcomposer.org/), dependency manager for php.
 3. Install npm
 4. Composer install
 5. npm i

## Database config

 - You will find the db configuration inside the .env file.
 - I named the db lokalero, you can rename it if you wish.
 - And then you create your DB with the same name.
 
## Migration
Once your DB is set, you can run the migration command:
	**php artisan migrate** 
 - You will migrate all the tables needed for the application and If you want to scaffold the **authentication**,
just run:  **php artisan make:auth**
   
## Launch the app

 - To go live: **php artisan serve**
 - **npm run dev** So the react component will pop.

I just put two forms for testing and the both forms are built with validation, all the inputs are required and the email input has an email validation to avoid dummy data. 

*Congratz*
