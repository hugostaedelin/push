import axios from "axios";

function checkFeatures() {
    return ('serviceWorker' in navigator) && ('PushManager' in window) && ('Notification' in window)
}

async function allowNotification() {
    if (checkFeatures()) {
        await Notification.requestPermission(permission => {
            if (permission === 'granted') {
                // Using the registration object, we can call the `showNotification` method to push notification
                navigator.serviceWorker.getRegistration().then(async registration => {
                    console.log(registration)
                    let subscription = await registration.pushManager.getSubscription()
                    if (!subscription) {
                        subscription = await registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: await getPublicKey()
                        });
                        console.log(subscription);
                    }
                    await saveSubscription(subscription)
                })
            }
        })
    }
}

async function saveSubscription(subscription) {
    await axios.post(`http://localhost:3000/subscribe`, {
        subscription: subscription.toJSON(),
        options: {}
    })
}

async function getPublicKey() {
    const response = await axios.get(`http://localhost:3000/webpush/key`);
    return response.data.key;
}

export {allowNotification};
