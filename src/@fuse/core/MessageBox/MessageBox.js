import React from "react";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { CloseIcon } from "@material-ui/data-grid";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const fontSize = { fontSize: "1.5rem" };
const customStyle = {
    padding: "1.6rem",
    maxWidth: "30%",
};

function MessageBox(p) {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={customStyle}>
            <Collapse in={open}>
                <Alert variant="outlined"
                  style={fontSize}
                  iconMapping={{
                        success: <CheckCircleOutlineIcon />,
                      }} 
                  action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }>{p.item}
                </Alert>
            </Collapse>
            <Button
                disabled={open}
                variant="outlined"
                onClick={() => {
                    setOpen(true);
                }}>
                Cancelar seleção
            </Button>
        </Box>
    );
}

export default MessageBox;

/*
<Alert severity=error warning info success>
*/
