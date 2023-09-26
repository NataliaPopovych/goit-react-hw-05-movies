import { MovieReviewsItem } from '../MovieReviewsItem/MovieReviewsItem';
import { ReviewsLiat } from './MovieReviewsList.styled';

export function MovieReviewsList({ movieReviews }) {
  return (
    <ReviewsLiat>
      {movieReviews.map(({ id, ...review }) => (
        <MovieReviewsItem key={id} review={review} />
      ))}
    </ReviewsLiat>
  );
}
