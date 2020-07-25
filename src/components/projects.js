import React from 'react';
import ListRepos from './list_repos.js';
import '../styles/projects.css'

class Bio extends React.Component{
    constructor(props){
        super(props);
        this.state = {current_tab: "repositories"}
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="projects_holder">
                <div className="projects_nav">
                    <div flagCheck={this.state.current_tab === 'overview' ? 1 : 0}>Overview</div>
                    <div flagCheck={this.state.current_tab === 'repositories' ? 1 : 0}>Repositories</div>
                    <div flagCheck={this.state.current_tab === 'projects' ? 1 : 0}>Projects</div>
                </div>
                <div>
                    <ListRepos/>
                </div>
            </div>
        )
    }
}

export default Bio
