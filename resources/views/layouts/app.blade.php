<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Chat App Login Page</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
{{--        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>--}}
{{--        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>--}}
        @if(Request::is('register'))
        <div id="app" class="app-page-auth right-aligned">
            <div class="app-page-auth__left">
                <div class="app-page-auth__left__text-block">
                    <h1>Have an Account?</h1>
                    <p>Login to start messaging your connections in private!</p>
                    <a class="nav-link" href="{{ route('login') }}">SIGN IN</a>
                </div>
                <div class="shapes">
                    <div class="circle-big"></div>
                    <div class="square"></div>
                    <div class="rect"></div>
                    <div class="triangle-sharp"></div>
                </div>
            </div>
            <div class="app-page-auth__right">
                @yield('content')
            </div>
        </div>
        @else
            <div id="app" class="app-page-auth">
                <div class="app-page-auth__left">
                    <div class="app-page-auth__left__text-block">
                        <h1>New Here?</h1>
                        <p>Sign Up to start messaging your connections in private!</p>
                        <a class="nav-link" href="{{ route('register') }}">SIGN UP</a>
                    </div>
                    <div class="shapes">
                        <div class="circle-big"></div>
                        <div class="square"></div>
                        <div class="rect"></div>
                        <div class="triangle-sharp"></div>
                    </div>
                </div>
                <div class="app-page-auth__right">
                    @yield('content')
                </div>
            </div>
        @endif
</body>
</html>
