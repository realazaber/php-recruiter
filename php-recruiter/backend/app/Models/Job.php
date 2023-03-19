<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'company_name',
        'company_logo_path',
        'description',
        'category',
        'salary_min',
        'salary_max',
        'currency',
        'user_id'
    ];
}
