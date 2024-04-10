import { Outlet } from 'react-router-dom'

function About () {

    return(
        <div>
            <h2>About:
                <p>My Name is Will</p>
            </h2>
            <Outlet />
        </div>
    )
}

export default About