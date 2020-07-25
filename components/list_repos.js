import React from 'react';
import Repo from './repo.js';

class ListRepos extends React.Component{
    constructor(props){
        super(props);
        this.state = {repos: []}
    }

    componentDidMount(){
        fetch("https://api.github.com/users/supreetsingh247/repos")
        .then((res.json()) => {
            this.setState({
                repos: res
            })
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.repos.map((repo) => (
                        <Repo repo = {repo}/>
                    ))
                }
            </div>
        )
    }
}

export default ListRepos
