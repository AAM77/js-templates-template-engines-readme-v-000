function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  // Create Template String
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  // Create Template Function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  // Execute Template Function with JSON object for the interpolate values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  // Append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
