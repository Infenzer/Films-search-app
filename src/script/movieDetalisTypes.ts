import { RouteChildrenProps } from "react-router-dom";

export interface IInfo {
  Poster: string
  Year: string
  Title: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Ratings: IRatings[]
  Plot: string
  Director: string
  Writer: string
  Actors: string
  Awards: string
  BoxOffice: string
}

interface IRatings {
  Source: string
  Value: string
}

export interface MovieCardProps {
  info: IInfo
}

interface RouteParams {
  id: string
}

export interface MovieDetalisProps extends RouteChildrenProps<RouteParams>{}