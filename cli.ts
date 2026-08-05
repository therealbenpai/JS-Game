import process from 'node:process';
import { Xo } from 'xo';
import Gitlab from 'eslint-formatter-gitlab';
import { toCodeClimate } from 'eslint-formatter-codeclimate';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

await yargs(hideBin(process.argv))
    .scriptName('cli')
    .command(
        'lint',
        'Lint the codebase',
        yargs => yargs
            .option('fix', {
                type: 'boolean',
                describe: 'Automatically fix problems',
                default: false,
            })
            .option('cwd', {
                type: 'string',
                describe: 'The directory to lint',
                default: import.meta.dir,
            }),
        async argv => {
            const results = await new Xo({ ...argv, configPath: 'xo.config.ts' }).lintFiles();

            await Bun.write(
                `${argv.cwd}/coverage/code-quality.json`,
                JSON.stringify(toCodeClimate(results.results, results.rulesMeta, argv.cwd)),
            );

            console.log(
                await Gitlab(results.results, { ...argv, rulesMeta: results.rulesMeta, color: true }),
            );
        },
    )
    .alias('h', 'help')
    .alias('v', 'version')
    .demandCommand()
    .parse();
