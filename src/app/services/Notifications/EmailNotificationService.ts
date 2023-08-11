import "form-data";
import "mailgun.js"
import { INotification } from "@/app/interfaces/models/Notification";

const sendEmailNotification = (
    notification: INotification,
    recipient: String,
) => {
    const formData = require('form-data');
    const Mailgun = require('mailgun.js');
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: 'da40dab6f2ca41d75852a774ecf589d2-28e9457d-ba70ae0c',
        key: process.env['MAILGUN_API_KEY'],
    });

    console.log(notification.emailSubject);
    
    var subject = "A notification from WerkerBee"
    if (notification.emailSubject) {subject = notification.emailSubject}
    var link = "https://werkerbee.com"
    if (notification.link) {link = notification.link}

    console.log(subject);
    console.log(link);
    console.log(recipient);

    mg.messages
	.create('sandbox95f7c876b6424320a91ab4a4a42b422b.mailgun.org', {
		from: "Mailgun Sandbox <postmaster@sandbox95f7c876b6424320a91ab4a4a42b422b.mailgun.org>",
		to: [recipient],
		subject: subject,
		text: (notification.message + "\n" + link),
        html: ("<html><body>" + notification.message + "<br>" + `<a href=${link}>${link}</a></body></html>`)
	})
	.then((msg: any) => console.log(msg)) // logs response data
	.catch((err: any) => console.log(err));
}

export default sendEmailNotification