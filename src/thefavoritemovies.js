import React, {component} from 'react'
import './App.js';
class thefavoritemovies extends component{
 	render() {
		return(
 	 <ol> 		
    	    {this.props.profiles.map(profile => (
          <li key={profile.id}>
            {profile.userID}
            {profile.favoriteMovieID}
          </li>
        ))}
      </ol>
  )}


}
export default thefavoritemovies;
