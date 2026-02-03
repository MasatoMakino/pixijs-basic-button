# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All npm commands run inside DevContainer for supply chain security.

```bash
# Build TypeScript
devcontainer exec --workspace-folder . npm run buildTS

# Run tests (browser-based via Vitest + WebDriverIO)
devcontainer exec --workspace-folder . npm run test:ci

# Run single test file
devcontainer exec --workspace-folder . npx vitest --run __test__/BasicClickButton.spec.ts

# Run tests with coverage
devcontainer exec --workspace-folder . npm run coverage:ci

# Start development server (watch mode)
devcontainer exec --workspace-folder . npm run start:dev

# Build all (TypeScript + demo + API docs)
devcontainer exec --workspace-folder . npm run build

# Format code
devcontainer exec --workspace-folder . npx prettier --write "src/**/*.ts"

# Check assigned host port for dev server
docker port $(docker ps -q --filter name=-npm-runner)
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
