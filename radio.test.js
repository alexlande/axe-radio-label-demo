import React from "react";
import axe from "axe-core";
import { mountToDoc } from "./test-helpers";

const RadioFields = () => (
  <fieldset>
    <legend>Options</legend>
    <label>
      <input type="radio" name="category" value="a" /> A
    </label>

    <label>
      <input type="radio" name="category" value="b" /> B
    </label>
  </fieldset>
);

test("component has no aXe violations", done => {
  const component = mountToDoc(<RadioFields />);
  const node = component.getDOMNode();

  const config = {};
  axe.run(node, config, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).toHaveLength(0);
    done();
  });
});
