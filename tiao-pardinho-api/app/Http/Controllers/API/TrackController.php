<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Track;

class TrackController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Track::all();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $track = Track::create($request->all());
    return response()->json($track, 201);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $track = Track::find($id);
    return response()->json($track, 200);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $track = Track::find($id);
    $track->delete();
    return response()->json(null, 204);
  }
}
