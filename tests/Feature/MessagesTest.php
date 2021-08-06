<?php

namespace Tests\Feature;

use App\Domain\Messages;
use App\Models\Message;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Tests\TestCase;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class MessagesTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Ensure only logged-in users can create messages.
     *
     * @return void
     */
    public function test_needs_to_be_authenticated_to_create_message()
    {
        $response = $this->call('POST', '/messages/new');
        $response->assertRedirect('/login');
    }

    /**
     * Test if the function creates a message and the response stays the same.
     *
     * @return void
     * @throws BindingResolutionException
     */
    public function test_create_message_returns_201_and_creates_thread()
    {
        // Setup
        $user = User::factory()->create();
        $this->actingAs($user);
        $recipient = User::factory()->create();
        $messagesDomain = app()->make(Messages::class);
        $messageBody = Str::random(rand(1, 255));

        // Format
        $messageObject = [
            'message' => $messageBody,
            'recipient' => $recipient->id
        ];

        // Run Action
        $response = $messagesDomain->createNewMessage($messageObject);

        // Evaluate Consequences of Action
        $this->assertTrue($response == response("Message Created Successfully!", ResponseAlias::HTTP_CREATED));
        $this->assertTrue($messageBody == Message::first()->message);
        $this->assertTrue([$user->id, $recipient->id] == Thread::first()->participants);
    }
}
