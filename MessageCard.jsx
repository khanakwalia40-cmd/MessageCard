function MessageCard({ title, message }) {
  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "8px 0" }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
