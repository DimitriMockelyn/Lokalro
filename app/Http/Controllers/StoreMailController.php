<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactMail;
use App\Http\Requests\ContactMailRequest;

class StoreMailController extends Controller
{
    public function save(ContactMailRequest $request) {
	    $contact = new ContactMail;
		$contact->email = $request->email;
		$contact->name = $request->name;
		$contact->prevenir_lancement = $request->prevenir_lancement;
		$contact->newsletter = $request->newsletter;
		$contact->comment_connu = $request->comment_connu;
		$contact->save();
    }
}
