import {vi} from "vitest"
import assert from "assert"

vi.stubGlobal('eq', assert.equal)
vi.stubGlobal('ok', assert.ok)
vi.stubGlobal('nok', (val) => assert.ok(!val))
