import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieCard = ({ Title, Description, PosterURL, Rating, id }) => {
  return (
    // Card Component for each movie
    <Link to={`${id}`}>
      <Card
        className="w-[65vw] sm:w-60"
        hoverable
        cover={<img alt="example" src={PosterURL} className="  sm:h-72" />}
        bodyStyle={{ padding: 10, textAlign: "center" }}
      >
        <Meta
          className=" sm:min-h-[120px] new"
          title={Title}
          description={
            Description.length < 100
              ? Description
              : Description.slice(0, 95) + "..."
          }
        />
        <Rate disabled defaultValue={Rating} className="mt-2" />
      </Card>
    </Link>
  );
};

export default MovieCard;
