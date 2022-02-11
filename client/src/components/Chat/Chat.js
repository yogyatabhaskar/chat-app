import { io } from "socket.io-client";
import "./Chat.scss";

export default function Chat() {
  const onTextChange = () => {};
  const onSubmit = () => {};
  const onSend = () => {};

  return (
    <div className="container">
      <div className="container__view"></div>
      <form onSubmit={onSubmit}>
        <div className="container__field">
          <textarea
            className="container__text"
            name="name"
            onChange={(e) => onTextChange(e)}
            // value={state.name}
            value="hello"
            label="Name"
          />
          <button className="container__button" onClick={onSend}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
