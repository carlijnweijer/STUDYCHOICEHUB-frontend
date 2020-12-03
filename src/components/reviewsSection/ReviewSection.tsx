import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectedStudy } from "../../store/study/selectors";
import "./ReviewSection.css";

export default function ReviewSection() {
  const study = useSelector(selectedStudy);

  const reviews =
    !Array.isArray(study?.reviews) || !study?.reviews.length ? (
      <Typography>This study has no reviews yet.. </Typography>
    ) : null;

  return (
    <div className="reviewsPage">
      <div className="reviewsPageBox">
        <div className="reviewsPageBoxTop">
          <Typography variant="h4">Reviews</Typography>
        </div>
        <div className="reviews">
          {reviews}
          {study?.reviews.map((review: any) => {
            return (
              <Card key={review.id} className="reviewCard">
                <CardContent>
                  <Typography variant="h6">{review.title}</Typography>
                  <Typography>{review.content}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
all the studies
select only one study
get the id of that study
create a review for that studyId
*/
