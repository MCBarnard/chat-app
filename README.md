<!-- ------------------------------- NOTES TO MYSELF! -------------------------------------------
# Development
## V1

### *Requirements*
* Be able to send messages to users
* Javascript or blade needs to decrypt messages
* needs to be stored encrypted
* site should not be able to decrypt the messages

### *Problems*
1) decrypting needs to happen in javascript that cannot be decrypted by a third party (some secret between the user and device)
2) How do you handle illegal activity???

### *Possible Solutions*
* use the below for encrypting messages?
``` 
$crypt = Illuminate\Encryption\Encrypter($key);
$crypt->encrypt('value');
$crypt->decrypt('hashedValue'); 
```

* store a key locally per conversation? So each conversation will have local keys... if keys are deleted, user no longer has access to the thread?

* Security purposes, save the users secret in the db or in cookies on login, then delete it on logout, if we implement a shared key encryption, reporting a user will submit the thread key for use on the admin end... without the key, they can't access the thread and thus can't report anyone due to inability to decrypt the data...
* Store the chat keys in a local storage extension?

* while developing, store keys in a db table where we can later move the functionality to the user side
---------------------------------------------------------------------------------------------- -->
# Chat App
An online chat platform

## Setup locally
* `git clone`
* `composer install`
* `php artisan key:generate`
* `php artisan migrate`
* `npm install`
* `npm run dev`
* `php artisan serve`
----------------------------
##### Optional to add Users
* `php artisan db:seed --class=CreateUsersSeeder`
----------------------------

## Users (Seeded)

|   Username    | Password |
| ------------- | -------- |
| test@test.com | 1qazxsw2 |
| user@test.com | 1qazxsw2 |
