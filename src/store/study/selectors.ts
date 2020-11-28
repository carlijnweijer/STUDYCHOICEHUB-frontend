import { RootState } from "../types";

export const selectStudies = (state: RootState) =>
  state.studyStateReducer.studies;

export const selectSectors = (state: RootState) =>
  state.studyStateReducer.sectors;

/*

   "economie", AccountBalanceIcon
    "gedrag_en_maatschappij", AccessibilityNewIcon
    "gezondheidszorg", LocalHospitalIcon
    "landbouw_en_natuurlijke_omgeving", EcoIcon
    "natuur", EmojiNature
    "onderwijs", School
    "recht", Gavel
    "taal_en_cultuur", Language
    "techniek", Settings


  */
