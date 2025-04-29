import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import PostForm from './PostForm';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUpdatePost = postData => {
    dispatch(editPost({ ...postData, id }));
    navigate('/');
  };

  if (!post) return <p>Post not found!</p>;

  return (
    <PostForm
      action={handleUpdatePost}
      actionText="Update post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;
