import React from "react";
import { useLocation } from "react-router-dom";
import ReviewForm from "./components/ReviewForm";

const MessageSeller = () => {
  const location = useLocation();
  const { shop_slug } = location.state;

  return (
    <div className="container">
      <section className="my-5">
        <ReviewForm shop_slug={shop_slug} />
      </section>
    </div>
  );
};

export default MessageSeller;
