import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || null);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [showCalendar, setShowCalendar] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');

  const categories = useSelector(getAllCategories);


  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);

    if(content && publishedDate && category) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };  

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row className="mb-3">
      <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              {errors.title.type === "required"
                ? "This field is required"
                : "Title is too short (min is 3 characters)"}
            </small>
          )}
        </Form.Group>
      </Col>

  <Col md={6}>
    <Form.Group>
      <Form.Label>Author</Form.Label>
      <Form.Control
        {...register("author", { required: true, minLength: 3 })}
        value={author}
        onChange={e => setAuthor(e.target.value)}
        type="text"
        placeholder="Enter author"
      />
      {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              {errors.author.type === "required"
                ? "This field is required"
                : "Author name is too short (min is 3 characters)"}
            </small>
          )}
    </Form.Group>
  </Col>
</Row>

<Row className="mb-3">
  <Col md={6}>
  <Form.Group>
  <Form.Label>Published</Form.Label>
  <Form.Control
    type="text"
    value={publishedDate ? format(publishedDate, 'MM/dd/yyyy') : ''}
    readOnly
    onClick={() => setShowCalendar(!showCalendar)}
    placeholder="Pick a date"
  />
  {dateError && (
    <small className="d-block form-text text-danger mt-2">
      Date can't be empty
    </small>
  )}
  {showCalendar && (
    <div style={{ zIndex: 10, position: 'absolute', background: 'white', border: '1px solid #ccc' }}>
      <DayPicker
        mode="single"
        selected={publishedDate}
        onSelect={date => {
          setPublishedDate(date);
          setShowCalendar(false);
        }}
      />
    </div>
  )}
</Form.Group>
  </Col>
</Row>

<Row className='mb-3'>
<Col md={6}>
<Form.Group className="mb-3">
  <Form.Label>Category</Form.Label>
  <Form.Select
    {...register('category', { required: true })}
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="">Select category...</option>
    {categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </Form.Select>
  {errors.category && (
    <small className="d-block form-text text-danger mt-2">
      You must choose a category
    </small>
  )}
</Form.Group>
</Col>
</Row>

<Row className="mb-3">
  <Col md={9}>
    <Form.Group>
      <Form.Label>Short description</Form.Label>
      <Form.Control
        {...register("shortDescription", { required: true, minLength: 20 })}
        as="textarea"
        rows={3}
        value={shortDescription}
        onChange={e => setShortDescription(e.target.value)}
        placeholder="Leave a short description"
      />
      {errors.shortDescription && (
            <small className="d-block form-text text-danger mt-2">
              {errors.shortDescription.type === "required"
                ? "This field is required"
                : "Description is too short (min is 20 characters)"}
            </small>
          )}
    </Form.Group>
  </Col>
</Row>

<Row className="mb-4">
  <Col md={9}>
  <Form.Group>
    <Form.Label>Main content</Form.Label>
    <div data-color-mode="light">
      <MDEditor value={content} onChange={setContent} />
    </div>
        {contentError && (
      <small className="d-block form-text text-danger mt-2">
        Content can't be empty
      </small>
    )}
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
  publishedDate: PropTypes.instanceOf(Date),
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
