import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
       <Switch>
            <PrivateRoute path="/admin/products">
              <h1>Products Crud</h1>
            </PrivateRoute >
            <PrivateRoute path="/admin/categories">
              <h1>Category Crud</h1>
            </PrivateRoute>
            <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
              <Users/>
            </PrivateRoute>
       </Switch>
      </div>
    </div>
  );
};

export default Admin;
 