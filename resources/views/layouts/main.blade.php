<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    @include('layouts.css')
    <link rel="icon" href="{{ asset('images/fav.png') }}" type="image/png">
    <title>KnightOne Bootstrap Template - Index</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="{{ 'img/favicon.png' }}" rel="icon">
    <link href="{{ 'img/apple-touch-icon.png' }}" rel="apple-touch-icon">
</head>

<body>
    @include('layouts.header')


    @yield('content')
    @include('layouts.footer')
    @include('layouts.js')
</body>

</html>
