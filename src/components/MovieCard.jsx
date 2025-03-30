import { IMAGE_URL } from "../utils/constants"

const MovieCard = ({photoUrl}) => {
  if(!photoUrl) return null
  return (
    <div className="min-w-36 pr-0.5">
        <img src={IMAGE_URL+photoUrl} alt="movie" />
    </div>
  )
}
export default MovieCard