<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Track;

class TracksSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $tracks = [
      ['name' => 'Alma de Bohemio', 'duration' => 195, 'album_id' => 1],
      ['name' => "A Vaca Já Foi P'ro Brejo", 'duration' => 199, 'album_id' => 2],
      ['name' => 'Preto Velho', 'duration' => 168, 'album_id' => 3],
      ['name' => 'Rei dos Canoeiros', 'duration' => 213, 'album_id' => 4],
    ];

    foreach ($tracks as $track) {
      Track::create($track);
    }
  }
}
