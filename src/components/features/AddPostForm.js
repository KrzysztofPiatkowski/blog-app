import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: uuidv4(),
      title,
      author,
      publishedDate,
      shortDescription,
      content,
    };
  
    dispatch(addPost(newPost));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Col md={7}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </Form.Group>
      </Col>

      <Col md={7}>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Enter author"
          />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col md={7}>
        <Form.Group>
          <Form.Label>Published</Form.Label>
          <Form.Control
            type="text"
            value={publishedDate}
            onChange={e => setPublishedDate(e.target.value)}
            placeholder="Enter date"
          />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col md={9}>
        <Form.Group>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            placeholder="Leave a comment here"
          />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-4">
      <Col md={9}>
        <Form.Group>
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Leave a comment here"
          />
        </Form.Group>
      </Col>
    </Row>

    <Button variant="primary" type="submit">Add post</Button>
  </Form>
  );
};

export default AddPostForm;
