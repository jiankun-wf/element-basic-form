# element-basic-form 
## v0.0.1



import { BasicForm, useForm } from './components/BasicForm'
const [register, methods] = useForm({
  'label-position': 'right',
  'hide-required-asterisk': false,
  'label-suffix': '：',
  'label-width': 'auto',
  size: 'mini',
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
      show: () => true,
      rules: [{ required: true, message: '请输姓名', trigger: 'blur' }],
      error: undefined,
      required: false,
      ['inline-message']: false,
      ['show-message']: true,
    },
    {  
      prop: 'age',
      label: '年龄', 
      component: 'Select',
      componentProps: {
        options: [
          { label: '17', value: 17 },
          { label: '18', value: 18 }
        ],
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
      error: undefined,
      required: false,
      ['inline-message']: false,
      ['show-message']: true,

    }
  ]
})