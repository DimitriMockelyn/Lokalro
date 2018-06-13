<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1">
        <meta name="csrf-token" id='meta-token' content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{asset('css/app.css?v=1')}}">
        <title> Lokalero </title>
    </head>
    <body>
    <div id="main-app"></div>
    <script src="{{asset('js/app.js?v=1')}}" charset="UTF-8"></script>
</html>
