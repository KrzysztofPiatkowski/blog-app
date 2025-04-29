import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Home() {

  const posts = useSelector(getAllPosts);

  return (
    <>
    <div className="d-flex justify-content-end mb-4">
      <Link to="/post/add">
        <Button variant="outline-primary">Add post</Button>
      </Link>
    </div>
      <h1>All posts</h1>
      <Row>
        {posts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Published:</strong> {post.publishedDate}</p>
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
  )
}

export default Home;