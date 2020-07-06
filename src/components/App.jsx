import React from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit
} from '@formily/antd'
import { Input, ArrayTable } from '@formily/antd-components'
import 'antd/dist/antd.css'

export default () => {
  return (
    <SchemaForm components={{ Input, ArrayTable }}>
      <Field
          title="数组"
          name="array"
          maxItems={3}
          type="array"
          x-component="ArrayTable"
          x-component-props={{
            renderExtraOperations() {
              return <div>Hello worldasdasdasdasd</div>
            },
            operationsWidth: 300
          }}
        >
          <Field type="object">
            <Field name="dd" x-component="Input" title="字段4" x-index={1} />
            <Field name="ee" x-component="Input" title="字段5" />
          </Field>
      </Field>
    </SchemaForm>
  )
}