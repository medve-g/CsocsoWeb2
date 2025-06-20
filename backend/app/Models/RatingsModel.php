<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class RatingsModel extends Model
{
    use SoftDeletes;

    protected $table = "ratings";

    protected $fillable = ["name"];

    public function rafac(): BelongsToMany{
        return $this->belongsToMany(RafacModel::class);
    }
}
