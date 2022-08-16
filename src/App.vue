<template>
  <div id="app">
    <div style="padding: 0 36px; margin: 56px">
      <BasicForm @register="register"></BasicForm>
    </div>
  </div>
</template>

<script>
import { BasicForm, useForm } from "./components/BasicForm";
// const rowProps = { span: 24, lg: 24, sm: 24, xl: 24, xxl: 24 };
// const halfProps = { md: 24, lg: 12 };
const thirdProps = { lg: 8, xs: 24, sm: 24, xl: 8, xxl: 8, span: 8 };

const [register, methods] = useForm({
  "label-position": "right",
  "hide-required-asterisk": false,
  "label-suffix": "",
  "label-width": "auto",
  rowProps: { gutter: 20 },
  size: "small",
  fields: [
    {
      prop: "name",
      label: "姓名",
      component: "Input",
      componentProps: {
        onChange({ value, action, model }) {
          console.log(value, "on-change");
          console.log(action, "on-change-action");
          console.log(model, "on-change-model");
        },
      },
      defaultValue: "",
      colProps: thirdProps,
      ifShow: ({ model }) => {
        return model.age >= 20;
      },
      show: () => true,
      rules: [{ required: true, message: "请输姓名", trigger: "blur" }],
      error: undefined,
      required: false,
      ["inline-message"]: false,
      ["show-message"]: true,
    },
    {
      prop: "age",
      label: "年龄段",
      component: "Select",
      componentProps: {
        options: [
          { label: '15', value: 15 },
          { label: '20', value: 20 },
          { label: "30", value: 30 },
          { label: "40", value: 40 },
          { label: "50", value: 50 },
          { label: "60", value: 60 },
          { label: "70", value: 70 },
          { label: "80", value: 80 },
        ],
        placeholder: "请选择年龄",
        onChange({ value, action }) {
          const { setFieldsValue } = action;
          let name = ''
          switch(value) {
            case 15: 
              name = '至于学'
              break;
            case 20: 
              name = '少年' 
              break;
            case 30:
              name = '而立'
              break;
            case 40: 
              name = '不惑'
              break;
            case 50: 
              name = '知天命'
              break; 
            case 60: 
              name = '耳顺'
              break;
            case 70:
              name = '花甲'
              break;
            case 80:
              name = '古稀'
              break;
            default: break;
          }
          setFieldsValue({ name });
        },
      },
      defaultValue: '',
      colProps: thirdProps,
      rules: [{ required: true, message: "请选择年龄", trigger: "blur" }],
      error: undefined,
      required: false,
      ["inline-message"]: false,
      ["show-message"]: true,
    },
  ],
});
export default {
  name: "App",
  data() {
    return {
      register,
      methods,
    };
  },
  components: {
    BasicForm,
  },
  methods: {
    inputChange() {
      console.log(arguments);
    },
  },
  async mounted() {

    setTimeout(async () => {
      this.methods.updateField([{
        prop: 'name',
        ifShow: ({ model }) => {
          console.log(model);
          return true
        },
        componentProps: {
          placeholder: '这是改过后的值'
        }
      }, {
        prop: 'age',
        componentProps: {
          options: [          
            { label: '20', value: 20 },
            { label: "30", value: 30 },
            { label: "40", value: 40 },
            { label: "50", value: 50 },
            { label: "60", value: 60 },
            { label: "70", value: 70 },
            { label: "80", value: 80 }
          ]
        }
      }])
      // console.log(res);
    }, 2000);
  },
};
</script>
