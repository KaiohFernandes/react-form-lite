# React Form
React Form is a abstraction of form to turn your development easier. You're write less code to build your form structure and will get speedful result.

## Requirements
 - React 16.8 or higher.

## Install

    npm install react-form-lite
    yarn add react-form-lite

## Example
When you use `react-form-lite` don't need necessary declare a initial state with form components because it's automatic. We do this for you in a way easier and speedful.

    import { Form, Input, Select, Textarea } from 'react-form-lite'

    function Component() {
		function handleSubmit(formData) {
			console.log(formData)
			// Result
			// {name: 'name', message: 'message', country: 'brazil'}
		};
		function handleChange(formData) {
			console.log(formData)
			// Result
			// {name: 'name', message: 'message', country: 'brazil'}
		};

		return (
			<Form className="form" onSubmit={handleSubmit} onChange={handleChange}>
				<Input type="text" name="name" className="class" value="name" />
				<Select  name="country"  className="form-input">
					<Option value="brazil">Brazil</Option>
				</Select>
				<Textarea name="name" className="class" value="name" />
			</Form>
		);
	}
**Result - onChange and onSubmit**
`{name: 'name', message: 'message', country: 'brazil'}`

To test you can add other elements to the `<Form>`.

## How to use
To use you need import components in your React component.
`import { Form, Input, Textarea, Select, Option } from 'react-form-lite'`

### Form

| Prop | Mandatory | Value | Description |
|--|--|--|--|
| children | no | React Element | Components children |
| onSubmit | no | Submit function | Will run when form was submitted |
| onChange | no | OnChange function | Will run when inputs were changed |
| Form HTML Props | no | HTML form Props | All HTML props |


    import { Form } from 'react-form-lite'

    function Component() {
		function handleSubmit(formData) {...};
		function handleChange(formData) {...};

		return (
			<Form className="form" onSubmit={handleSubmit} onChange={handleChange}>
				[Children]
			</Form>
		);
	}

### Input

| Prop | Mandatory | Value | Description |
|--|--|--|--|
| name | yes | String | input name |
| value | no | String| input value |
| type | yes | String | input type |
| ref | no | Function | React reference function |
| Form HTML Props | no | HTML form Props | All HTML props |

    import { Form, Input } from 'react-form-lite'

    {....}
		<Form className="form" onSubmit={handleSubmit} onChange={handleChange}>
			<Input type="text" name="name" className="class" value="name" />
		</Form>
	{....}

### Select & Options

**Select**
| Prop | Mandatory | Value | Description |
|--|--|--|--|
| name | yes | String | input name |
| value | no | String| input value |
| children | no | React Element | Components children |
| ref | no | Re | React reference function |
| Form HTML Props | no | HTML form Props | All HTML props |

**Option**
| Prop | Mandatory | Value | Description |
|--|--|--|--|
| value | yes | String| input value |
| children | yes | React Element | Components children |
| Form HTML Props | no | HTML form Props | All HTML props |

    import { Form, Select } from 'react-form-lite'

    {....}
		<Select  name="country"  className="form-input">
			<Option value="brazil">Brazil</Option>
		</Select>
	{....}

### Textarea
| Prop | Mandatory | Value | Description |
|--|--|--|--|
| name | yes | String | input name |
| value | no | String| input value |
| ref | no | Function | React reference function |
| Form HTML Props | no | HTML form Props | All HTML props |

    import { Form, Textarea } from 'react-form-lite'

    {....}
		<Form className="form" onSubmit={handleSubmit} onChange={handleChange}>
			<Textarea name="name" className="class" value="name" />
		</Form>
	{....}


## License
This project is under the GNU license. See more at  [LICENSE](https://github.com/flaviogf/strike_product_catalog/blob/master/LICENSE)  file for more information.
