import {
  centerArts,
  declareModule,
  patternToRegExp,
  string_mime_type_with_wildcard,
  TextArt
} from '@collboard/modules-sdk';
import textFileIcon from '../assets/text-file-icon.svg';
import { contributors, description, license, name, repository, version } from '../package.json';

const mimeTypes: string_mime_type_with_wildcard[] = [
    'text/plain' /* <- Note: For your mime type @see https://www.digipres.org/formats/mime-types/ */,
];

declareModule({
    manifest: {
        name,
        version,
        description,
        contributors,
        license,
        repository,
        icon: textFileIcon,
        flags: {
            isTemplate: true,
        },
        supports: {
            fileImport: mimeTypes,
        },
        // Note: Support modules do not need title or some nice public profile because they are typically installed automatically
    },
    async setup(systems) {
        const { importSystem, appState } = await systems.request('importSystem', 'appState');

        return importSystem.registerFileSupport({
            priority: 0,

            async importFile({ file, boardPosition, willCommitArts, next }) {
                // Note: Checking that file has supported mime-type.
                //       You can make any (sync/async) additional checks here and decide to process the file or call next
                if (!mimeTypes.some((mimeType) => patternToRegExp(mimeType).test(file.type))) {
                    return next();
                }

                willCommitArts();

                const textArt = new TextArt(
                    await file.text(),
                    '#009edd',
                    21 / appState.transform.value.scale.x,
                    false,
                    false,
                    false,
                    'none',
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
