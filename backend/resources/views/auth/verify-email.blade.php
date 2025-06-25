<!-- resources/views/auth/verify-email.blade.php -->
<x-app-layout>
    <h1>Verify Your Email Address</h1>

    @if (session('message'))
        <p>{{ session('message') }}</p>
    @endif

    <p>Before proceeding, please check your email for a verification link.</p>

    <form method="POST" action="{{ route('verification.send') }}">
        @csrf
        <button type="submit">Resend Verification Email</button>
    </form>
</x-app-layout>
