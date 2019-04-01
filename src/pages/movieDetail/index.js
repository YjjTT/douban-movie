import React from 'react'

class MovieDetail extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>MovieDetail</div>
        )
    }
}

export default MovieDetail