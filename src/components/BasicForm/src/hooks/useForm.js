import { nextTick } from "vue";


export const useForm = (props) => {
  
  let formRef = null;  

  const getForm = async () => {
    if(!formRef) {
      await nextTick()
      return formRef;  
    }
    return formRef;
  }

  const register = (formInstance) => {
     formRef = formInstance;
     
     formRef.setProps(props);

     formRef.initValues();
  }

  const formMethods = {
    validate: async () => {
      const form = await getForm();
      return form.validate();
    },
    getFieldsValue: () => {
      return formRef?.getFieldsValue()
    },
    setProps: async (props = {}) => {
      const form = await getForm();
      return form.setProps(props);
    },
    setFieldsValue: async (values = {}) => {
       const form = await getForm();
       return form.setFieldsValue(values);
    }
  }

  return [register, formMethods];
}