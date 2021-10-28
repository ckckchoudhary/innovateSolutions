import React, { Component } from 'react';

interface NewsData {
    completed: boolean
    id: number
    title: string
    userId: string
}

interface IDisplayNewsState {
    newsList: Array<NewsData>
}

export class DisplayNews extends Component<any, IDisplayNewsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            newsList: []
        }
    }


    componentDidMount() {
        // the above api was returning 404 so I used this dummy api
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(newsList => {
                console.log(newsList);
                this.setState({ newsList })
            }).catch(console.error)
    }
    render() {
        const { newsList } = this.state;
        console.log(newsList);
        return (
            <div>
                <p>Today's News</p>
                {
                    newsList.map(({ title, id }) => {
                        return (<p key={id}>
                            <b>News {id}</b>
                            <div>{title}</div>
                        </p>)
                    })
                }
            </div>
        );
    }
}

