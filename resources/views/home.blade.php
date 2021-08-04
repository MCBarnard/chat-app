@extends('layouts.main')

@section('body')
        <div id="app">
            <App></App>
        </div>
        <!-- Scripts -->
        <script type="application/javascript">
            window.options = JSON.parse('{!! $optionValues !!}');
        </script>
        <script src="{{ mix('js/app.js') }}"></script>
@endsection
