import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();

  const { status, sendRequest, data: allComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  const onCommentAddedHandler = useCallback(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && allComments && allComments.length > 0) {
    comments = <CommentsList comments={allComments} />;
  }

  if (status === "completed" && (!allComments || allComments.length === 0)) {
    comments = <p className="centered">No comments were added yet!</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComments={onCommentAddedHandler}
          quoteId={params.quoteId}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
