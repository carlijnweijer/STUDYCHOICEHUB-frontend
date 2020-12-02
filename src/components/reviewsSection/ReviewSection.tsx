import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectedStudy } from "../../store/study/selectors";

export default function ReviewSection() {
  const study = useSelector(selectedStudy);

  return (
    <div>
      <Typography variant="h4">Reviews</Typography>
      <div className="reviews">
        {study?.reviews.map((review: any) => {
          return (
            <Card key={review.id}>
              <CardContent>
                <Typography variant="h6">{review.title}</Typography>
                <Typography>{review.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
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
