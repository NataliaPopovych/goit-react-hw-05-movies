import { PreLoaderCast } from 'components/PreLoader/PreLoader.styled';
import {
  CastCharacter,
  CastDetailWrap,
  CastItem,
  CastName,
} from './CastItem.styled';

export function MovieCastItem({ cast }) {
  return (
    <CastItem>
      {cast.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`}
          alt={cast.character}
        />
      ) : (
        <PreLoaderCast />
      )}
      <CastDetailWrap>
        <CastName>{cast.name}</CastName>
        <CastCharacter>{cast.character}</CastCharacter>
      </CastDetailWrap>
    </CastItem>
  );
}
