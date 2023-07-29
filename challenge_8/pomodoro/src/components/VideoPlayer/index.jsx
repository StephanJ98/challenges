/* eslint-disable react/prop-types */
import { } from 'react'

const VideoPlayer = ({ className }) => {
    return (
        <div className={className}>
            <iframe
                src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0"
                title="YouTube video player"
                style={{
                    border: 'none',
                    borderRadius: '0.2rem'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer