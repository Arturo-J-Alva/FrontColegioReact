import React from 'react'
import ReactPlayer from 'react-player'

const ReprodVideo1 = ({url}) => {
    //console.log(video)
    return (
        <div>
            <ReactPlayer
                url={url}
                className='react-player my-4'
                playing={false}
                width='100%'
                height='25rem'
            />
        </div>
    )
}

export default ReprodVideo1
