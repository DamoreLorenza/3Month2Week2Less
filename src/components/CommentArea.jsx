
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect } from 'react'

const CommentArea =(props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments, setComments]= useState([])
  const [isLoading, setIsLoading]=useState(false)
  const [isError, setIsError]=useState(false)

 

  useEffect(() => { 
    const fetchComments = async () => 
    { setIsLoading(true) 
      try { let response = await fetch( 'https://striveschool-api.herokuapp.com/api/comments/' + props.asin, 
      { headers: 
        { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE2OTg3NTgzODQsImV4cCI6MTY5OTk2Nzk4NH0.f8LIDU9o81DRMqOFr_v2DD-eoUecYRSTe-MR6E_jCFU', }, } )


  if (response.ok) { let comments = await response.json() 
    setComments(comments) 
  setIsLoading(false)
   setIsError(false) } 
   else { 
    setIsLoading(false)
     setIsError(true) } } 
     catch (error)
      { console.log(error) 
        setIsLoading(false) 
        setIsError(true) } }
  
  fetchComments() }, [props.asin])


    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
}

 
 

  

export default CommentArea
