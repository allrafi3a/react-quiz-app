import { Route, redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ element: Element, ...rest }) {
    const { currentUser } = useAuth();



    return currentUser ? (
        <Route {...rest}>{(props) => <Element {...props} />}</Route>
    ) : (
        redirect("/login")
    );
}
