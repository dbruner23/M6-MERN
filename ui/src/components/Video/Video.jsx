const src = "https://www.youtube.com/embed/XievqLu9yP0"

const Video = () => {
    return ( 
        <iframe 
          width="100%"
          height="100%"
          src={src}
          title="Youtube Player"
          frameBorder="0"
          allowFullScreen
        /> 
    )

}

export default Video; 