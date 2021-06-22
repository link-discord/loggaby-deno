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

	handleSpacing(type: string) {
		if (this.spacing && this.previousLog.type !== type.toLowerCase() && this.previousLog.type !== '') console.log('')
	}

	success(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Success'
		this.handleSpacing(tag)

		const displayTag = Colors.bgBrightGreen(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}
	
	debug(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Debug'
		this.success(data, tag)
	}

	log(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Log'
		this.handleSpacing(tag)

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
		this.handleSpacing(tag)

		const displayTag = Colors.bgBrightRed(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}

	warn(data: unknown, customTag?: string) {
		const tag = customTag ?? 'Warning'
		this.handleSpacing(tag)

		const displayTag = Colors.bgBrightYellow(Colors.black(` ${tag} `))
		console.log(`${displayTag} ${data}`)

		this.previousLog = { message: String(data), type: tag.toLowerCase() }
	}
}
