import { FormModeType } from "@acorn/form-model";
import { ANNOTATION_FORM, ANNOTATION_FORM_ACTION } from "../lib";
import AnnotationSample from "../example/AnnotationSample";

describe("form annotation", () => {
  let form: AnnotationSample;

  beforeAll(() => {
    form = new AnnotationSample();
  });

  test("read form annotation", () => {
    expect(
      Reflect.getMetadata(ANNOTATION_FORM, form).title(FormModeType.SAVE)
    ).toBe("Form Save");
  });

  test("read form action annotation", () => {
    expect(Reflect.getMetadata(ANNOTATION_FORM_ACTION, form).length).toEqual(2);
  });
});
