import { RouteChildrenProps } from "react-router-dom";


interface RouteParams {
  id: string
}

export interface MovieDetalisProps extends RouteChildrenProps<RouteParams>{}