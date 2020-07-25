import React from 'react';
import Repo from './repo.js';

class ListRepos extends React.Component{
    constructor(props){
        super(props);
        let repos = []
        this.state = {
            repos: repos,
            display_repos: repos,
            language: 'all',
            language_options: [],
            search: '',
            type: 'all',
            type_options: []
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        var languages = []
        var types = []
        fetch("https://api.github.com/users/supreetsingh247/repos",    {
                method:'GET',
            }
        )
        .then(response => response.json())
        .then(data => {
            data.forEach((item, i) => {
                let lang = item.language
                if(!languages.includes(lang) && lang !== null)
                    languages.push(lang)
                let type = item.type
                if(!types.includes(type) && type !== null)
                    types.push(type)
            });
            this.setState({
                repos: data,
                display_repos: data,
                language_options: languages,
                type_options: types,
                loading: false
            })
        })
    }

    onSearchChange(e){
        var state = {...this.state}
        state.search = e.target.value
        this.setState(state)
        this.applyFilters(state)
    }

    onLanguageChange(e){
        var state = {...this.state}
        state.language = e.target.value
        this.setState(state)
        this.applyFilters(state)
    }

    applyFilters(state){
        var repos = [...state.repos]
        var display_repos = []
        var search = state.search
        console.log(state)
        Object.keys(repos).forEach((item, i) => {
            console.log(repos[item].name)
            if((!search || repos[item].name.toLowerCase().includes(search.toLowerCase())) &&
                (state.language === 'all' || (repos[item].language && repos[item].language.toLowerCase() === state.language)) &&
                (state.type === 'all' || (repos[item].type && repos[item].type.toLowerCase() === state.type))){
                display_repos.push(repos[item])
            }
        });
        this.setState({display_repos: display_repos})
    }

    render(){
        return(
            <div>
                <div className="search_holder">
                    <input type="text" id="search" className="search" onChange={(e) => this.onSearchChange(e)} placeholder="Find a repository..."/>
                    <select name="type" id="select_type"onChange={(e) => this.onLanguageChange(e)}>
                      <option value="all">All</option>
                      {
                          this.state.language_options.map((lang) => (
                            <option value={lang.toLowerCase()}>{lang}</option>
                        ))
                      }
                    </select>
                    <select name="language" id="select_language">
                        <option value="all">All</option>
                    </select>
                </div>
                {
                    this.state.loading
                    ?
                    "LOADING"
                    :
                    this.state.display_repos.map((repo) => (
                        <Repo repo = {repo}/>
                    ))
                }
            </div>
        )
    }
}

export default ListRepos
