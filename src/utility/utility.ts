export const cutOffText = (str: string, lng: number) => {
  if (str.length >= lng) {
    return str.slice(0, lng) + '...'
  } else {
    return str
  }
}

export function debounce (func: Function, wait: number, immediate: boolean): any {
    let timeout

    return function executedFunction() {
      const context = this
      const args = arguments

      const later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }

      const callNow = immediate && !timeout

      clearTimeout(timeout)

      timeout = setTimeout(later, wait)

      if (callNow) func.apply(context, args)
    };
}

export const getTimeMeasurement = (inMinutes: number): string => {
  switch (true) {
    case inMinutes < 1:
      return 'seconds'

    case inMinutes < 60:
      return 'minutes'

    case inMinutes < 1440:
      return 'hours'

    case inMinutes <= 84960:
      return 'days'

    default:
      return ''
  }
}

export const getTimeWithMeasurement = (inMinutes: number): { measurement: string, value: number } => {
  const measurement = getTimeMeasurement(inMinutes)

  const measurements = {
    seconds (minutes) {
      const val = Math.round(minutes * 60)
      return val
    },
    minutes (minutes) {
      return minutes
    },
    hours (minutes) {
      return minutes / 60
    },
    days (minutes) {
      return minutes / 24 / 60
    }
  }
  const strategy = measurements[measurement]

  if (!strategy) {
    console.error(`No strategy for particular measurement: ${measurement}`)
    return { measurement: '', value: Infinity }
  }
  return {
    measurement,
    value: strategy(inMinutes)
  }
}
export const getTimeInMinutes = (params: { measurement: string, value: number }): number => {
  const { measurement, value } = params
  const measurementStrategies = {
    seconds (v) {
      const val = Math.round(v / 60 * 100) / 100
      return val
    },
    minutes (v) {
      return v
    },
    hours (v) {
      return v * 60
    },
    days (v) {
      return v * 24 * 60
    }
  }
  const strategy = measurementStrategies[measurement]

  if (!strategy) {
    console.error(`No strategy for particular measurement: ${measurement}`)
    return Infinity
  }
  return strategy(value)
}

export function secondsToHms (seconds: number): string {
  seconds = Number(seconds)
  const d = Math.floor(seconds / (3600 * 24))
  if (d > 0) return d + ' days'
  const h = Math.floor(seconds / 3600)
  if (h > 0) return h + ' hours'
  const m = Math.floor(seconds % 3600 / 60)
  if (m > 0) return m + ' minutes'
  const s = Math.floor(seconds % 3600 % 60)
  if (s > 0) return s + ' seconds'
  return ''
}
