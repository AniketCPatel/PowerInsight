// components/Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconButton size="large">
            <LightbulbIcon color="warning" fontSize="large" />
          </IconButton>
          {t("header.title")}
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="language"
              name="language"
              defaultValue={i18n.language}
              onChange={handleLanguageChange}
            >
              <FormControlLabel
                value="en"
                control={<Radio color="warning" />}
                label={t("language.english")}
              />
              <FormControlLabel
                value="hi"
                control={<Radio color="warning" />}
                label={t("language.hindi")}
              />
              <FormControlLabel
                value="gu"
                control={<Radio color="warning" />}
                label={t("language.gujarati")}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
