<?php

if (!function_exists('errorResponse')) {

    function errorResponse($message, $data)
    {
        return response()->json([
            "message" => $message,
            "error" => $data
        ], 500);
    }
}
