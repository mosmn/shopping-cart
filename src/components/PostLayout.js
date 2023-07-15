import {Link, Outlet} from 'react-router-dom';

const PostLayout = () => {
    return (
        <div>
            <Link to="/profile/1">Post 1</Link>
            <br />
                <Link to="/profile/2">Post 2</Link>
                <br />
                <Link to="/profile/3">Post 3</Link>
                <br />
                <Link to="/profile/4">Post 4</Link>
                <br />
                <Link to="/profile/5">Post 5</Link>
                <Outlet />
        </div>
    )
}

export default PostLayout;
