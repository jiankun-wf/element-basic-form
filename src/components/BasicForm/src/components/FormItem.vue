<!-- eslint-disable vue/no-mutating-props -->
<template>
   <Col v-bind="getColProps">
    <FormItem v-show="getShow" v-if="getIfShow" v-bind="getFormItemProps">
      <slot :name="field.prop" :model="formModel" :prop="field.prop">
        <component
          :is="componentMap[field.component]"
          v-bind="getComponentProps"
          v-model="formModel[field.prop]"
        ></component>
      </slot>
    </FormItem>
   </Col>
</template>
<script>
  import { FormItem, Col } from 'element-ui'
  import { useComponentMap } from '../hooks/useComponentMap'
  import { useType } from '../hooks/useType'
  const { is } = useType();
  export default {
    name: 'BasicFormItem',
    props: {
      field: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      action: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      formProps: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      formModel: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      setValue: {
        type: Function,
        required: true,
      }
    },
    components: {
      FormItem,
      Col
    },
    computed: {
      value() {
        return this.formModel[this.field.prop]
      },
      getFormItemProps() {
        return { ...this.field, ifShow: undefined, show: undefined, componentProps: undefined }  
      },
      getComponentProps() {
        return is.function(this.field.componentProps) ?
          this.field.componentProps({ model: this.formModel, field: this.field.prop, action: this.action }) :
          this.field.componentProps;
      },
      getIfShow() {
        const { ifShow, prop } = this.field;
        if(is.boolean(ifShow)) {
           return ifShow 
        } else if(is.function(ifShow)) {
           return ifShow({ model: this.formModel, prop  }) 
        } else return true
      },  
      getShow() {
         const { show, prop } = this.field;
        if(is.boolean(show)) {
           return show 
        } else if(is.function(show)) {
           return show({ model: this.formModel, prop  }) 
        } else return true
      },
      getColProps() {
        const { colProps } = this.field
        return { ...colProps }
      },
      componentMap() {
        return useComponentMap();  
      }
    },
    watch: {
     value(val) {
      this.fieldChange(val)
     }
    },
    methods: {
        fieldChange(val) {
          const { prop } = this.field
          
          // this.setValue?.(prop, val) 

          this.getComponentProps.onChange?.({ value: val, action: this.action, model: this.formModel, prop })
          
      }
    }
  }
</script>


<style lang='less' scoped>

</style>