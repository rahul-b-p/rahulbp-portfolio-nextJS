import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";


export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ✅ Acknowledgement to the CLIENT
  await transporter.sendMail({
    from: `"Rahul B P" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thanks for reaching out! I'll get back to you soon 👋",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <style>
            body { margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', Arial, sans-serif; }
            .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 40px 32px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; }
            .header p { color: #94a3b8; margin: 8px 0 0; font-size: 14px; }
            .body { padding: 36px 32px; color: #374151; }
            .body h2 { font-size: 20px; margin: 0 0 12px; color: #0f172a; }
            .body p { font-size: 15px; line-height: 1.7; margin: 0 0 16px; color: #4b5563; }
            .highlight-box { background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 6px; padding: 16px 20px; margin: 24px 0; }
            .highlight-box p { margin: 0; font-size: 14px; color: #374151; }
            .highlight-box span { font-weight: 600; color: #0f172a; }
            .divider { border: none; border-top: 1px solid #e5e7eb; margin: 28px 0; }
            .signature { font-size: 14px; color: #374151; line-height: 1.9; }
            .signature .name { font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
            .signature a { color: #3b82f6; text-decoration: none; }
            .links { display: flex; gap: 12px; margin-top: 10px; flex-wrap: wrap; }
            .links a { display: inline-block; background: #0f172a; color: #ffffff !important; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; text-decoration: none; }
            .footer { background: #f8fafc; text-align: center; padding: 18px; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="wrapper">

            <!-- Header -->
            <div class="header">
              <h1>Hey ${name}, thanks for reaching out! 🙌</h1>
              <p>I've received your enquiry and will get back to you shortly.</p>
            </div>

            <!-- Body -->
            <div class="body">
              <p>Hi <strong>${name}</strong>,</p>
              <p>
                Thank you for taking the time to contact me through my portfolio. 
                I've received your message and truly appreciate your interest in working together.
              </p>
              <p>
                I'll review your enquiry and get back to you within <strong>24–48 hours</strong>. 
                In the meantime, feel free to explore my work or connect with me on LinkedIn.
              </p>

              <!-- Message Preview -->
              <div class="highlight-box">
                <p>📩 <span>Your message:</span></p>
                <p style="margin-top:8px; color:#6b7280; font-style:italic;">"${message}"</p>
              </div>

              <p>Looking forward to connecting with you! 🚀</p>

              <hr class="divider" />

              <!-- Signature -->
              <div class="signature">
                <div class="name">Rahul B P</div>
                <div>📧 <a href="mailto:rahulzantoz10@gmail.com">rahulzantoz10@gmail.com</a></div>
                <div>📞 <a href="tel:+919074398285">+91 90743 98285</a></div>
                <div>📍 Kochi &nbsp;·&nbsp; Willing to relocate</div>
                <div class="links">
                  <a href="https://rahulbp-portfolio-next-js.vercel.app" target="_blank">🌐 Website</a>
                  <a href="https://www.linkedin.com/in/rahul-b-p-678b43278" target="_blank">💼 LinkedIn</a>
                  <a href="https://github.com/rahul-b-p" target="_blank">🐙 GitHub</a>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              This is an automated acknowledgement. Please do not reply to this email directly.
            </div>

          </div>
        </body>
      </html>
    `,
  });

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[name, email, message, new Date().toISOString()]],
    },
  });

  return NextResponse.json({ success: true });
}
