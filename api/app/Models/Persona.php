<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
  use HasFactory;

  protected $fillable = ['nombre', 'apellido', 'genero', 'edad', 'dni'];

  public function cursos()
  {
    return $this->belongsToMany(Cursos::class);
  }
}
