import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Account.scss";

function Account() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div>
      <Link to="/">Back to your todo list</Link>
      <h2>Account</h2>
      <dl className="account-details">
        <dt className="account-details__headings">Username</dt>
        <dd className="account-details__data">{currentUser.username}</dd>
        <dt className="account-details__headings">Email</dt>
        <dd className="account-details__data">{currentUser.email}</dd>
        <dt className="account-details__headings">Creation date</dt>
        <dd className="account-details__data">
          {new Date(currentUser.createdAt).toLocaleDateString()}
        </dd>
      </dl>
    </div>
  );
}

export default Account;
