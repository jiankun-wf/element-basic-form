<template>
  <div id="app">
    <BasicForm @register="register">
     <template #age="{ model, prop }">
      <Select v-model="model[prop]">
          <Option :value="17" label="17"></Option>
          <Option :value="18" label="18"></Option>
      </Select>
     </template>
    </BasicForm>
  </div>
</template>

<script>
import { BasicForm, useForm } from './components/BasicForm'
import { Select, Option } from 'element-ui';
const [register, methods] = useForm({
  'label-position': 'right',
  'hide-required-asterisk': false,
  'label-suffix': '：',
  'label-width': 'auto',
  size: 'small',
  fields: [
    {  
      prop: 'name',
      label: '姓名', 
      component: 'Input',
      componentProps: {
        placeholder: '请输入姓名',
        onChange({ value, action, model }){
          console.log(value, 'on-change');
          console.log(action, 'on-change-action');
          console.log(model, 'on-change-model')
        }
      },
      defaultValue: '', 
      colProps: { span: 12 }, 
      ifShow: ({ model }) => {
        return model.age >= 18
      }, 
      rules: [{ required: true, message: '请输姓名', trigger: 'blur' }],
      size: 'small',
      error: undefined,
      required: false,
      ['inline-message']: false,
      ['show-message']: true,

    },
    {  
      prop: 'age',
      label: '年龄', 
      component: 'Input',
      componentProps: {
        placeholder: '请选择年龄',
        onChange({ value, action, model }){
          console.log(value, 'on-change');
          console.log(action, 'on-change-action');
          console.log(model, 'on-change-model')
        }
      },
      defaultValue: 17,
      colProps: { span: 12 }, 
      rules: [{ required: true, message: '请选择年龄', trigger: 'blur' }],
      size: 'small',
      error: undefined,
      required: false,
      ['inline-message']: false,
      ['show-message']: true,

    }
  ]
})
export default {
  name: 'App',
  data() {
    return {
      register,
      methods,
    }
  },  
  components: {
    BasicForm,
    Select,
    Option,
  },
  methods: {
    inputChange() {
      console.log(arguments)
    }
  },
  async mounted() {
  //  await this.methods.setFieldsValue({ name: '111' });

   const values = this.methods.getFieldsValue();
   console.log(values);

  //  setTimeout( async () => {
  //    const res = await this.methods.validate();
  //    console.log(res);
  //  }, 2000)
  }
}
</script>
