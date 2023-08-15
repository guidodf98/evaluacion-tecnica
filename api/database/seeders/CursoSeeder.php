<?php

namespace Database\Seeders;

use App\Models\Curso;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crea algunos cursos de ejemplo
        $cursos = [
            // Frontend
            [
                'nombre' => 'Desarrollo Web - FrontEnd Web Developer',
                'descripcion' => 'El mejor curso para aprender a crear aplicaciones Web Modernas con HTML, CSS y JavaScript. Serás un FrontEnd Developer!',
                'categoria_id' => 1,
            ],
            [
                'nombre' => 'Desarrollo Web Front-End Con HTML5, CSS3 y JavaScript',
                'descripcion' => 'Aprende a crear sitios o aplicaciones web con HTML5, CSS3, JavaScript y compleméntalo con Less, JQuery o VUE.',
                'categoria_id' => 1,
            ],
            [
                'nombre' => 'Master en Frameworks JavaScript: Aprende Angular, React, Vue',
                'descripcion' => 'Aprende desarrollo web con los frameworks para JavaScript más potentes. Aprenderás Angular, React JS, Vue.js, Node y más.',
                'categoria_id' => 1,
            ],
            [
                'nombre' => 'Curso Web Frontend Fundamentos: HTML, CSS y JS',
                'descripcion' => 'Fundamentos de Diseño Web Front-end: HTML, CSS, Lógica de Programación y Javascript.',
                'categoria_id' => 1,
            ],
            [
                'nombre' => 'Curso ReactJS',
                'descripcion' => 'Aprende React creando proyectos y retos como si trabajaras en una empresa de desarrollo.',
                'categoria_id' => 1,
            ],
            [
                'nombre' => 'Desarrollo Profesional Angular',
                'descripcion' => 'Angular desde Basico hasta Avanzado.',
                'categoria_id' => 1,
            ],

            // Backend
            [
                'nombre' => 'Node: De cero a experto',
                'descripcion' => 'Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node.',
                'categoria_id' => 2,
            ],
            [
                'nombre' => 'Backend Python desde 0',
                'descripcion' => 'Aprende a programar desde cero con Python y conviértete en desarrollador backend con Python y SQL creando una api rest.',
                'categoria_id' => 2,
            ],
            [
                'nombre' => 'Curso Experto en Backend',
                'descripcion' => 'Aprende sobre el uso de NodeJS y muchas otras dependencias para crear tu servidor backend.',
                'categoria_id' => 2,
            ],

            // Bases de Datos
            [
                'nombre' => 'Master en SQL Server',
                'descripcion' => 'SQL Aprende Bases de Datos, Consultas, Funciones, Tablas y Permisos. Diseña y Programa una Base de Datos Relacional SQL.',
                'categoria_id' => 3,
            ],
            [
                'nombre' => 'Diseño de Bases de Datos Relacionales',
                'descripcion' => 'Un viaje desde el Dato hasta la Base de Datos. Modelo Relacional, Normalización de Bases de Datos, RDBMS, SQL y más.',
                'categoria_id' => 3,
            ],
            [
                'nombre' => 'Aprende Oracle PL',
                'descripcion' => 'Aprende de forma práctica a utilizar el lenguaje de desarrollo PL para Bases de Datos Oracle 21c, 19c, e inferiores.',
                'categoria_id' => 3,
            ],
            [
                'nombre' => 'DBA MySQL',
                'descripcion' => 'Profesional Administrador de Bases de datos MySQL.',
                'categoria_id' => 3,
            ],

            // Desarrollo Movil
            [
                'nombre' => 'Flutter Avanzado',
                'descripcion' => 'Sesiones con JWT y Refresh Tokens,SocketIO, Google Maps, Heremaps, Platform Channels, Animaciones, WebRTC, Flavors.',
                'categoria_id' => 4,
            ],
            [
                'nombre' => 'Desarrollo de Aplicaciones móviles Android con App Inventor',
                'descripcion' => 'Crea increíbles aplicaciones móviles para Android sin programar utilizando App Inventor! 33 apps paso a paso.',
                'categoria_id' => 4,
            ],
            [
                'nombre' => 'Android y Kotlin Desde Cero',
                'descripcion' => 'Desarrollo de Aplicaciones Móviles Android con Kotlin.',
                'categoria_id' => 4,
            ],
        ];

        foreach ($cursos as $curso) {
            Curso::create($curso);
        }
    }
}
