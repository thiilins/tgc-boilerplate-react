import { toPattern } from 'vanilla-masker'
interface IPatternOptions {
  pattern?: string | undefined
  placeholder?: string | undefined
}

const unMask = (value: string) => value.replace(/\W/g, '')

const masker = (
  value: string | number,
  pattern: string,
  options?: IPatternOptions
) => toPattern(value, { pattern, ...options })

const multiMasker = (
  value: string,
  patterns: string[],
  options?: IPatternOptions
) =>
  masker(
    value,
    patterns.reduce(
      (memo, pattern) =>
        value?.length <= unMask(memo)?.length ? memo : pattern,
      patterns[0]
    ),
    options
  )

const mask = (
  value: string,
  pattern: string | string[],
  options?: IPatternOptions
) =>
  typeof pattern === 'string'
    ? masker(value, pattern || '', options)
    : multiMasker(value, pattern, options)
export { mask, unMask }
