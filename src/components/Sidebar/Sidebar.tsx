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

export default function Sidebar() {
  const sectors = useSelector(selectSectors);

  return (
    <div>
      {sectors.map((sector) => {
        switch (sector) {
          case "economie":
            return (
              <div>
                <IconButton>
                  <AccountBalance />
                </IconButton>
              </div>
            );

          case "gedrag_en_maatschappij":
            return (
              <div>
                <IconButton>
                  <AccessibilityNew />
                </IconButton>
              </div>
            );

          case "gezondheidszorg":
            return (
              <div>
                <IconButton>
                  <LocalHospital />
                </IconButton>
              </div>
            );

          case "landbouw_en_natuurlijke_omgeving":
            return (
              <div>
                <IconButton>
                  <Eco />
                </IconButton>
              </div>
            );

          case "natuur":
            return (
              <div>
                <IconButton>
                  <EmojiNature />
                </IconButton>
              </div>
            );

          case "onderwijs":
            return (
              <div>
                <IconButton>
                  <School />
                </IconButton>
              </div>
            );

          case "recht":
            return (
              <div>
                <IconButton>
                  <Gavel />
                </IconButton>
              </div>
            );

          case "taal_en_cultuur":
            return (
              <div>
                <IconButton>
                  <Language />
                </IconButton>
              </div>
            );

          case "techniek":
            return (
              <div>
                <IconButton>
                  <Settings />
                </IconButton>
              </div>
            );

          default:
            return (
              <div>
                <IconButton>
                  <Settings />
                </IconButton>
              </div>
            );
        }
      })}
    </div>
  );
}
