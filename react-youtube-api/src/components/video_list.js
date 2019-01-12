import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //const videos = props.videos;
    
    const videoItems = props.videos.map((videoToItem) => {
        return(
            <VideoListItem
             onVideoSelect={props.onVideoSelect}
             key={videoToItem.etag} 
             video={videoToItem}/> 
        );
    })

    //array.map((number) => { return(number*2); })  -------- [1, 2, 3] 에서 [2, 4, 6]

    return(
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;