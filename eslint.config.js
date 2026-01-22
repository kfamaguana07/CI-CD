export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },
    rules: {
      // Reglas de calidad de código
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      
      // Reglas de estilo
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      
      // Buenas prácticas
      "eqeqeq": "error",
      "no-var": "warn",
      "prefer-const": "warn"
    }
  }
];