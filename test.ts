import { Logger } from './mod.ts'

// You can add a boolean as an option to have log messages grouped together
const logger = new Logger(true)

logger.log('This is a log message')

// It behaves like console.log meaning you are not limited to just strings
logger.log(5 * 10)

// You can have a custom prefix for every function
logger.log('This is a log message with a custom prefix', 'Custom')

logger.warn('This is a Warning message')
logger.error('This is a Error message')
logger.success('This is a Success message')

console.log('')
