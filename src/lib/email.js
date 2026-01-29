import nodemailer from "nodemailer";

// Create transporter based on environment
const createTransporter = () => {
  // For development: Use console logging (no actual email sent)
  if (process.env.NODE_ENV === "development" && !process.env.SMTP_HOST) {
    return null; // Will use console logging
  }

  // For production: Use actual SMTP
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD || process.env.SMTP_PASS,
    },
  });
};

const transporter = createTransporter();

// Email templates
const emailTemplates = {
  verification: (name, verificationUrl) => ({
    subject: "Verify Your Email - XPO Investment",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a1628; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0f1f38; border-radius: 16px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px; text-align: center;">
                      <div style="display: inline-flex; align-items: center; gap: 12px;">
                        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3b82f6, #10b981); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
                          <span style="color: white; font-weight: 900; font-size: 24px;">X</span>
                        </div>
                        <span style="color: white; font-size: 28px; font-weight: 900; letter-spacing: -1px;">XPO</span>
                      </div>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 40px 40px;">
                      <h1 style="color: white; font-size: 28px; margin: 0 0 16px; font-weight: 700;">Welcome, ${name}! 👋</h1>
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 32px;">
                        Thank you for signing up with XPO Investment. Please verify your email address to get started with your investment journey.
                      </p>
                      <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #10b981); color: white; font-weight: 700; font-size: 16px; padding: 16px 32px; border-radius: 12px; text-decoration: none;">
                        Verify Email Address
                      </a>
                      <p style="color: #64748b; font-size: 14px; margin: 32px 0 0;">
                        This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
                      <p style="color: #475569; font-size: 12px; margin: 0;">
                        © 2026 XPO Investment Management. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    text: `Welcome to XPO, ${name}!\n\nPlease verify your email by clicking: ${verificationUrl}\n\nThis link expires in 24 hours.`,
  }),

  otp: (name, otp) => ({
    subject: "Your Login OTP - XPO Investment",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a1628; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0f1f38; border-radius: 16px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px; text-align: center;">
                      <div style="display: inline-flex; align-items: center; gap: 12px;">
                        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3b82f6, #10b981); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
                          <span style="color: white; font-weight: 900; font-size: 24px;">X</span>
                        </div>
                        <span style="color: white; font-size: 28px; font-weight: 900; letter-spacing: -1px;">XPO</span>
                      </div>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 40px 40px; text-align: center;">
                      <h1 style="color: white; font-size: 28px; margin: 0 0 16px; font-weight: 700;">Login Verification</h1>
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 32px;">
                        Hi ${name}, use the following OTP to complete your login:
                      </p>
                      <div style="background: rgba(59, 130, 246, 0.1); border: 2px dashed rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 24px; margin: 0 0 32px;">
                        <span style="color: #3b82f6; font-size: 36px; font-weight: 900; letter-spacing: 8px;">${otp}</span>
                      </div>
                      <p style="color: #64748b; font-size: 14px; margin: 0;">
                        This OTP expires in 10 minutes. If you didn't request this, please secure your account.
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
                      <p style="color: #475569; font-size: 12px; margin: 0;">
                        © 2026 XPO Investment Management. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    text: `Your XPO Login OTP: ${otp}\n\nThis OTP expires in 10 minutes.`,
  }),

  passwordReset: (name, resetUrl) => ({
    subject: "Reset Your Password - XPO Investment",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a1628; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0f1f38; border-radius: 16px; overflow: hidden;">
                  <tr>
                    <td style="padding: 40px 40px 20px; text-align: center;">
                      <div style="display: inline-flex; align-items: center; gap: 12px;">
                        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3b82f6, #10b981); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;">
                          <span style="color: white; font-weight: 900; font-size: 24px;">X</span>
                        </div>
                        <span style="color: white; font-size: 28px; font-weight: 900; letter-spacing: -1px;">XPO</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 40px 40px;">
                      <h1 style="color: white; font-size: 28px; margin: 0 0 16px; font-weight: 700;">Password Reset Request</h1>
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 32px;">
                        Hi ${name}, we received a request to reset your password. Click the button below to create a new password.
                      </p>
                      <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #10b981); color: white; font-weight: 700; font-size: 16px; padding: 16px 32px; border-radius: 12px; text-decoration: none;">
                        Reset Password
                      </a>
                      <p style="color: #64748b; font-size: 14px; margin: 32px 0 0;">
                        This link expires in 1 hour. If you didn't request this, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
                      <p style="color: #475569; font-size: 12px; margin: 0;">
                        © 2026 XPO Investment Management. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    text: `Hi ${name},\n\nYou requested a password reset. Click this link to reset your password: ${resetUrl}\n\nThis link expires in 1 hour.`,
  }),
};

// Send email function
export async function sendEmail(to, template, data) {
  const emailContent = emailTemplates[template](...data);

  // Development mode: Log to console
  if (!transporter) {
    console.log("\n📧 ==================== EMAIL ====================");
    console.log(`To: ${to}`);
    console.log(`Subject: ${emailContent.subject}`);
    console.log(`Text: ${emailContent.text}`);
    console.log("=================================================\n");
    return { success: true, messageId: "dev-mode" };
  }

  // Production mode: Send actual email
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "XPO Investment"}" <${process.env.SMTP_USER || "noreply@xpo.com"}>`,
      to,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error.message };
  }
}

export default sendEmail;
