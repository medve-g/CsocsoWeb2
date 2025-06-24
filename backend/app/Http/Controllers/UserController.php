<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function register(RegisterUserRequest $request)
    {
        try {
            $validated = $request->validated();

            User::create([
                "name" => $validated["name"],
                "username" => $validated["username"],
                "email" => $validated["email"],
                "password" => $validated["password"],
                "phone_number" => $validated["phone_number"]
            ]);

            $validated = $request->safe()->only(['name', 'username', 'email']);

            return response()->json([
                "message" => "Sikeres regisztráció",
                "user" => $validated
            ]);

        } catch (\Exception $e) {
            
            return response()->json([
                "message" => "Hiba történt a regisztráció során.",
                "error" => $e->getMessage()
            ], 500);
        }
    }
}
