import React from 'react';

class Repo extends React.Component{
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
            <li>
                {this.props.repo.name}
                    {this.props.repo.description}
                        {this.props.repo.updated_at}
                        <button>Star</button>
            </li>
        )
    }
}

export default Repo
