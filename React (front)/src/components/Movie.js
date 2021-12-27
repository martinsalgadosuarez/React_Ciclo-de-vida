import React, {Component} from "react";
import MovieList from "./MovieList";

class Movie extends Component {
	constructor(props){
        super(props)
        this.state = {
            moviesList: []
        }
    }

    componentDidMount(){
        fetch('/api/movies')
        .then(res => res.json())
        .then(movie => {
            this.setState({moviesList: movie.data})
        })
        .catch(err => console.log(err));
    }
	render(){
		return (
		  <React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 ml-4 text-gray-800">All the movies in the Database</h1>
	  
			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
			  <div className="card-body">
				<div className="table-responsive">
				  <table
					className="table table-bordered"
					id="dataTable"
					width="100%"
					cellspacing="0"
				  >
					<thead>
					  <tr>
						<th>Id</th>
						<th>Titulo</th>
						<th>Calificación</th>
						<th>Premios</th>
						<th>Duración</th>
					  </tr>
					</thead>
					<tfoot>
					  <tr>
						<th>Id</th>
						<th>Titulo</th>
						<th>Calificación</th>
						<th>Premios</th>
						<th>Duración</th>
					  </tr>
					</tfoot>
					<tbody>
							{
								this.state.moviesList.map((movie, index) => {
									return <MovieList {...movie} key={index}/>
								})
							}
					</tbody>
				  </table>
				</div>
			  </div>
			</div>
		  </React.Fragment>
		);

	}
}
export default Movie;
