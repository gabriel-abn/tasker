import { Task } from "@domain/.";
import { describe, expect, it } from "vitest";

describe("Unit test: Tasks", () => {
  it("should have a description", () => {
    const task: Task = {
      tag: "tag",
      description: "description",
    };

    expect(task.description).toBe("description");
  });
});
