import image from '../assets/news.jpg' 

const NewsItem = ({title, description, src, url}) =>{
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px", width:"320px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"The European Space Agency’s Mars Express has snapped the telltale traces of ‘spiders’ scattered across the southern polar region of Mars. Rather than being actual spiders, these small,"}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    )
}
export default NewsItem