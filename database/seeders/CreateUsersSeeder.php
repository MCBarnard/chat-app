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
                'email'=>'user@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
            [
                'name'=>'Test',
                'email'=>'test@test.com',
                'password'=> bcrypt('1qazxsw2'),
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
