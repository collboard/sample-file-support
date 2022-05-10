import {
  declareModule,
  ExtraJsxPlace,
  makeExtrajsxModule,
  randomEmoji,
  React,
  styled,
  centerArts,
  TextArt,
} from "@collboard/modules-sdk";
import helloWorldButton from "../assets/hello-world-button.png";
import helloWorldIcon from "../assets/hello-world-icon.png";
import {
  name,
  contributors,
  description,
  license,
  repository,
  version,
} from "../package.json";
import { Vector } from "xyzt";

const mimeTypes: string_mime_type_with_wildcard[] = ["text/plain"];

internalModules.declareModule({
  manifest: {
    name,
    version,
    description,
    contributors,
    license,
    repository,
    title: { en: "Sample button" },
    categories: ["Productivity", "Buttons", "Template"],
    icon: helloWorldIcon,
    flags: {
      isTemplate: true,
    },
    supports: {
      fileImport:
        mimeTypes /* <- TODO: [⭕] In future no need for fileImport: mimeTypes */,
    },
  },
  async setup(systems) {
    const { importSystem, appState } = await systems.request(
      "importSystem",
      "appState"
    );

    return importSystem.registerFileSupport({
      priority: 0,

      async processFile({ file, boardPosition, willCommitArts, next }) {
        if (
          !mimeTypes.some((mimeType) =>
            patternToRegExp(mimeType).test(file.type)
          )
        ) {
          return next();
        }

        willCommitArts();

        const textArt = new TextArt(
          await file.text(),
          "black",
          21 / appState.transform.scale.x,
          false,
          false,
          false,
          "none",
          Vector.zero()
        );

        centerArts({ arts: [textArt], boardPosition });

        return textArt;
      },
    });
  },
});

/**
 * [⚗️]
 */
