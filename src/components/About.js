import React from "react";
import './styles/about.css';
import './styles/mediaAbout.css';

export default class About extends React.Component {
    render(){
        return <div className='abbout'>
            <div className='button abou'>
                <h2>About Fesshr</h2>
                <br />
                <p>The Fesshr App creates a platform where users can make searches for 
                    pictures and books from Unsplash API and GoogleBooks API. The response 
                    from the Unsplash API performs well <b>But please note, it only gives 10 
                    pictures per search,</b> though this can be extended but since the App is 
                    still at its infant stage, its might not really be of much importance for now.
                    However, the response from the Google Api does not do well in all, you might
                    make some searches in the books section and experience some sort of failure,
                    this is as a result of the inconsistency of the results obtained from google Api.
                    Thank You, stay Blessed.
                </p>
                <br />
                <br />
                <br />
                <h2>The Developer</h2>
                <br />

                <p>Hi, I am Akinola Victor, i made this app for the sake of learning ReactJs and 
                   getting better at it, if you are experiencing any bug/problem aside from the 
                   ones mentioned above, and you think it should be fixed, you can reach me through
                   my mail <b>akinolavictor26@gmail.com</b>. You can as well give your comments
                   in the comment section, Thank you.
                </p>
            </div>
        </div>
    }
}
