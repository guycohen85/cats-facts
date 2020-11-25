<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CatsFactsController extends Controller
{
    public function index()
    {
        if( Storage::exists('cats-facts.json') ){
            $cats_facts = Storage::get('cats-facts.json');
            $cats_facts = json_decode($cats_facts, true);
            return response()->json( $cats_facts );
        }
        return view('file-not-exist');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'facts' => 'required',
        ]);
        $facts = json_encode($validatedData["facts"], true);
        Storage::put('cats-facts.json', $facts);
        return response($facts, 200);
    }

}
