cd bud && hyperfine --warmup 3 --export-markdown ../bud.md 'yarn bud build --minimize'
cd ../mix && hyperfine --warmup 3 --export-markdown ../mix.md 'yarn mix build --production'
