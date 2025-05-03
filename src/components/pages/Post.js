import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../../redux/postsRedux';
import { dateToStr } from '../../utils/dateToStr';


function Post() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));

  if(!post) return <Navigate to="/" />;

  return (
    <>
      <h1 className="mb-4">
        {post.title}
        <div className="float-end">
          <Link to={`/post/edit/${post.id}`}>
          <Button variant="outline-info" className="me-2">Edit</Button>
          </Link>
          <Button variant="outline-danger" onClick={() => setShowModal(true)}>Delete</Button>
        </div>
      </h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Published:</strong> {dateToStr(post.publishedDate)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove the post. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(removePost(post.id));
              setShowModal(false);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Post;