import { Outlet } from 'react-router-dom'

function About () {

    return(
        <div>
            <h2 className="subheader">What is Letterboxd In?</h2>
                <p>In 2011, now social media phenomonon <em>Letterboxd</em> launched, advertising itself as "the GoodReads for film". Today, the movie rating app boasts 10 million users and is the go-to online destination for discourse on films both new and old. With an emphasis on ratings and reviews, Letterboxd asks you to put your opions out for all to see, and with all social media there is an inevitable performative ask.</p>
                <br/>
                <p>Here at Letterbox'd In, you can be free to keep track of your wishlist and movie diary without feeling the need to write reviews your friends will find funny or without feeling embarrassed by what you watch. It's just for you!</p>
            <Outlet />
        </div>
    )
}

export default About