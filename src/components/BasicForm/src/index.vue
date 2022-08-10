<template>
  <div :class="getClass.cw()">
    <Form
      ref="basicForm"
      v-bind="props"
      :model="modelValue"
      :class="[getClass.cb(), getClass.cn()]"
    >
      <Row v-bind="getRowProperties">
        <slot name="header"></slot>
        <template v-for="item in getFormFields" >
          <BasicFormItem
            :class="getClass.ci()"
            :key="item.prop" 
            :field="item" 
            :action="getFormAction" 
            :form-props="props" 
            :form-model="modelValue"
            :set-value="setFormModel"
          >
           <template #[item.prop]="data">
             <slot :name="item.prop" v-bind="data || {}"></slot>
           </template>
          </BasicFormItem>
        </template>
      </Row>
    </Form>
  </div>
</template>
<script>
import { useClassSpace } from "./hooks/useClass";
import { Form, Row } from "element-ui";
import { useFormValues } from './hooks/useFormValues';
import BasicFormItem from './components/FormItem.vue';
import { useType } from "./hooks/useType";
const { is } = useType();
const classes = useClassSpace("basic-form");
export default {
  name: "BasicForm",
  data() {
    return {

      modelValue: {
        name: "123",
      },

      props: {
        ...this.$attrs,
      },
    };
  },
  computed: {
    getRowProperties() {
        const { rowProps = {}, rowStyle = {} } = this.props;
        return {
           style: rowStyle,
           ...rowProps, 
        }
    },
    getFormFields() {
       return this.props.fields ?? [] 
    },
    getFormAction() {
       return {
         validate: this.validate.bind(this),
         setProps: this.setProps.bind(this),
         getFieldsValue: this.getValues.bind(this),
         setFieldsValue: this.setFieldsValue.bind(this),
       }
    },
    getClass() {
        return classes;
    }
  },  
  methods: {
    setFormModel(field, val) {
      this.modelValue[field] = val;
    },
    setFieldsValue(values = {}) {
      Object.keys(values).forEach(key => {
        if(!is.def(this.modelValue)) {
          this.$set(this.modelValue, key, values[key]);
          return
        }
        this.modelValue[key] = values[key]
      })
    },
    validate() {
      return this.$refs.basicForm?.validate();
    },
    setProps(props = {}) {
      Object.keys(props).forEach((key) => {
        this.$set(this.props, key, props[key]);
      });
      return this.props;
    },
    getValues() {
      return this.modelValue;
    },
    initDefault () {
      const { fields } = this.props;

      const { initDefaultValue } = useFormValues(this.modelValue, fields)

      initDefaultValue();
    }
  },
  mounted() {
    this.$emit("register", {
      validate: this.validate.bind(this),
      setProps: this.setProps.bind(this),
      getFieldsValue: this.getValues.bind(this),
      initValues: this.initDefault.bind(this),
      setFieldsValue: this.setFieldsValue.bind(this),
    });
  },
  components: {
    Form,
    Row,
    BasicFormItem,
  },
};
</script>

<style lang="less" scoped></style>
