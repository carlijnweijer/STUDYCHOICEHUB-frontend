import { IconButton } from "@material-ui/core";
import {
  AccessibilityNew,
  AccountBalance,
  Eco,
  EmojiNature,
  Gavel,
  Language,
  LocalHospital,
  School,
  Settings,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectSectors } from "../../store/study/selectors";
import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
  const sectors = useSelector(selectSectors);

  return (
    <div>
      {sectors.map((sector) => {
        switch (sector) {
          case "economie":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <AccountBalance />
                </IconButton>
              </div>
            );

          case "gedrag_en_maatschappij":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <AccessibilityNew />
                </IconButton>
              </div>
            );

          case "gezondheidszorg":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <LocalHospital />
                </IconButton>
              </div>
            );

          case "landbouw_en_natuurlijke_omgeving":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <Eco />
                </IconButton>
              </div>
            );

          case "natuur":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <EmojiNature />
                </IconButton>
              </div>
            );

          case "onderwijs":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <School />
                </IconButton>
              </div>
            );

          case "recht":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <Gavel />
                </IconButton>
              </div>
            );

          case "taal_en_cultuur":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <Language />
                </IconButton>
              </div>
            );

          case "techniek":
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <Settings />
                </IconButton>
              </div>
            );

          default:
            return (
              <div>
                <IconButton component={RouterLink} to={`/studies/${sector}`}>
                  <Settings />
                </IconButton>
              </div>
            );
        }
      })}
    </div>
  );
}
