// actions/goodbye-action/src/main.ts
import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const whoToSayGoodbye = core.getInput('who-to-say-goodbye', { required: true });

    const message = `Goodbye, ${whoToSayGoodbye}! Hope to see you again soon.`;
    core.info(message);
    core.setOutput('farewell-message', message);

    core.info('Goodbye Action finished successfully!');

  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
