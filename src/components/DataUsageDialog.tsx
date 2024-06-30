import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Checkbox,
  Link,
} from "@mui/material";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { agreedToWeatherFunctionalityState } from "../utils/state";

export const DataUsageDialog = () => {
  const setAgreedToWeatherFunctionality = useSetAtom(
    agreedToWeatherFunctionalityState
  );
  const [open, setOpen] = useState(true);
  const [rememberChoiceChecked, setRememberChoiceChecked] = useState(false);

  const handleClose = (_: object, reason: string) => {
    if (reason !== "backdropClick") {
      const agreed = reason === "agree" ? true : false;
      rememberChoiceChecked && saveChoice(agreed);
      setAgreedToWeatherFunctionality(agreed);
      setOpen(false);
    }
  };

  const saveChoice = (agreed: boolean) => {
    localStorage.setItem("instaJarlAgreedToWeatherService", String(agreed));
  };

  return (
    <Dialog
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Enable current weather feature?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: "black" }}
        >
          In order to use the current weather feature, you must agree to the use
          of you current location and the possibility that your IP address and
          current location will be sent to{" "}
          <Link href={"https://www.met.no"}>Meteorologisk Institutt</Link> and
          stored in their logs. If you do not agree, the weather feature will be
          disabled.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          ml: 2,
          mr: 1,
          justifyContent: { xs: "flex-start", sm: "space-between" },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", mb: { xs: 2, sm: 0 } }}
        >
          <Checkbox
            checked={rememberChoiceChecked}
            onChange={() => setRememberChoiceChecked(!rememberChoiceChecked)}
          />
          <Typography
            onClick={() => setRememberChoiceChecked(!rememberChoiceChecked)}
            sx={{
              cursor: "pointer",
              ":hover": { textDecoration: "underline" },
            }}
          >
            Remember my choice
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              width: "120px",
              mx: 1,
              color: "black",
              ":hover": { textDecoration: "underline", fontWeight: "bold" },
            }}
            onClick={() => handleClose({}, "disagree")}
          >
            Disagree
          </Button>
          <Button
            sx={{
              width: "120px",
              mx: 1,
              color: "black",
              ":hover": { textDecoration: "underline", fontWeight: "bold" },
            }}
            onClick={() => handleClose({}, "agree")}
            autoFocus
          >
            Agree
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
