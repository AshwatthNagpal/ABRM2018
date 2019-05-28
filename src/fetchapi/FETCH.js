
import { AsyncStorage } from 'react-native'
class FetchApi {
    async getOtp(mob) {
        return await fetch('http://revanta.co.uk/ambrm/api/v1/app/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mob

            })
        }).then(Response => Response.json());

    }
    async verifyOtp(o, mob, dt) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/verifyOTP", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mob,
                otp: o,
                deviceToken: '',
                deviceType: dt
            })
        }
        ).then(d => d.json());
    }
    async ResendOtp(mob) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/resendOTP", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mob,
            })
        }
        ).then(d => d.json());
    }

    async LogOut(uid, token) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/logout", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                uid: uid
            })
        }
        ).then(d => d.json());
    }

    async getNotifications(uid, token, page) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/getNotifications", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                uid: uid,
                page: page
            })
        }
        ).then(d => d.json());
    }
    async getCategoryDataById(token, node_id) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/getCategoryDataById", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                node_id: node_id
            })
        }
        ).then(d => d.json());
    }
    async getQuestions(token) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/getQuestions", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,

            })
        }
        ).then(d => d.json());
    }
    async saveUserFeedback(token, id, questions) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/save_user_feedback", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                uid: id,
                question: questions

            })
        }
        ).then(d => d.json());
    }

    async saveUserQuestion(token, id, question) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/save_user_question", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                uid: id,
                question: question

            })
        }
        ).then(d => d.json());
    }

    async GetConferenceAgenda(token) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/conferenceAgenda", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token
            })
        }
        ).then(d => d.json());
    }

    async getNotificationById(uid, token, id) {
        return await fetch("http://revanta.co.uk/ambrm/api/v1/app/getNotificationById", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                uid: uid,
                notification_id: id
            })
        }
        ).then(d => d.json());
    }
}
export default MyFetch = new FetchApi();


