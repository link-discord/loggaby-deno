# loggaby-deno
 A logger package inspired by loggaby for deno

## Usage
```ts
import { Logger } from 'https://deno.land/x/loggaby/mod.ts'

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
```

### Result
![Image of console](https://cdn.discordapp.com/attachments/813818056932589568/855188855892213770/unknown.png)
