import Sidebar from './containers/Sidebar';
import Router from './routers/Router';

function App() {
    return (
        <div className='App bg-ground grid grid-cols-2 relative overflow-hidden'>
            <Sidebar />
            <div>
                <Router />
            </div>
        </div>
    );
}

export default App;
