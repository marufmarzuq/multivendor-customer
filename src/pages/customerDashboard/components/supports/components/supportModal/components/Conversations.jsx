import { AiOutlineUser } from "react-icons/ai";

const Conversations = ({ replies, ticketId, createdAt }) => {
  return (
    <>
      <div className="widget-title" style={{ margin: "0 0 20px" }}>
        Conversations
      </div>
      {replies?.map((reply, key) => {
        return (
          <div className="support-ticket-conversation-container" key={key + 1}>
            { reply.replied_by === "admin" ? (
              <div className="stc-admin-container">
                <div className="support-replay-profile">
                  <div className="stc-info admin">
                    <span>{reply.replied_by}</span>
                    <span className="stc-date">{reply.created_at}</span>
                  </div>
                  <div className="stc-user-img">
                    <AiOutlineUser />
                  </div>
                </div>
              </div>
            ) : (
              <div className="stc-user-container">
                <div className="support-replay-profile">
                  <div className="stc-user-img">
                    <AiOutlineUser />
                  </div>
                  <div className="stc-info">
                    <span>{reply.replied_by}</span>
                    <span className="stc-date">{reply.created_at}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="stc-message">{reply.message}</div>
          </div>
        );
      })}

      <div className="support-ticket-creating-date">
        Ticket #{ticketId} has been created at {createdAt}
      </div>
    </>
  );
};

export default Conversations;
