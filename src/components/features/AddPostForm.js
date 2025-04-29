import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../redux/postsRedux';
import PostForm from './PostForm';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = postData => {
    dispatch(addPost({ id: uuidv4(), ...postData }));
    navigate('/');
  };

  return (
    <PostForm
      action={handleAddPost}
      actionText="Add post"
    />
  );
};

export default AddPostForm;
