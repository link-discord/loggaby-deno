import * as Colors from 'https://deno.land/std@0.99.0/fmt/colors.ts'

interface previousLog {
	type: string
	message: string
}

export class Logger {
	previousLog: previousLog
	spacing: boolean

	constructor(spaceBetweenTags = true) {
		this.previousLog = {
			type: 'none',
			message: ''
		}

		this.spacing = spaceBetweenTags
	}

	success(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Success'

		if (this.spacing && this.previousLog.type !== tag.toLowerCase()) console.log('')

		const displayTag = Colors.bgBrightGreen(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}

	log(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Log'

		if (this.spacing && this.previousLog.type !== tag.toLowerCase()) console.log('')

		const displayTag = Colors.bgBrightCyan(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}

	info(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Info'
		this.log(data, tag)
	}

	error(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Error'

		if (this.spacing && this.previousLog.type !== tag.toLowerCase()) console.log('')

		const displayTag = Colors.bgBrightRed(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}

	warn(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Warning'

		if (this.spacing && this.previousLog.type !== tag.toLowerCase()) console.log('')

		const displayTag = Colors.bgBrightYellow(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}
}
