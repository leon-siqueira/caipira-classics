<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Album;
use App\Models\Track;

class APIController extends Controller
{
  public function search(Request $request)
  {
    if ($request->get('name') != '') {
      $searchTerm = $request->get('name');
      $albums = Album::where('name', 'like', "%$searchTerm%")->get();
      $tracks = Track::with('album')->where('name', 'like', "%$searchTerm%")->get();

      return response()->json([
        'albums' => $albums,
        'tracks' => $tracks,
      ]);
    } else
      return response()->json(['albums' => [], 'tracks' => []]);
  }
}
