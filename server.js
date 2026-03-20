import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Email Transporter Configuration (Using same settings as your PHP script)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
        user: 'radiancewebenquiry@gmail.com',
        pass: 'dyikvighetnksywt'
    }
});



app.post('/send-email', (req, res) => {
    const { fullName, email, mobile, project } = req.body;

    const mailOptions = {
        from: '"Radiance Riverwoods Website" <radiancewebenquiry@gmail.com>',
        to: 'radiancewebenquiry@gmail.com',
        subject: `New Lead Enquiry - ${fullName}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                    .email-container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
                    .header { background-color: #1a1a1a; padding: 30px; text-align: center; border-bottom: 4px solid #9b7a44; }
                    .header h1 { color: #9b7a44; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; }
                    .content { padding: 40px; color: #333333; }
                    .content h2 { color: #1a1a1a; font-size: 20px; margin-bottom: 20px; border-bottom: 1px solid #eeeeee; pb: 10px; }
                    .lead-details { background-color: #fcfaf7; border-left: 4px solid #9b7a44; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0; }
                    .detail-item { margin-bottom: 15px; display: flex; align-items: baseline; }
                    .label { font-weight: bold; color: #9b7a44; min-width: 100px; text-transform: uppercase; font-size: 12px; }
                    .value { color: #333333; font-size: 15px; }
                    .footer { background-color: #f8f8f8; padding: 20px; text-align: center; color: #888888; font-size: 12px; border-top: 1px solid #eeeeee; }
                    .brand-name { color: #9b7a44; font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        <h1>RADIANCE RIVERWOODS</h1>
                    </div>
                    <div class="content">
                        <h2>New Lead Notification</h2>
                        <p>A new enquiry has been received from the website. Here are the details:</p>
                        
                        <div class="lead-details">
                            <div class="detail-item">
                                <span class="label">Project:</span>
                                <span class="value">${project}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Full Name:</span>
                                <span class="value">${fullName}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Phone:</span>
                                <span class="value">${mobile}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Email:</span>
                                <span class="value">${email}</span>
                            </div>
                        </div>
                        
                        <p style="margin-top: 30px;">Please follow up with the lead at the earliest convenience.</p>
                    </div>
                    <div class="footer">
                        <p>This is an automated notification from <span class="brand-name">Radiance Riverwoods</span> Website.</p>
                        <p>&copy; ${new Date().getFullYear()} Radiance Realty. All Rights Reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email sending error:', error);
            return res.status(500).send({ success: false, error: error.message });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send({ success: true, message: 'Email sent successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

