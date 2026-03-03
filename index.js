export default {
  // This part handles the Web Page (Fixes Error 1101)
  async fetch(request, env, ctx) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>4-Real-Friends | Sign In</title>
        <style>
          body { background: #121212; color: white; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .card { background: #1e1e1e; padding: 2rem; border-radius: 12px; text-align: center; border: 1px solid #333; }
          button { background: #0070f3; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>4-Real-Friends</h1>
          <p>The system is currently invite-only.</p>
          <button onclick="alert('Coming soon!')">Sign In with Google</button>
        </div>
      </body>
      </html>
    `;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },

  // This part handles the Email Forwarding
  async email(message, env, ctx) {
    await message.forward("2bizzyeights.org@gmail.com");
  }
};

