# Hướng dẫn cấu hình Gmail để nhận email từ form liên hệ

## Bước 1: Tạo App Password cho Gmail

### 1.1. Bật 2-Step Verification (Xác thực 2 bước)
1. Đăng nhập vào tài khoản Google của bạn
2. Truy cập [Google Account Security](https://myaccount.google.com/security)
3. Trong phần "Signing in to Google", click vào "2-Step Verification"
4. Làm theo hướng dẫn để bật 2-Step Verification nếu chưa bật

### 1.2. Tạo App Password
1. Sau khi bật 2-Step Verification, quay lại [Google Account Security](https://myaccount.google.com/security)
2. Trong phần "Signing in to Google", click vào "App passwords"
3. Chọn "Mail" và "Other (Custom name)"
4. Nhập tên cho app password (ví dụ: "Website Contact Form")
5. Click "Generate"
6. **Lưu lại mật khẩu 16 ký tự được tạo ra** (ví dụ: `abcd efgh ijkl mnop`)

## Bước 2: Cấu hình Environment Variables

### 2.1. Tạo file .env.local (nếu chưa có)
Trong thư mục root của project, tạo file `.env.local` với nội dung:

\`\`\`env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
\`\`\`

### 2.2. Thay thế thông tin thực tế
- `GMAIL_USER`: Thay bằng địa chỉ Gmail của bạn
- `GMAIL_APP_PASSWORD`: Thay bằng App Password 16 ký tự vừa tạo (không có dấu cách)

**Ví dụ:**
\`\`\`env
GMAIL_USER=contact@yourcompany.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
\`\`\`

## Bước 3: Cấu hình trên Vercel (khi deploy)

### 3.1. Thêm Environment Variables trên Vercel
1. Truy cập [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào tab "Settings" → "Environment Variables"
4. Thêm 2 biến môi trường:
   - `GMAIL_USER`: Địa chỉ Gmail của bạn
   - `GMAIL_APP_PASSWORD`: App Password 16 ký tự

### 3.2. Redeploy project
Sau khi thêm environment variables, redeploy project để áp dụng thay đổi.

## Bước 4: Test chức năng

### 4.1. Test local
1. Chạy `npm run dev`
2. Truy cập form liên hệ
3. Điền thông tin và gửi
4. Kiểm tra Gmail để xem có nhận được email không

### 4.2. Test production
1. Deploy lên Vercel
2. Test form trên domain production
3. Kiểm tra Gmail

## Bước 5: Tùy chỉnh email template (tùy chọn)

Bạn có thể chỉnh sửa template email trong file `app/api/send-email/route.ts`:

- Thay đổi subject line
- Tùy chỉnh HTML template
- Thêm logo công ty
- Thay đổi màu sắc và styling

## Troubleshooting (Khắc phục sự cố)

### Lỗi "Invalid login"
- Kiểm tra lại GMAIL_USER có đúng không
- Kiểm tra lại GMAIL_APP_PASSWORD có đúng 16 ký tự không
- Đảm bảo đã bật 2-Step Verification

### Lỗi "Less secure app access"
- Gmail không còn hỗ trợ "Less secure apps"
- Phải sử dụng App Password thay vì mật khẩu thường

### Email không gửi được
- Kiểm tra console log để xem lỗi cụ thể
- Đảm bảo environment variables đã được set đúng
- Kiểm tra network connection

### Email vào spam
- Thêm địa chỉ email của bạn vào whitelist
- Cấu hình SPF, DKIM records cho domain (nâng cao)

## Bảo mật

⚠️ **Quan trọng:**
- Không commit file `.env.local` lên Git
- Không chia sẻ App Password với ai
- Thường xuyên rotate App Password
- Sử dụng domain email chuyên nghiệp thay vì Gmail cá nhân cho production

## Nâng cao

### Sử dụng dịch vụ email chuyên nghiệp
Để có độ tin cậy cao hơn, bạn có thể sử dụng:
- **SendGrid**: Dịch vụ email marketing chuyên nghiệp
- **Mailgun**: API email mạnh mẽ
- **Amazon SES**: Dịch vụ email của AWS
- **Resend**: Dịch vụ email hiện đại cho developers

### Thêm tính năng
- Auto-reply email cho khách hàng
- Email notification cho team
- Lưu tin nhắn vào database
- Rate limiting để tránh spam
- Captcha verification
