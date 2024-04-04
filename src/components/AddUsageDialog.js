// components/AddUsageDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const AddUsageDialog = ({ open, handleClose, handleSave }) => {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [usage, setUsage] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleUsageChange = (event) => {
    setUsage(event.target.value);
  };

  const handleSaveClick = () => {
    // Save data to JSON file or state
    handleSave(date, usage);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t("dialog.title")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Usage"
          type="number"
          fullWidth
          value={usage}
          onChange={handleUsageChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          {t("dialog.cancelButton")}
        </Button>
        <Button onClick={handleSaveClick} variant="contained">
          {t("dialog.saveButton")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUsageDialog;
