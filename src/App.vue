<template>
  <div id="app">
   <BasicForm @register="register"></BasicForm>
  </div>
</template>

<script>
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
      defaultValue: '青年', 
      colProps: { span: 12 }, 
      // ifShow: ({ model }) => {
      //   return model.age >= 18
      // }, 
      show: () => true,
      rules: [{ required: true, message: '请输姓名', trigger: 'blur' }],
      error: undefined,
      required: false,
      ['inline-message']: false,
      ['show-message']: true,
    },
    {  
      prop: 'age',
      label: '年龄段', 
      component: 'Slider',
      componentProps: {
        options: [
          { label: '17', value: 17 },
          { label: '18', value: 18 }
        ],
        placeholder: '请选择年龄',
        onChange({ value, action }){
          const { setFieldsValue } = action
          let age = ''
          if(value <= 10 ) {
            age = '少年' 
          } else if(value <= 17) {
            age = '青少年'
          } else if(value <= 24) {
            age = '青年'
          } else if(value <= 35) {
            age = '而立'
          } else if(value <= 45) {
            age = '不惑'
          } else if(value <= 55) {
            age = '知天命'
          } else if(value <= 65) {
            age = '耳顺'
          } else if(value <= 75) {
            age = '花甲'
          } else if(value <= 85) {
            return '古稀'
          }
          setFieldsValue({ name: age });
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
  },
  methods: {
    inputChange() {
      console.log(arguments)
    }
  },
  async mounted() {

   const values = this.methods.getFieldsValue();
   console.log(values);

   setTimeout( async () => {
     const res = await this.methods.validate();
     console.log(res);
   }, 2000)
  }
}
</script>
