import { Suspense } from 'react';
import { Sidebar } from './containers';
import Router from './routers/Router';
import { Loading } from './components';

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <div className='App bg-ground grid grid-cols-2 relative overflow-hidden'>
                <Sidebar />
                <div>
                    <Router />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
