import { Button } from "@mui/material";
import AppButtonProps from "@/app/types/componentsProps/buttonProps";

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