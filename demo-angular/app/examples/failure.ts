import { FrescoDrawee, FailureEventData } from "nativescript-fresco";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import { writeToOutputLabel } from "./appLogger";

export function onFailure(args: FailureEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onFailure ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}