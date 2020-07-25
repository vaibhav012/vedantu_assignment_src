import React from 'react';
import '../styles/main.css'
import '../styles/bio.css'

class Bio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bio_data: {}
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch("https://api.github.com/users/supreetsingh247", {
            "method": 'GET'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                bio_data: data,
                loading: false
            })
        })
    }
    render(){
        return(
            <div className="bio_holder">
            {
                this.state.loading
                ?
                "LOADING"
                :
                <div>
                    <img src={this.state.bio_data.avatar_url} className="bio_avatar"/>
                    <h2 className="bio_detail bio_name">{this.state.bio_data.name}</h2>
                    <p className="bio_detail bio_login">{this.state.bio_data.login}</p>
                    <p className="bio_detail bio_bio">{this.state.bio_data.bio}</p>
                    <button>Follow</button>
                    <br/>
                    <p className="bio_detail bio_followers">{this.state.bio_data.followers + " Followers " + this.state.bio_data.following + " Following " + this.state.bio_data.followers + "Star"}</p>
                    <p className="bio_detail bio_company">{this.state.bio_data.company}</p>
                    <p className="bio_detail bio_location">{this.state.bio_data.location}</p>
                    <p className="bio_detail bio_email">{"supreetsingh.247@gmail.com"}</p>
                </div>
            }
            </div>
        )
    }
}

export default Bio
