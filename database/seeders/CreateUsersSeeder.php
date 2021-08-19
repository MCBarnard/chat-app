<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class CreateUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name'=>'User',
                'email'=>'test@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Bob',
                'email'=>'bob@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Mike',
                'email'=>'mike@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Jane',
                'email'=>'jane@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'John',
                'email'=>'john@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Mary',
                'email'=>'mary@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Ben',
                'email'=>'ben@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
