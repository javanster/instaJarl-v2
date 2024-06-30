import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const DataUsageInfo = ({ open, setOpen }: Props) => {
  const handleDataUsageDialogClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleDataUsageDialogClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        How your data is used
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleDataUsageDialogClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
          InstaJarl stores no data from its users.
        </Typography>
        <Typography gutterBottom>
          If you have agreed to enabling the current weather feature, your
          current position and your IP address will be collected and sent to{" "}
          <Link target="_blank" href={"https://www.met.no"}>
            Meteorologisk Institutt
          </Link>{" "}
          and stored in their logs. You can find more information about how
          Meteorologisk Institutt processes and stores data and your rights
          here:
        </Typography>
        <Typography gutterBottom>
          <Link target="_blank" href={"https://www.met.no/om-oss/personvern"}>
            https://www.met.no/om-oss/personvern
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
