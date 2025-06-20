<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ratings_and_fees_and_competitions', function (Blueprint $table) {
            $table->id();
            $table->integer("fee");
            $table->foreignId("competitionId")->constrained("competitions");
            $table->foreignId("ratingId")->constrained("ratings");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings_and_fees_and_competitions');
    }
};
