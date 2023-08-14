import { INotification } from "@/app/interfaces/models/Notification";

const sendEmailNotification = (
    notification: INotification,
    recipient: String,
) => {
    var postmark = require('postmark');
    var client = new postmark.ServerClient(process.env['POSTMARK_API_KEY'])
    
    var subject = "A notification from WerkerBee"
    if (notification.emailSubject) {subject = notification.emailSubject}
    var link = "https://werkerbee.com"
    if (notification.link) {link = notification.link}

    client.sendEmail({
		"From": "notifications@werkerbee.com",
		"To": recipient,
		"Subject": subject,
		"TextBody": (notification.message + "\n" + link),
        "HtmlBody": ("<html><body>" + notification.message + "<br>" + `<a href=${link}>${link}</a></body></html>`)
	}, (err: any, res: any) => {
        if (err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })
}

export default sendEmailNotification