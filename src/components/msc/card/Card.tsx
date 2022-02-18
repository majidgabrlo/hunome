import React, { memo } from "react";
import classes from "./card.module.css";
import Field from "../field/Field";
interface propsTypes {
  title: string;
  image: string;
  artist: string;
  price: string;
}

function Card(props: propsTypes) {
  return (
    <div
      className={`col-span-12 col-sm-span-6 col-md-span-4 col-lg-span-3 shadow mx1rem relative ${classes.card}`}
      data-testid="card-container"
    >
      <div className={`grid gap-x-3 items-center justify-between`}>
        <img
          style={{ width: "100%", borderRadius: "5px" }}
          src={props.image}
          className="col-span-5"
        />
        <div className="col-span-7 px1rem">
          <Field className="mb-2" title="Artist" value={props.artist} />
          <Field className="mb-2" title="Title" value={props.title} />
          <Field title="Price" value={props.price} />
        </div>
      </div>
    </div>
  );
}

const PureCard=memo(Card)

export default PureCard;
