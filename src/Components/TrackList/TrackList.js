import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

//review that map section again STEP 34!!!

class TrackList extends React.Component {
  render(){
    return (
      	<div className="TrackList">
	    	{
	    		this.props.tracks.map(track=>{
	    			return <Track track={track} 
	    				key = {track.id}
	    				onAdd={this.props.onAdd}
	    				onRemove={this.props.onRemove}
	    				isRemoval={this.props.isRemoval}/>
	    		})
	    	}
		</div>
      )
  }
}

export default TrackList;