import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request }) => {
  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  );

  // Get the user's session from the request cookie / header
  const authHeader = request.headers.get("Authorization");
  const { to, subject, body } = await request.json();

  const { data, error } = await supabase.functions.invoke("send-email", {
    body: { to, subject, body },
    headers: authHeader ? { Authorization: authHeader } : {},
  });

  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  return new Response(JSON.stringify(data), { status: 200 });
};
