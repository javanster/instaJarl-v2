import { atom } from "jotai";
import { colorPalettes } from "./colors";

export const chosenColorState = atom(colorPalettes[0]);

export const agreedToWeatherFunctionalityState = atom(false);
