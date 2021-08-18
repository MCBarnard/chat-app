@extends('layouts.app')

@section('content')
<div class="login-page">
    <form method="POST" action="{{ route('login') }}">
        @csrf

        <div class="header">
            Sign in to ChatApp
        </div>

        <div class="form-input-fields">
            <div class="input-field">
                    <input
                        id="email"
                        type="email"
                        class="@error('email') is-invalid @enderror"
                        name="email"
                        placeholder="Email"
                        value="{{ old('email') }}"
                        required
                        autofocus>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                        <path fill-rule="evenodd"
                              d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path>
                    </svg>
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
            </div>
            <div class="input-field">
                <div>
                    <input
                        id="password"
                        type="password"
                        class="@error('password') is-invalid @enderror"
                        name="password"
                        placeholder="Password"
                        required>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                        <path fill-rule="evenodd"
                              d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path>
                    </svg>

                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
        </div>

        <div class="forgot-password-section">
            <a class="btn btn-link" href="{{ route('password.request') }}">
                Forgot your password?
            </a>
        </div>

        <button type="submit" class="submit-button">
            SIGN IN
        </button>
    </form>
</div>
@endsection
