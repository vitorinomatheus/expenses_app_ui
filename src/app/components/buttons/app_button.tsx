import { Button } from "@mui/material";
import AppButtonProps from "@/app/types/button_props";

export default function AppButton({primary, text}: AppButtonProps) {
    return (
        <Button
            variant={primary ? "contained" : "outlined"}
            color={primary ? "primary" : "white"}
            fullWidth
        >   
            {text}
        </Button>
    )
}