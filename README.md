minierpeng-ui

# 所有包进行构建

`pnpm --filter "./packages/**" run build`

# 查看tsconfig 实际应用的编译选项

`npx tsc -p tsconfig.src.json --showConfig`
