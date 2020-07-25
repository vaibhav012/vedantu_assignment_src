import React from 'react';
import Bio from './bio.js';
import Projects from './projects.js';
import '../styles/main.css'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {bio_data: {}}
    }

    componentDidMount(){
        fetch("https://api.github.com/users/supreetsingh247")
        .then((res) => {
            res = res.json()
            this.setState({
                bio_data: res
            })
        })
    }
    render(){
        return(
            <div className="main_holder">
                <Bio/>
                <Projects/>
            </div>
        )
    }
}

export default Main
