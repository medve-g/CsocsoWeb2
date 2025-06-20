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
        Schema::create('categories_and_competitions', function (Blueprint $table) {
            $table->id();
            $table->foreignId("categoryId")->constrained("categories");
            $table->foreignId("competitionId")->constrained("competitions");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories_and_competitions');
    }
};
