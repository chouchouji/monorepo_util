import { execa } from 'execa'
import { createSpinner } from 'nanospinner'
import { resolve } from 'path'

const CWD = process.cwd()

export function createTask(cwd, command = 'build') {
  return () => execa('pnpm', [command], { cwd })
}

export async function runTask(taskName, task) {
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    const start = performance.now()
    await task()
    s.success({ text: `Build ${taskName} completed! (${Math.ceil(performance.now() - start)}ms)` })
  } catch (e) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

export const buildShared = createTask(resolve(CWD, './packages/shared'))

export const buildHooks = createTask(resolve(CWD, './packages/hooks'))

export const buildDocs = createTask(resolve(CWD, './docs'), 'build:docs')

export async function runTaskQueue() {
  const start = performance.now()

  await runTask('shared', buildShared)
  await runTask('hooks', buildHooks)
  await runTask('docs', buildDocs)

  console.info(`All tasks built in ${Math.ceil(performance.now() - start)} ms`)
}
