import { openai } from '@ai-sdk/openai';
import { getSession } from '@auth0/nextjs-auth0';
import { StreamingTextResponse, streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const session = await getSession();

  console.log('Session:', session);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Call the language model
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });

  // Create a new StreamData
  const data = new StreamData();

  // Append additional data
  data.append({ test: 'value' });

  // Convert the response into a friendly text-stream
  const stream = result.toAIStream({
    onFinal(_) {
      data.close();
    },
  });

  // Respond with the stream and additional StreamData
  return new StreamingTextResponse(stream, {}, data);
}
