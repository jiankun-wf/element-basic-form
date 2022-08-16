# element-basic-form 
## v0.0.5
### based on Element(2.x) vue(2.x)

# Q1 目前支持：
 1. Input
 2. Slider
 3. Switch,
 4. Cascader,
 5. Radio,
 6. Checkbox,
 7. InputNumber,
 8. TimeSelect,
 9. DatePicker,
 10. Rate,
 11. ColorPicker,
 12. Transfer
# Q2  目前支持的数据操作：
 1. validate 表单验证
 2. getFieldsValue 获取当前输入值
 3. setProps 设置表单props属性值(fields 除外)
 4. setFieldsValue 设置字段值
 5. validateField 局部验证
 6. resetFields 重置表单字段
 7. clearValidate 重置验证（全局/局部）
 8. updateField 更新字段属性（批量、单个）
# Q3 form属性 ElForm属性外，支持以下属性
 1. fields 字段集合
 2. rowProps ElRow 属性
 3. rowStlye ElRow 样式
# Q4 单个字段属性 除ElFormItem 外支持以下属性
 1. onChange
 2. component 渲染的组件名
 3. componentProps 渲染组件的props
 4. colprops ElCol布局的属性
 5. ifShow v-if 参数 model prop
 6. show v-show 参数 model prop
 7. defaultValue 默认值 因vue2的特性问题，必须设置