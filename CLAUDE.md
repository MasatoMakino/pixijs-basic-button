# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build TypeScript
npm run buildTS

# Run tests (browser-based via Vitest + WebDriverIO)
npm test

# Run single test file
npx vitest --run __test__/BasicClickButton.spec.ts

# Run tests with coverage
npm run coverage

# Start development server (watch mode)
npm run start:dev

# Build all (TypeScript + demo + API docs)
npm run build

# Format code (via lint-staged/Prettier on commit)
npx prettier --write "src/**/*.ts"
```

## Architecture

This is a TypeScript library providing interactive button components for pixi.js v8.

### Button Class Hierarchy

```text
BasicClickButton<T>          # Base class - stateless click button
    └── BasicCheckButton<T>  # Toggle button with selection state
            └── BasicRadioButton<T>  # Mutually exclusive selection
```

### Core Components

- **ButtonMaterialSet**: Container collection for button visual states (normal, over, down, disable, select variants)
- **ButtonLabelColorSet**: Color definitions for text labels across button states
- **SelectionState**: EventEmitter for selection events (`selected`/`unselected`)
- **BasicRadioButtonManager**: Manages exclusive selection within a radio button group

### Button States

Defined in `BasicButtonState`: `normal`, `normal_over`, `normal_down`, `disable`, `select`, `select_over`, `select_down`

### Key Design Patterns

- Buttons extend pixi.js `Container` and use `eventMode = "static"` for pointer events
- Materials use visibility toggling (not add/remove) for state changes
- Generic type `<T>` allows typed `buttonValue` for data binding
- Selection events propagate through `SelectionState` EventEmitter
