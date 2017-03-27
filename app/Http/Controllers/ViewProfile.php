<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class ViewProfileController extends Controller
{
    public function index()
    {
        $viewProfile = ViewProfile::all(); // gets Profile from the database
        return compact('viewProfile');  // returns all employees in .json format

    }
}
