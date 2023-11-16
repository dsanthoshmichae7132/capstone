<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderLog extends Model
{
    use HasFactory;
    protected $table = 'order_log';

    public $fillable = [
        'order_id',
        'status'
    ];
}
