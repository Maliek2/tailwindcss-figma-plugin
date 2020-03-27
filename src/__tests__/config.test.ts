import * as fs from "fs";
import * as path from "path";
import defaultConfig from "../../node_modules/tailwindcss/stubs/defaultConfig.stub";
import {
  convertConfigColor,
  fetchConfigColors,
  parseConfig
} from "../core/config";

const colors = {
  transparent: "transparent",
  hex6: "#E53E3E",
  hex8: "#E53E3E80",
  rgb: "rgb(56,161,105)",
  rgba: "rgba(49,151,149, 0.5)",
  hsl: "hsl(170, 45%, 45%)",
  hsla: "hsla(170, 45%, 45%, 0.5)"
};

describe("parseConfig", () => {
  // Mimick tailwind.config.js upload via UI by using the default stub
  const defaultConig: string = fs.readFileSync(
    path.join(
      __dirname,
      "../../node_modules/tailwindcss/stubs/defaultConfig.stub.js"
    ),
    "utf-8"
  );

  describe("reading a valid configuration file", () => {
    it("should return an object with theme field", () => {
      expect(parseConfig(defaultConig)).toHaveProperty("theme");
    });
  });

  describe("reading an invalid configuration file", () => {
    it("should return an empty object", () => {
      console.error = jest.fn();
      try {
        parseConfig(null);
      } catch (error) {
        expect(console.error).toHaveBeenCalled();
        expect(error);
      }
    });
  });
});

describe("fetchConfigColor", () => {
  describe("reading a valid config", () => {
    it("should return an object with color name and value", () => {
      const fetchedColors = fetchConfigColors(defaultConfig);
      expect(fetchedColors[0]).toHaveProperty("name");
      expect(fetchedColors[0]).toHaveProperty("value");
    });
  });
});

describe("convertConfigColor", () => {
  describe("Passing a valid config color", () => {
    let currentColor: RGBA;
    it("should return object from transparent string", () => {
      currentColor = convertConfigColor(colors["transparent"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hex6", () => {
      currentColor = convertConfigColor(colors["hex6"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hex8", () => {
      currentColor = convertConfigColor(colors["hex8"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from rgb", () => {
      currentColor = convertConfigColor(colors["rgb"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from rgba", () => {
      currentColor = convertConfigColor(colors["rgba"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hsl", () => {
      currentColor = convertConfigColor(colors["hsl"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hsla", () => {
      currentColor = convertConfigColor(colors["hsla"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });
  });
});
