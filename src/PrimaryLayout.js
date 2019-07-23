import React from 'react';
import { Route} from 'react-router-dom'

const HomePage = () => <div>home page</div>
const UserPage = () => <div>user page</div>

const Primary = () => {
    return (
        <div>
            <header>this is a header</header>
            <main>
                <Route path='/p/home' component={HomePage}/>
                <Route path='user' component={UserPage}/>
            </main>
        </div>

    );
};

export default Primary
