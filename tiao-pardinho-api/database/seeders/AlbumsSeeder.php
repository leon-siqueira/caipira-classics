<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Album;

class AlbumsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $albums = [
      ['name' => 'Rei do Gado', 'year' => 1961],
      ['name' => 'Golpe de Mestre', 'year' => 1979],
      ['name' => 'Navalha na Carne', 'year' => 1982],
      ['name' => 'Felicidade', 'year' => 1985],
    ];

    foreach ($albums as $album) {
      Album::create($album);
    }
  }
}
