<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThreadRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thread_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner')->constrained('users');
            $table->foreignId('recipient')->constrained('users');
            $table->foreignId('thread_id')->constrained('threads');
            $table->mediumText('message')->nullable();
            $table->integer('state')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thread_requests');
    }
}
