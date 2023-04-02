<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|string|min:8|max:255|confirmed',
            'company_name' => 'nullable|string|max:255',
            'profile_url' => 'nullable|string|max:255',
            'is_recruiter' => 'nullable|boolean',
        ]);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);

        return User::create($data);
    }
}
