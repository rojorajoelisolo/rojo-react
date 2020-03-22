import React from "react";

import GroupRockDetail from "./GroupRockDetail/GroupRockDetail";

import metallicas from "../data/mettalica";

async function fetchData(url) {
    fetch(url)
    .then(reponseEnJson => {
        return reponseEnJson.json();
    })
    .then(reponseJavaScript => {
        return reponseJavaScript;
    })
}

const momo = <GroupRockDetail metallica={metallicas} />;

class Accueil extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {

        const url = 'https://wasabi.i3s.unice.fr/api/v1/artist_all/name/' + this.input.current.value;
        const item = fetchData(url);
        
        if (item != null) {
           // momo = <GroupRockDetail metallica={item} />;
        }
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" ref={this.input} />
                </label>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" value="Submit">
                        Search <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </form>
            {momo}
            </div>
        );
    }
    
}

export default Accueil;