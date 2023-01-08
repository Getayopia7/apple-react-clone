import React,{useEffect, useState} from 'react'
import './YoutubCss.css'
 function Youtubeapi() {
    let [youtubevd,setYoutubevd]=useState([])
    useEffect(()=>{
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6')
        .then(response=>response.json())
        .then((data)=>{
            let youtubedata=data.items
            console.log(youtubedata)
            setYoutubevd(youtubedata)
        })
    },[]);
    console.log(youtubevd);

  return (
    <>
    <section className="fourth-heghlight-wrapper">
    <div className="container-fluid">
        <div className="row">
         <div className="col-md-12">
            Latest video
         </div>

         {youtubevd?.map((item,index) => {
            let vidId=item.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            console.log(vidLink);
            let wrapper= (
                <div className="col-sm-12 col-md-4" key={index}>
                    <a href={vidLink} target="_blank">
                        <img src={item.snippet.thumbnails.high.url} />
                      </a>
                      <div>
                      <a href={vidLink} target="_blank">
                          {item.snippet.title}
                        </a>
                      </div>
                      <div>
                      {item.snippet.description}
                      </div>
                      <div>
                      {item.snippet.publishedAt}
                      </div>
                    
                </div>
                    )
                    return wrapper;
         })
         }
         
    
     </div>
 </div>

</section>
    
    </>
  )
}
export default Youtubeapi