import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <MessageCard
        title="Welcome"
        message="This is the first message card."
      />
      <MessageCard
        title="Update"
        message="Here is another message with different text."
      />
      <MessageCard
        title="Reminder"
        message="Do not forget to submit your assignment."
      />
      <MessageCard
        title="Thanks"
        message="Thank you for checking all the cards."
      />
    </div>
  );
}

export default App;
