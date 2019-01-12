import _ from 'lodash';
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

//lodash 함수 실행시간 조절

const API_KEY = 'AIzaSyDgTYRPfe6AcvhvREygWRQqjBHSWeS6cjw'; //youtube API

class App extends Component{

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            // videos : videos   //key와 value값이 같을 때 하나로 축약 가능 es6
        });
    }

    constructor(props){
        super(props);

        this.state = { videos : [], selectedVideo : null };

        this.videoSearch('Chopin');
    }    

    // const videos = await YTSearch({ key: API_KEY, term: 'chopin' });
    // this.setState({ videos });

    // componentDidMount(){}로 NULL핸들링 가능. constructor > render() > mount() 실행 후 YTSearch 요청&콜백 동시 실행

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    } 


}

ReactDOM.render(<App />, document.querySelector('.container'));