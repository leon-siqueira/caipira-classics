<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Album;

class AlbumController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Album::with('tracks')->get();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $album = Album::create($request->all());
    return response()->json($album, 201);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $album = Album::findOrFail($id);
    return response()->json($album->load('tracks'), 200);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $album = Album::findOrFail($id);
    $album->delete();
    return response()->json(null, 204);
  }
}
