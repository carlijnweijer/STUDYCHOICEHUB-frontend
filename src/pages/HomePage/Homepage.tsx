import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudies } from "../../store/study/actions";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch]);

  return (
    <div>
      <h3>hi im home</h3>
    </div>
  );
}
