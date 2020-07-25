import React from 'react';
import '../styles/repo.css'

class Repo extends React.Component{
    constructor(props){
        super(props);
        this.state = {bio_data: {}}
    }

    componentDidMount(){
    }

    render(){
        return(
            <li className="repo_card">
                <h3>{this.props.repo.name}</h3>
                <p>{this.props.repo.description}</p>
                <p>{this.props.repo.updated_at}</p>
            </li>
        )
    }
}

export default Repo
