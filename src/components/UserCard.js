import React from 'react';
import { Link } from 'react-router-dom';
import { randomDate } from '../utils/randomDate';

const UserCard = ({ user, i }) => {
  return (
    <div className="column is-half">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Link to={`/user/${user.id}`}>
              <img
                src={`https://api.adorable.io/avatars/285/${user.id}.png`}
                alt="Placeholder"
              />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.name}</p>
              <p className="subtitle is-6">@{user.name}</p>
            </div>
          </div>

          <div className="content">
            {user.company.catchPhrase}
            <br />
            <time datetTime="2016-1-1">{randomDate()}</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
