export default {
  async fetch(request, env, ctx) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
      <body style="background:#121212;color:white;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;margin:0;">
        <div style="text-align:center;border:1px solid #333;padding:40px;border-radius:20px;background:#1e1e1e;">
          <h1 style="color:#0070f3;margin-top:0;">4-Real-Friends</h1>
          <p style="color:#888;">System Status: Online</p>
          <button style="background:#0070f3;color:white;border:none;padding:12px 24px;border-radius:6px;font-weight:bold;cursor:pointer;">Sign In</button>
        </div>
      </body>
      </html>`, 
      { headers: { "content-type": "text/html;charset=UTF-8" } }
    );
  },

  async email(message, env, ctx) {
    await message.forward("2bizzyeights.org@gmail.com");
  }
};


