<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactLokaleroRequest;
use App\Mail\ContactLokalero;

use Mail;

class ContactLokaleroController extends Controller
{
    public function send(ContactLokaleroRequest $request) {
        Mail::to('ophelie@lokalero.fr')->send(new ContactLokalero($request));
        //Mail::to('dimitri.mockelyn@gmail.com')->send(new ContactLokalero($request));
    }
}
