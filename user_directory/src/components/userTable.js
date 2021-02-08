import React from "react";
import API from '../utils/api.js';
import SearchBar from './searchBar';

class Table extends React.Component {
    state = {
        search: '',
        results: [],
        sortList: ''
    };
    handleInputChange = (e) => {
        if (e.target.name === "search") {
            const searchInput = e.target.value.toLowerCase();
            this.setState({
                search: searchInput,
            });
        }
    };
    componentDidMount() {
        API.employeeAPI().then((res) => {
            console.log(res);
            this.setState({ resluts: res.data.results });
            console.log(this.state.results);
        })
            .catch((err) => console.log(err));
    }


}