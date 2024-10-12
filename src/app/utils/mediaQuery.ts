import  useMediaQuery  from "@mui/material/useMediaQuery"
import { MOBILE_MEDIA_QUERY } from "../appConstants"

export default function useIsMobile() {
    return useMediaQuery(MOBILE_MEDIA_QUERY)
}

