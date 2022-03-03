import _ from "lodash";

export const validate = (formValues) => {
  let errors = {};

  if (_.isEmpty(formValues.title)) {
    errors.title = "Title is required!";
  }

  if (_.isEmpty(formValues.vendor)) {
    errors.vendor = "Vendor is required!";
  }

  if (_.isEmpty(formValues.status)) {
    errors.status = "Status is required!";
  }

  if (_.isEmpty(formValues.tags)) {
    errors.tags = "Tags is required!";
  }

  return errors;
};
