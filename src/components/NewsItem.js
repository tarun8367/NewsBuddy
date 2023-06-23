import React from 'react'

const NewsItem  = (props) =>  {
    
  
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://cdn.mos.cms.futurecdn.net/ay7MhRTbwoYRnuS578wtiG-1200-80.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge bg-danger">{source}</span></h5>
               
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">Published by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
    )
  }

  export default NewsItem
