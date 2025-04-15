export default {
  parser: 'babel-ts', // TypeScript 사용 시
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': 'warn',
    eqeqeq: 'error',
    'prefer-const': 'warn',
    'no-magic-numbers': 'warn',
    'react/prop-types': 'off',

    // 세미콜론 관련 규칙
    semi: ['error', 'always'], // 세미콜론을 항상 사용하도록 강제
    'semi-spacing': ['error', { before: false, after: true }], // 세미콜론 뒤에 공백을 추가
    'no-extra-semi': 'error', // 불필요한 세미콜론을 금지

    // 들여쓰기 및 공백 관련 규칙
    indent: ['error', 2], // 2칸 들여쓰기
    'no-mixed-spaces-and-tabs': 'error', // 탭과 공백 혼용 금지
    'space-infix-ops': 'error', // 연산자 양쪽에 공백 추가
    'space-before-function-paren': ['error', 'never'], // 함수 괄호 앞에 공백 금지
    'comma-dangle': ['error', 'always-multiline'], // 여러 줄에 걸친 경우 후행 콤마 사용

    // 기타 스타일 규칙
    quotes: ['error', 'single'], // 작은 따옴표 사용
    'arrow-parens': ['error', 'always'], // 화살표 함수에서 괄호를 항상 사용하도록 강제
  },
  plugins: [
    'react', // React 관련 룰 제공
    'jsx-a11y', // 접근성 관련 규칙
    'import', // import 관련 규칙
    'react-hooks', // React Hooks 관련 규칙
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
