import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
    <ChatEngine
    height="100vh"
    projectID={"9eec19fc-0a68-4117-b36c-1cb3ccf76cb6"}
    userName={localStorage.getItem("nesreen darrat")}
    userSecret={localStorage.getItem("Nesreen1")}
    renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

    
    )
}

export default App;