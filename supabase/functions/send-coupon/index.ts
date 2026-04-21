import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const allowedOrigins = [
  "http://localhost:5173",
  "https://customer-feedback-xi-nine.vercel.app",
];

serve(async (req) => {
    const origin = req.headers.get("Origin") ?? "";
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  const corsHeaders = {
    "Access-Control-Allow-Origin":  allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, name, perfumeName } = await req.json();

    const coupon = "HIGHBORN-" + Math.random().toString(36).substring(2, 7).toUpperCase();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from:     "The Perfume Paradise <support@theperfumeparadise.com>",
        reply_to: "support@theperfumeparadise.com",
        to:       [email],
        subject:  "Thank you for your review — here's your coupon 🌸",
        html: `
          <div style="font-family:Georgia,serif;max-width:480px;margin:0 auto;padding:40px 24px;color:#3d2b1f;">
            <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#a08070;">
              The Perfume Paradise
            </p>
            <h1 style="font-size:32px;font-weight:400;margin:16px 0 8px;">
              Thank you, ${name}.
            </h1>
            <p style="color:#a08070;font-size:15px;line-height:1.7;">
              We loved reading your thoughts on <strong>${perfumeName}</strong>.
              Here's an exclusive coupon as a token of appreciation.
            </p>
            <div style="margin:32px 0;padding:20px;border:1px solid #e8ddd5;border-radius:12px;text-align:center;background:#fdf8f5;">
              <p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#a08070;margin-bottom:8px;">
                Your Coupon Code
              </p>
              <p style="font-size:28px;font-weight:400;letter-spacing:0.1em;color:#d4896a;margin:0;">
                ${coupon}
              </p>
              <p style="font-size:12px;color:#c9b8ae;margin-top:8px;">
                10% off your next order · Valid 30 days · One time use
              </p>
            </div>
            <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e8ddd5;">
              <p style="font-size:11px;color:#c9b8ae;">
                The Perfume Paradise · theperfumeparadise.com
              </p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      throw new Error(data?.message ?? "Email send failed");
    }

    return new Response(
      JSON.stringify({ coupon }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});