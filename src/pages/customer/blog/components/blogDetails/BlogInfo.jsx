import React from "react";
import { NavLink } from "react-router-dom";
import blogInfoStyle from "./blogDetails.module.css";
const BlogInfo = () => {
  return (
    <div className={blogInfoStyle.BlogInfoContainer}>
      <section>
        <div className={blogInfoStyle.title}>
          <h2>4 Expert Tips On How To Choose The Right Men’s Wallet</h2>
          <small> By System Admin in</small>
          <small
            style={{
              fontWeight: "600",
            }}
          >
            Ecommerce, Commercial
          </small>
          <small> on Jan 25, 2022</small>
        </div>
      </section>

      <section>
        <div className="mt-5">
          <p>
            I have seen many people underestimating the power of their wallets.
            To them, they are just a functional item they use to carry. As a
            result, they often end up with the wallets which are not really
            suitable for them. You should pay more attention when you choose
            your wallets. There are a lot of them on the market with the
            different designs and styles. When you choose carefully, you would
            be able to buy a wallet that is catered to your needs. Not to
            mention that it will help to enhance your style significantly.
          </p>
          <img src="https://farmart.botble.com/storage/news/1.jpg" alt="" />
          <p
            className="mt-5"
            style={{
              fontWeight: "600",
            }}
          >
            For all of the reason above, here are 7 expert tips to help you pick
            up the right men’s wallet for you:
          </p>
        </div>
      </section>

      <section>
        <div className="mt-5">
          <h3>Choose A Neat Wallet</h3>
          <p>
            The wallet is an essential accessory that you should go simple.
            Simplicity is the best in this case. A simple and neat wallet with
            the plain color and even minimalist style is versatile. It can be
            used for both formal and casual events. In addition, that wallet
            will go well with most of the clothes in your wardrobe.
          </p>
          <p>
            Keep in mind that a wallet will tell other people about your
            personality and your fashion sense as much as other clothes you put
            on. Hence, don’t go cheesy on your wallet or else people will think
            that you have a funny and particular style.
          </p>
          <img src="https://farmart.botble.com/storage/news/2.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="mt-5">
          <h3>Choose The Right Size For Your Wallet</h3>
          <p>
            You should avoid having an over-sized wallet. Don’t think that you
            need to buy a big wallet because you have a lot to carry with you.
            In addition, a fat wallet is very ugly. It will make it harder for
            you to slide the wallet into your trousers’ pocket. In addition, it
            will create a bulge and ruin your look.
          </p>
          <p>
            Before you go on to buy a new wallet, clean out your wallet and
            place all the items from your wallet on a table. Throw away things
            that you would never need any more such as the old bills or the
            expired gift cards. Remember to check your wallet on a frequent
            basis to get rid of all of the old stuff that you don’t need
            anymore.
          </p>
          <img src="https://farmart.botble.com/storage/news/3.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="mt-5">
          <h3>Consider A Wallet As A Long Term Investment</h3>
          <p>
            Your wallet is indeed an investment that you should consider
            spending a decent amount of time and effort on it. Another factor
            that you need to consider is how much you want to spend on your
            wallet. The price ranges of wallets on the market vary a great deal.
            You can find a wallet which is as cheap as about 5 to 7 dollars. On
            the other hand, you should expect to pay around 250 to 300 dollars
            for a high-quality wallet.
          </p>
          <p>
            In case you need a wallet to use for a long time, it is a good idea
            that you should invest a decent amount of money on a wallet. A high
            quality wallet from a reputational brand with the premium quality
            such as cowhide leather will last for a long time. In addition, it
            is an accessory to show off your fashion sense and your social
            status.
          </p>
          <img src="https://farmart.botble.com/storage/news/5.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="mt-5">
          <span> Tags:</span>
          <span>
            <NavLink to="/"> General </NavLink>
          </span>
          <span>
            <NavLink to="/"> Design </NavLink>
          </span>
          <span>
            <NavLink to="/"> Fashion </NavLink>
          </span>

          <span>
            <NavLink to="/"> Branding </NavLink>
          </span>

          <span>
            <NavLink to="/"> Modern </NavLink>
          </span>
        </div>
      </section>
    </div>
  );
};

export default BlogInfo;
