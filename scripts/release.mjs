import { runTaskQueue } from './build.mjs'
import { release } from '@varlet/release'

await release({ task: runTaskQueue })
