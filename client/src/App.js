import React from 'react';
import bell from './bell.svg';
import './App.css';
import {allowNotification} from "./utils/webpush";

function App() {
    const notifyUser = () => {
        return allowNotification();
    }

    return (
        <div className="App">
            <header className="App-header">
                <button className={"border-w bg-t"} onClick={notifyUser}>
                    <img src={bell} className="App-logo" alt="bell"/>
                </button>
                <div>
                    <p>
                        Show <strong>notifications</strong>.
                    </p>
                </div>
            </header>
            <div>
                <h3>This web app has been made with the following references:</h3>
                <ul>
                    <li>
                        <a
                            className="App-link"
                            href="https://whatwebcando.today/push-notifications.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            What pwa can do today : Web push feature
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://whatpwacando.today/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            What web can do today : Web push feature
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://developer.mozilla.org/fr/docs/Web/API/notification"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web API Notification
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web API ServiceWorkerRegistration
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://developer.mozilla.org/en-US/docs/Web/API/PushManager"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web API PushManager
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://www.npmjs.com/package/web-push"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web push package
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
