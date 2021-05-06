import React, { Component } from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

class PhotoContainer extends Component {
	render() {
		return (
			<div className="photo-container">
		        <h2>Results</h2>
		        <ul>
		          <Photo photos={this.props.photos}/>
		          
		          <NoResults />
		        </ul>
		    </div>
		);
	}
}

export default PhotoContainer;