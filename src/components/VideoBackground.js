import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const finalTrailerVideo = useSelector(store => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', OPTIONS);
    const json = await data.json();

    const filteredData = json.results.filter((video) => video.type === "Trailer" && video.site === "Youtube");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, [])

  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+finalTrailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground