import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;