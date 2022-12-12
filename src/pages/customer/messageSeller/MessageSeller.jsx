import React from "react";
import { useLocation } from "react-router-dom";
import ReviewForm from "./components/ReviewForm";

const MessageSeller = () => {
  const location = useLocation();
  const { seller_id } = location.state;

  return (
    <div className="container">
      <section className="my-5">
        <ReviewForm seller_id={seller_id} />
      </section>
    </div>
  );
};

export default MessageSeller;
