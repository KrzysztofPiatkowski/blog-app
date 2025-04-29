import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
  <Col md={6}>
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

  <Col md={6}>
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
  <Col md={6}>
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
        placeholder="Leave a short description"
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
        placeholder="Write the content here"
      />
    </Form.Group>
  </Col>
</Row>

      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
