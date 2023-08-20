<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CursoPersona extends Model
{
    use HasFactory;
    protected $table = 'curso_persona';
    protected $filleable = ['curso_id', 'persona_id'];

    public function curso()
    {
        return $this->belongsTo(Curso::class);
    }
}
