import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate input
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Gửi về chính Gmail của bạn
      subject: `Tin nhắn mới từ ${firstName} ${lastName} - Website Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Tin nhắn mới từ Website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tên:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Thời gian:</strong> ${new Date().toLocaleString(
              "vi-VN"
            )}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Nội dung tin nhắn:</h3>
            <p style="line-height: 1.6; color: #212529;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Email này được gửi tự động từ form liên hệ trên website của bạn.</p>
            <p>Để trả lời, hãy gửi email trực tiếp đến: ${email}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email đã được gửi thành công!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi khi gửi email:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
