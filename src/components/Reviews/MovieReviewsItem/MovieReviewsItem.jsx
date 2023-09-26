import {
  ReviewAuthor,
  ReviewContent,
  RevuewsItem,
} from './MovieReviewsItem.styled';

export function MovieReviewsItem({ review }) {
  return (
    <RevuewsItem>
      <ReviewAuthor>{review.author}</ReviewAuthor>
      <ReviewContent>{review.content}</ReviewContent>
    </RevuewsItem>
  );
}
