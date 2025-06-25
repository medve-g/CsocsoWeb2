<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Contracts\Auth\Guard;

class AuthController extends Controller
{
    public function register(RegisterUserRequest $request)
    {
        try {
            $validated = $request->validated();

            $user = User::create([
                "name" => $validated["name"],
                "username" => $validated["username"],
                "email" => $validated["email"],
                "password" => $validated["password"],
                "phone_number" => $validated["phone_number"]
            ]);

            $safeUser = $request->safe()->only(['name', 'username', 'email', 'contest_admin']);

            $token = $user->createToken($safeUser["username"])->plainTextToken;

            return response()->json([
                "message" => "Sikeres regisztráció",
                "user" => $safeUser,
                "token" => $token
            ]);
        } catch (\Exception $e) {

            return errorResponse("Hiba történt a regisztráció során", $e);
        }
    }

    public function login(LoginUserRequest $request)
    {
        $request->validated();
        $user = User::where("email", $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                "message" => "Nincs ilyen felhasználó"
            ]);
        }

        $token = $user->createToken($user->username)->plainTextToken;

        return response()->json([
            "user" => $user,
            "token" => $token
        ]);
    }

    public function logout()
    {
        try {
            auth()->user()->tokens()->delete();

            return response()->json([
                "message" => "Kijeletkezve"
            ]);
        } catch (\Exception $e) {

            return errorResponse("Hiba történt a regisztráció során", $e);
        }
    }
}
