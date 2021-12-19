import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then (response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Network Error')
        })
        //this use for when come a error that show a Error message
    }, [])
    return (
        <div>
            <div className="row">
                <h2>{props.title}</h2>
                <div className="posters">
                    {movies.map((obj)=>
                    
                    <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} />
                     ) }
                
                
                </div>
            </div>
        </div>
    )
}

export default RowPost
 
