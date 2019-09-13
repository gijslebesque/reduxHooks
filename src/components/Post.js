import React, { useState } from 'react';
import { Service } from '../utils/Service';
import { deletePost } from '../actions';

import { connect } from 'react-redux';

const Post = ({ post, deletePost }) => {
  const [comments, setComments] = useState([]);
  const service = new Service();
  const deletePostHandler = id => {
    deletePost(id);
  };

  const toggleComments = async id => {
    if (comments.length === 0) {
      try {
        debugger;
        const getComments = await service.getComments(id);
        setComments(getComments.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      setComments(null);
    }
  };
  return (
    <div className="column is-one-third">
      <article className="message is-dark">
        <div className="message-header">
          <p>{post.title}</p>
          <button
            className="delete"
            aria-label="delete"
            onClick={e => deletePostHandler(post.id)}
          ></button>
        </div>
        <div className="message-body">
          {post.body}

          <p className="expand" onClick={() => toggleComments(post.id)}>
            Show comments
            <ul>
              {comments.map((comment, i) => {
                return <li key={i}>{comment.name}</li>;
              })}
            </ul>
          </p>
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { deletePost }
)(Post);
