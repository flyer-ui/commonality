/**
 * 用于针对JavaScript需要精确计算的场景
 * 思路参考:https://github.com/camsong/blog/issues/9
 * */

export type TMethod = 'Addition' | 'Reduce' | 'Multiply' | 'Divide'

/**
 * @description 用于针对JavaScript需要精确计算的场景
 * @author pfzheng
 * @date 2020-09-27
 * @export
 * @param {number} num1
 * @param {number} num2
 * @param {TMethod} method //"Addition" | "Reduce" | "Multiply" | "Divide"
 * @returns
 */
export function preciseCalculation (
  num1: number,
  num2: number,
  method: TMethod
) {
  const num1Mantissa = (num1.toString().split('.')[1] || '').length
  const num2Mantissa = (num2.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Mantissa, num2Mantissa))
  switch (method) {
    case 'Addition': {
      return (num1 * baseNum + num2 * baseNum) / baseNum
    }
    case 'Reduce': {
      return (num1 * baseNum - num2 * baseNum) / baseNum
    }
    case 'Multiply': {
      return num1 * baseNum * num2 / baseNum
    }
    case 'Divide': {
      return num1 * baseNum / num2 / baseNum
    }
  }
}

/**
 * 用于精确数值相加
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseAddition (num1: number = 0, num2: number = 0): number {
  return preciseCalculation(num1, num2, 'Addition')
}

/**
 * 用于精确数值相减
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseReduce (num1: number = 0, num2: number = 0): number {
  return preciseCalculation(num1, num2, 'Reduce')
}

/**
 * 用于精确数值相乘
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseMultiply (num1: number = 0, num2: number = 0): number {
  return preciseCalculation(num1, num2, 'Multiply')
}

/**
 * 用于精确数值相乘
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseDivide (num1: number = 0, num2: number = 0): number {
  return preciseCalculation(num1, num2, 'Divide')
}
