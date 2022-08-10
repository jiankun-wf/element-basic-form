import { set } from 'vue'
import { useType } from './useType';
const { is: { array } } = useType()
export const useFormValues = (
  model,
  fields
) => {
  const initDefaultValue = () => {
    if(!array(fields)) {
      return;
    }

    fields.forEach(item => {
        const { defaultValue } = item;

        set(model, item.prop, defaultValue);
    })
  }

  return { initDefaultValue }
}