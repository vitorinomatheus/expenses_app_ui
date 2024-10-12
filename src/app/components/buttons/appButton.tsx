import { Button } from "@mui/material";
import AppButtonProps from "@/app/types/componentsProps/buttonProps";

export default function AppButton(props: AppButtonProps) {

    const handleClick = () => {
        if(props.onClick != null)
            props.onClick()
    }

    return (
        <Button
            variant={props.primary ? "contained" : "outlined"}
            color={props.primary ? "primary" : "secondary"}
            onClick={() => handleClick()}
            fullWidth
        >   
            {props.text}
        </Button>
    )
}