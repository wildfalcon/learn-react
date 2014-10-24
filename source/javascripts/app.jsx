/** @jsx React.DOM */
// The above declaration must remain intact at the top of the script.



React.renderComponent(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
