
export const class_prefix = 'jiankun'

export const useClassSpace = (suffix) => {
    
    const cb = () => {
        return `${class_prefix}-${suffix}`;
    }
    
    const cn = () => {
        return `${class_prefix}-${suffix}--normal`
    }

    const cw = () => {
        return `${class_prefix}-${suffix}--wrapper`
    }

    const ci = () => {
        return `${class_prefix}-${suffix}--item`
    }

    return { cb, cn, cw, ci }
}