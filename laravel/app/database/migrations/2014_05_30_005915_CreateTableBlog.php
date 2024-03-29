<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableBlog extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('blog', function(Blueprint $table)
		{
			$table->create();
			$table->increments('id');
			$table->string('name', 255);
			$table->string('email', 255);
			$table->string('comments', 500);
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
		Schema::table('blog', function(Blueprint $table)
		{
			$table->drop('nerds');
		});
	}

}
