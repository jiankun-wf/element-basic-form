<template>
    <el-select v-bind="$attrs" @change="onChange" v-model="modelValue" style="width: 100%">
      <template v-if="getIsGroup">
        <OptionGroup 
          v-for="(group, index) in options"
          :key="index" 
          :label="group[groupLabel]"
        >
          <Option
           v-for="item in group[childrenField]" 
           :key="item[valueField]" 
           :label="item[labelField]" 
           :value="item[valueField]"
        >
        </Option>    
        </OptionGroup>
      </template>
      <template v-else>
        <Option
           v-for="item in options"
           :key="item[valueField]" 
           :label="item[labelField]" 
           :value="item[valueField]">
        </Option> 
      </template>
    </el-select>
</template>
<script lang='ts'>
  import { Select as ElSelect, Option, OptionGroup } from "element-ui";
  import { useType } from "../hooks/useType";
  const { is } = useType();
  export default {
    name: 'BasicSelect',
    components: {
       ElSelect,
       Option,
       OptionGroup,
    },
    props: {
      value: {
        type: [String, Number, Array],
        default: '',
      },
      groupLabel: {
        type: String,
        default: 'label',
      },
      valueField: {
        type: String,
        default: 'value'
      },
      labelField: {
        type: String,
        default: 'label' 
      },
      isGroup: {
        type: Boolean,
        default: false
      },
      childrenField: {
        type: String,
        default: 'children'
      },
      options: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
        return {
           modelValue: '' 
        }
    },
    methods: {
      onChange(val) {
        this.$emit('input', val);
      }
    },
    computed: {
      getIsGroup() {
        const { options, children, isGroup } = this;
        return isGroup && is.array(options) && this.options.some(item => is.array(item[children] && item[children].length))
      }
    },
    watch: {
      value: {
        deep: true,
        handler(val) {
           this.modelValue = val
        },
        immediate: true,
      }
    }
  }
</script>
