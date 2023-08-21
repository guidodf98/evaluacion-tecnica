<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $filleable = ['nombre', 'descripcion', 'categoria_id'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class)->withTrashed(); // Se agrega withTrashed para que no se pierda la información si se elimina una categoría.
    }

    public function personas()
    {
      return $this->belongsToMany(Persona::class);
    }
}
