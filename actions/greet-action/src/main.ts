// src/main.ts
import * as core from '@actions/core';
import * as github from '@actions/github'; // Optional: if you need GitHub context

async function run(): Promise<void> {
  try {
    // Get input defined in action.yml
    const whoToGreet = core.getInput('who-to-greet', { required: true });

    core.info(`Hello, ${whoToGreet}! version`);

    // Get the current time
    const time = new Date().toTimeString();
    core.setOutput('time', time);

    // Optional: Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // core.info(`The event payload: ${payload}`);

    core.info('Action finished successfully!');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
