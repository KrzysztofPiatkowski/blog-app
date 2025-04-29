import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));

  const [title, setTitle] = useState(post?.title || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [publishedDate, setPublishedDate] = useState(post?.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(post?.shortDescription || '');
  const [content, setContent] = useState(post?.content || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Na razie tylko przekierowanie, zapis danych zrobimy za chwilę
    navigate('/');
  };

  if (!post) return <p>Post not found!</p>;

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

      <Button variant="primary" type="submit">Update post</Button>
    </Form>
  );
};

export default EditPostForm;
