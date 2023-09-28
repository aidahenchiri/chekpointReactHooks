import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({Add}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [rate,setRate]=useState(0)
const [posterUrl,setPosterUrl]=useState("")
const [trailer,setTrailer]=useState("")

const handelTitle=(e)=>{setTitle(e.target.value)}
const handelDesc=(e)=>{ setDescription(e.target.value)}
const handelRate=(e)=>{setRate(e.target.value)}
const handelPoster=(e)=>{  setPosterUrl(e.target.value)}
const handelTeailer=(e)=>{ setTrailer(e.target.value)}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
add movie

      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>title</Form.Label>
              <Form.Control
                type="texte"
                name='title'
                onChange={(e)=> handelTitle(e)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>rate</Form.Label>
              <Form.Control
                type="texte"
                name='rate'
                onChange={(e)=> handelRate(e)}
                autoFocus
              />            
              </Form.Group>

           <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}                
              onChange={(e)=> handelDesc(e)}
                name='description'
             />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>posterUrl</Form.Label>
              <Form.Control
                 type="texte"
                 onChange={(e)=> handelPoster(e)}
                name='posterUrl'
             />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>trailer</Form.Label>
              <Form.Control
                type="texte"
                onChange={(e)=> handelTeailer(e)}
                name='trailer'
             />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>(Add({id:Math.random(),title:title,description:description,rate:rate,posterUrl:posterUrl,trailer:trailer}),{handleClose} )}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;