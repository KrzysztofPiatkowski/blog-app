import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { dateToStr } from '../../utils/dateToStr';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const posts = useSelector(getAllPosts);
  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <h1>Posts in category: {categoryName}</h1>
      <Row>
        {filteredPosts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Published:</strong> {dateToStr(post.publishedDate)}</p>
                <p><strong>Category:</strong> {post.category}</p>
                <p>{post.shortDescription}</p>
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryPage;
