import React from 'react';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {bio_data: {}}
    }

    componentDidMount(){
        fetch("https://api.github.com/users/supreetsingh247")
        .then((res.json()) => {
            this.setState({
                bio_data: res
            })
        })
    }
    render(){
        return(
            <div>
                <img src={this.state.bio_data.avatar_url} className="bio_avatar"/>
                <h2 className="bio_name">{this.state.bio_data.name}</h2>
                <h2 className="bio_name">{this.state.bio_data.login}</h2>
                <h2 className="bio_name">{this.state.bio_data.bio}</h2>
                <button>Follow</button>
                <h2 className="bio_name">{this.state.bio_data.followers + "Followers" + this.state.bio_data.followers + "Following" + this.state.bio_data.followers + "Star"}</h2>
                <h2 className="bio_name">{this.state.bio_data.company}</h2>
                <h2 className="bio_name">{this.state.bio_data.location}</h2>
                <h2 className="bio_name">{"supreetsingh.247@gmail.com"}</h2>
            </div>
        )
    }
}

export default Main
