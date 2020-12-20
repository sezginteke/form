import { FormModeType } from "@acorn/form-model";
import { Form, FormAction } from "../lib";

@Form({
  title: (mode: FormModeType): string => {
    if (mode === FormModeType.SAVE) {
      return "Form Save";
    }
    return "Form Update";
  },
})
@FormAction([
  {
    label: () => {
      return "Cancel";
    },

    call: (): void => {},
    validateForm: false,
  },
  {
    label: (mode: FormModeType) => {
      if (mode === FormModeType.SAVE) {
        return "Save";
      }
      return "Update";
    },
    call: (): void => {},
    validateForm: false,
  },
])
class AnnotationSample {}

export default AnnotationSample;
