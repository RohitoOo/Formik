import React from "react"

import { Formik, withFormik } from "formik"
class App extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    const { values, handleChange } = this.props
    return (
      <div className="App">
        {console.log(this.props, values)}
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
    )
  }
}

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      name: "Rohito"
    }
  }
})(App)

export default FormikApp
