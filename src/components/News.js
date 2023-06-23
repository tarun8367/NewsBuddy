import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);
  
  // constructor(){
  //   super();
    
  //   this.state = {
  //     articles : [],
  //     loading : true,
  //     page : 1,
  //     totalResults : 0
  //   };
   
  // }
const capitalize = (str) => {
  return str.substr(0,1).toUpperCase() + str.substr(1);
}
const updateNews = async() =>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading : true});
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    // this.setState({
    //   articles : parsedData.articles,
    //   loading : false,
    //   totalResults : parsedData.totalResults
    // })
    props.setProgress(100);
  }

  useEffect(() => {
    // eslint-disable-next-line
    updateNews();
  },[]);


// const componentDidMount = async () => {
//     this.updateNews();
//   }

  const fetchMoreData = async () => {
    // this.setState({page :this.state.page+1});
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({
    //   articles : this.state.articles.concat(parsedData.articles),
    //   totalResults : parsedData.totalResults
    // })

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // handlePrevClick = async () =>{
    
  //   this.setState({page : this.state.page-1})
  //   this.updateNews();
  // }
    
  // handleNextClick = async () => {
  //   this.setState({page : this.state.page+1})
  //   this.updateNews();
  //   }
 
      return (
          <>
        <h1 className='text-center'>NewsBuddy - Top {capitalize(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        style={{overflow : "hidden"}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

        <div className="container" >
        <div className="row">
          { articles.map((element)=>{
            return <div className="col-md-4" key={element.url}><NewsItem  title = {element.title? element.title: ""} description= {element.description? element.description :""} imageUrl= {element.urlToImage} newsUrl = {element.url} author = {element.author} date={element.publishedAt} source={element.source.name}/> </div>

          })}
            
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled ={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>  Previous </button>
        <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
        </div> */}
      </>
    )
  }


News.defaultProps = {
  country : 'in',
  pageSize : 6,
  category : "general"
}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

export default News