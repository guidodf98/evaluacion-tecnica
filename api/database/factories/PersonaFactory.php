<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Persona>
 */
class PersonaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->firstName,
            'apellido' => $this->faker->lastName,
            'genero' => $this->faker->randomElement(['masculino', 'femenino', 'otro']),
            'edad' => $this->faker->numberBetween(10, 90),
            'dni' => $this->faker->unique()->numberBetween(10000000, 99999999),
        ];
    }
}
