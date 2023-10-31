// import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AddComment =()=> {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }

const [comment, setComment] = useState(
   {
    comment: '',
    rate: 1,
    elementId: Comment.asin,
  } 
)



  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE2OTg3NTgzODQsImV4cCI6MTY5OTk2Nzk4NH0.f8LIDU9o81DRMqOFr_v2DD-eoUecYRSTe-MR6E_jCFU",
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        setComment({
          
            comment: '',
            rate: 1,
            elementId: Comment.asin,
          
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }


 
//  componentDidUpdate(prevProps)  {
//     if (prevProps.asin !== props.asin) {
//       setState({
//         comment: {
//           ...comment,
//           elementId: props.asin,
//         },
//       })
//     }
//   }
useEffect(()=>{},[])
 
    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                setComment({
                 
                    ...comment,
                    comment: e.target.value,
                  
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={(e) =>
                setComment({
                  comment: {
                    ...comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  }


export default AddComment
